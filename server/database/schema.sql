DROP DATABASE IF EXISTS girlpower;
CREATE DATABASE girlpower;
USE girlpower;

CREATE TABLE category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE game (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    url VARCHAR(255) NOT NULL
);

CREATE TABLE game_category (
    id INT PRIMARY KEY AUTO_INCREMENT,
    game_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (game_id) REFERENCES game(id) ON DELETE CASCADE,
    FOREIGN KEY (category_id) REFERENCES category(id) ON DELETE CASCADE
);

CREATE TABLE woman (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    bio TEXT,
    image_url VARCHAR(255),
    wiki_link VARCHAR(255)
);

CREATE TABLE admin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);
