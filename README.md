# Distinct nulls POC

SQList, Postgres, and MySQL treat null values as distinct for the purpose of a unique index. (The SQL spec is a little ambiguous so other dbs might behave differently.)

To test:

1. Create `.env` with:
   ```
   DATABASE_URL="file:./dev.db"
   ```
2. Run `yarn` to install dependencies
3. Run `yarn prisma migrate` to generate prisma client
4. Run `yarn ts-node` to verify behavior
