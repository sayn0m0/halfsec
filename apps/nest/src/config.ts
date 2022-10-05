import { config } from 'dotenv';

config();

interface IEnv {
  FE_URL: string;
  DEVELOPMENT: string;
  PORT: string;
  DB: {
    HOSTNAME: string;
    PORT: number;
    USERNAME: string;
    PASSWORD: string;
    DB_NAME: string;
  };
}

const env: IEnv = {
  FE_URL: process.env.FE_URL!,
  DEVELOPMENT: process.env.DEVELOPMENT!,
  PORT: process.env.PORT,
  DB: {
    HOSTNAME: process.env.PG_HOSTNAME!,
    PORT: Number(process.env.PG_PORT!),
    USERNAME: process.env.PG_USERNAME!,
    PASSWORD: process.env.PG_PASSWORD!,
    DB_NAME: process.env.PG_DB_NAME!,
  },
};

export default env;
