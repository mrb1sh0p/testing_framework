import Database from '../models/Database.js';
import fs from 'fs/promises';

export default async function generateReport() {
  const results = await Database.getTestResults();
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Test Report</title>
      <style>
        table { border-collapse: collapse; width: 100%; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
        tr:nth-child(even) { background-color: #f2f2f2; }
        .passed { background-color: #d4edda; }
        .failed { background-color: #f8d7da; }
      </style>
    </head>
    <body>
      <h1>Test Automation Report</h1>
      <table>
        <tr>
          <th>Test Name</th>
          <th>Status</th>
          <th>Execution Time</th>
          <th>Error Message</th>
        </tr>
        ${results.map(result => `
          <tr class="${result.status.toLowerCase()}">
            <td>${result.test_name}</td>
            <td>${result.status}</td>
            <td>${result.execution_time}</td>
            <td>${result.error_message || ''}</td>
          </tr>
        `).join('')}
      </table>
    </body>
    </html>
  `;

  await fs.writeFile('test-report.html', html);
}