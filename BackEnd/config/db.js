import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const { PGHOST, PGDATABASE , PGUSER , PGPASSWORD } = process.env;

export const PGSQL = neon(
  `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmodel=require`
);  

