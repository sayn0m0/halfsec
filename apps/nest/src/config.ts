import { config } from 'dotenv';

config();

interface IEnv {
  FE_URL: string;
  DEVELOPMENT: string;
  PORT: string;
}

const env: IEnv = {
  FE_URL: process.env.FE_URL!,
  DEVELOPMENT: process.env.DEVELOPMENT!,
  PORT: process.env.PORT,
};

export default env;
