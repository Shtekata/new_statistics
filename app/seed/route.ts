import bcrypt from 'bcrypt'
import { sql } from '../lib/sql-postgres-client'
import { invoices, customers, revenue, users } from '../lib/placeholder-data'

async function seedUsers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `

  const insertedUsers = await Promise.all(
    users.map(async user => {
      const hashedPassword = await bcrypt.hash(user.password, 10)
      return sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `
    })
  )

  return insertedUsers
}

async function seedInvoices() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

  await sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL,
      time TIME NOT NULL
    );
  `

  const insertedInvoices = await Promise.all(
    invoices.map(
      invoice => sql`
        INSERT INTO invoices (customer_id, amount, status, date, time)
        VALUES (${invoice.customer_id}, ${invoice.amount}, ${invoice.status}, ${invoice.date}, ${invoice.time})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  )

  return insertedInvoices
}

async function seedCustomers() {
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

  await sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `

  const insertedCustomers = await Promise.all(
    customers.map(
      customer => sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${customer.id}, ${customer.name}, ${customer.email}, ${customer.image_url})
        ON CONFLICT (id) DO NOTHING;
      `
    )
  )

  return insertedCustomers
}

async function seedRevenue() {
  await sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL,
      number INT NOT NULL
    );
  `

  const insertedRevenue = await Promise.all(
    revenue.map(
      rev => sql`
        INSERT INTO revenue (month, revenue, number)
        VALUES (${rev.month}, ${rev.revenue},${rev.number})
        ON CONFLICT (month) DO NOTHING;
      `
    )
  )

  return insertedRevenue
}

export async function GET() {
  try {
    // await seedUsers()
    const users = await sql`select*from users`
    // await seedCustomers()
    const customers = await sql`select*from customers`
    // await seedInvoices()
    const invoices = await sql`select*from invoices`
    // await seedRevenue()
    const revenue = await sql`select*from revenue`
    return Response.json({
      message: 'Database seeded successfully',
      users: users.rows,
      customers: customers.rows,
      invoices: invoices.rows,
      revenue: revenue.rows,
    })
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
