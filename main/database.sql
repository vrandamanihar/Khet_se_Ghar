CREATE DATABASE IF NOT EXISTS khet_se_ghar;
USE khet_se_ghar;
CREATE TABLE IF NOT EXISTS loginPage (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);
INSERT INTO loginPage (username, password) VALUES
('user1', 'password1'),
('user2', 'password2');
CREATE TABLE IF NOT EXISTS signUpPage (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE
);