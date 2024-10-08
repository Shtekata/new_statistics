// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64422',
    name: 'Shtekata',
    email: 'shtekata@gmail.com',
    password: '7u87u8',
  },
  {
    id: '410544b2-4001-4271-9855-fec4b6a64423',
    name: 'a',
    email: 'a@gmail.com',
    password: 'a',
  },
]

const customers = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    name: 'Hector Simpson',
    email: 'hector@simpson.com',
    image_url: '/customers/hector-simpson.png',
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: 'Steven Tey',
    email: 'steven@tey.com',
    image_url: '/customers/steven-tey.png',
  },
  {
    id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
    name: 'Steph Dietz',
    email: 'steph@dietz.com',
    image_url: '/customers/steph-dietz.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: 'Emil Kowalski',
    email: 'emil@kowalski.com',
    image_url: '/customers/emil-kowalski.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B8',
    name: 'Guillermo Rauch',
    email: 'guillermo@rauch.com',
    image_url: '/customers/guillermo-rauch.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBA',
    name: 'Jared Palmer',
    email: 'jared@palmer.com',
    image_url: '/customers/jared-palmer.png',
  },
]

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
    time: '18:30:55',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
    time: '18:30:55',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
    time: '18:30:55',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
    time: '18:30:55',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
    time: '18:30:55',
  },
  {
    customer_id: customers[7].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
    time: '18:30:55',
  },
  {
    customer_id: customers[6].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
    time: '18:30:55',
  },
  {
    customer_id: customers[8].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
    time: '18:30:55',
  },
  {
    customer_id: customers[9].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
    time: '18:30:55',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
    time: '18:30:55',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
    time: '18:30:55',
  },
  {
    customer_id: customers[10].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
    time: '18:30:55',
  },
  {
    customer_id: customers[2].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-18',
    time: '18:30:55',
  },
  {
    customer_id: customers[0].id,
    amount: 8945,
    status: 'paid',
    date: '2023-10-04',
    time: '18:30:55',
  },
  {
    customer_id: customers[11].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
    time: '18:30:55',
  },
]

const revenue = [
  { month: 'Jan', revenue: 2000, number: 1 },
  { month: 'Feb', revenue: 1800, number: 2 },
  { month: 'Mar', revenue: 2200, number: 3 },
  { month: 'Apr', revenue: 2500, number: 4 },
  { month: 'May', revenue: 2300, number: 5 },
  { month: 'Jun', revenue: 3200, number: 6 },
  { month: 'Jul', revenue: 3500, number: 7 },
  { month: 'Aug', revenue: 3700, number: 8 },
  { month: 'Sep', revenue: 2500, number: 9 },
  { month: 'Oct', revenue: 2800, number: 10 },
  { month: 'Nov', revenue: 3000, number: 11 },
  { month: 'Dec', revenue: 4800, number: 12 },
]

export { users, customers, invoices, revenue }
