import mysql from 'mysql2/promise';
import config from '../config/database.js';

class Database {
  constructor() {
    this.pool = mysql.createPool(config);
  }

  async saveTestResult(testResult) {
    const connection = await this.pool.getConnection();
    try {
      await connection.query(
        'INSERT INTO test_results (test_name, status, error_message) VALUES (?, ?, ?)',
        [testResult.testName, testResult.status, testResult.errorMessage]
      );
    } finally {
      connection.release();
    }
  }

  async getTestResults() {
    const [rows] = await this.pool.query('SELECT * FROM test_results');
    return rows;
  }
}

export default new Database();