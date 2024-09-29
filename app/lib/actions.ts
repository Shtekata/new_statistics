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
const CreateInvoice = FormSchema.omit({ id: true, date: true, time: true })

export async function createInvoice(formData: FormData) {
  //   const rawFormData = Object.fromEntries(formData.entries())
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  })
  const amountInCents = amount * 100
  const date = new Date().toISOString().split('T')[0]
  const time = new Date().toISOString().split('T')[1]

  await sql`insert into invoices (customer_id, amount, status, date, time)
    values (${customerId}, ${amountInCents}, ${status}, ${date}, ${time})`

  revalidatePath('/dashboard/invoices')
  redirect('/dashboard/invoices')
}
