import { Metadata } from 'next'
import { fetchFilteredCustomers } from '@/app/lib/data'
import CustomersTable from '@/app/ui/customers/table'

export const metadata: Metadata = { title: 'Customers' }
type tSearchParams = Promise<{ query?: string; page?: string }>

export default async function Page(props: { searchParams?: tSearchParams }) {
  const query = (await props.searchParams)?.query || ''

  const customers = await fetchFilteredCustomers(query)

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  )
}
