import { DATABASE_DEV, DATABASE_PROD, NODE_ENV } from './envs.js'

const _defaultConfig = {
  logging: false,
  native: false,
  dialect: 'postgres',
}

export const DATABASE_CONFIG = {
  URI: NODE_ENV === 'development' ? DATABASE_DEV : DATABASE_PROD,
  OPTIONS:
    NODE_ENV === 'development'
      ? {
          ..._defaultConfig,
        }
      : {
          ..._defaultConfig,
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
        },
}
