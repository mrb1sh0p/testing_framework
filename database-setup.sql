CREATE DATABASE IF NOT EXISTS automation_reports;
USE automation_reports;

CREATE TABLE IF NOT EXISTS test_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    test_name VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL,
    execution_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    error_message TEXT
);