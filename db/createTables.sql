DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS quiz;
DROP TABLE IF EXISTS questions;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(20) NOT NULL,
    role ENUM ('Mentor', 'Student', 'Teacher')
);

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    category_name VARCHAR(30) NOT NULL
);

CREATE TABLE quiz (
    quiz_id SERIAL PRIMARY KEY,
    created_by VARCHAR(20) NOT NULL,
    descriptions VARCHAR(50) NOT NULL,
    category_id INT REFERENCES categories(id)
);

CREATE TABLE questions (
    question_id SERIAL PRIMARY KEY,
    quiz_id INT REFERENCES quiz(quiz_id),
    question_text VARCHAR(80) NOT NULL,
    answer VARCHAR(50) NOT NULL,
    opt1 VARCHAR(50) NOT NULL,
    opt2 VARCHAR(50),
    opt3 VARCHAR(50)
);


CREATE TABLE scores (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    score INT NOT NULL,
    quiz_id INT REFERENCES quiz(quiz_id)
)