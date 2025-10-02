process.loadEnvFile()

export const { PORT = 3000, DATABASE_DEV, DATABASE_PROD, NODE_ENV = 'development' } = process.env
