'use server'

import { z } from 'zod'
import { sql } from './sql-postgres-client'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { signIn } from '@/auth'
import { AuthError } from 'next-auth'

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({ invalid_type_error: 'Please select a customer.' }),
  amount: z.coerce.number().gt(0, { message: 'Please enter an amount greater than 0 Lv.' }),
  status: z.enum(['pending', 'paid'], { invalid_type_error: 'Please select an invoice status.' }),
  date: z.string(),
  time: z.string(),
})

export type State = {
  errors?: {
    customerId?: string[]
    amount?: string[]
    status?: string[]
  }
  message?: string | null
}

function validate(formData: FormData) {
  const ValidateInvoice = FormSchema.omit({ id: true, date: true, time: true })
  //   const rawFormData = Object.fromEntries(formData.entries())
  const validatedFields = ValidateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  })

  let customerId: string = ''
  let amount: number = 0
  let amountInCents: number = 0
  let status: string = ''
  let date: string = ''
  let time: string = ''
  let err: State = {}

  if (validatedFields.success) {
    ;({ customerId, amount, status } = validatedFields.data)
    amountInCents = amount * 100
    date = new Date().toISOString().split('T')[0]
    time = new Date().toISOString().split('T')[1]
  } else {
    err = {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to create Invoice.',
    }
  }

  return { customerId, status, amountInCents, date, time, err }
}

export async function createInvoice(prevState: State, formData: FormData) {
  const { customerId, status, amountInCents, date, time, err } = validate(formData)
  if (err.errors) return err

  try {
    await sql`insert into invoices (customer_id, amount, status, date, time)
    values (${customerId}, ${amountInCents}, ${status}, ${date}, ${time})`
  } catch (e) {
    return { message: 'Database Error: Failed to Create Invoice.' }
  }

  revalidatePath('/dashboard/invoices')
  redirect('/dashboard/invoices')
}

export async function updateInvoice(id: string, prevState: State, formData: FormData) {
  const { customerId, amountInCents, status, err } = validate(formData)
  if (err.errors) return err

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

export async function authenticate(prevState: string | undefined, formData: FormData) {
  try {
    await signIn('credentials', formData)
  } catch (e) {
    if (e instanceof AuthError) {
      switch (e.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials'
        default:
          return 'Something went wrong'
      }
    }
    throw e
  }
}
