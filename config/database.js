import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export default {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'automation_reports',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};