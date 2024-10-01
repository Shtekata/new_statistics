'use server'
import { z } from 'zod'
import { sql } from './sql-postgres-client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
  time: z.string(),
})

function validate(formData: FormData) {
  const ValidateInvoice = FormSchema.omit({ id: true, date: true, time: true })
  //   const rawFormData = Object.fromEntries(formData.entries())
  const { customerId, amount, status } = ValidateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  })
  const amountInCents = amount * 100
  const date = new Date().toISOString().split('T')[0]
  const time = new Date().toISOString().split('T')[1]
  return { customerId, amount, status, amountInCents, date, time }
}

export async function createInvoice(formData: FormData) {
  const { customerId, amountInCents, status, date, time } = validate(formData)

  try {
    await sql`insert into invoices (customer_id, amount, status, date, time)
    values (${customerId}, ${amountInCents}, ${status}, ${date}, ${time})`
  } catch (e) {
    return { message: 'Database Error: Failed to Create Invoice.' }
  }

  revalidatePath('/dashboard/invoices')
  redirect('/dashboard/invoices')
}

export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amountInCents, status } = validate(formData)

  try {
    await sql`update invoices set customer_id = ${customerId}, amount = ${amountInCents}, status = ${status} where id = ${id}`
  } catch (e) {
    return { message: 'Database Error: Failed to Update Invoice.' }
  }

  revalidatePath('/dashboard/invoices')
  redirect('/dashboard/invoices')
}

export async function deleteInvoice(id: string) {
  try {
    await sql`delete from invoices where id = ${id}`
  } catch (e) {
    return { message: 'Database Error: Failed to Delete Invoice.' }
  }
  revalidatePath('/dashboard/invoices')
}
