// Update with your config settings.
const dbName = 'WTUSABootCamp'
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${dbName}`

module.exports = {
  development: {
    client: 'pg',
    connection: connectionString
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
}
