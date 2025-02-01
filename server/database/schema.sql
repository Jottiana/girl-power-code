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
    woman_name VARCHAR(100) NOT NULL,
    bio TEXT,
    image_url VARCHAR(2048),
    wiki_link VARCHAR(2048)
);

CREATE TABLE admin (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);

INSERT INTO woman (woman_name, bio, image_url, wiki_link)
VALUES 
  ('Ada Lovelace', 'Pionnière de la programmation', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png/260px-Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850_-_cropped.png', 'https://fr.wikipedia.org/wiki/Ada_Lovelace'),
  ('Grace Hopper', 'Créatrice du langage COBOL', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/260px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg', 'https://fr.wikipedia.org/wiki/Grace_Hopper'),
  ('Carol Shaw', 'Une des premières conceptrice de jeux vidéo', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Carol_Shaw_Holding_Gold_River_Raid_Cartridge.jpg/260px-Carol_Shaw_Holding_Gold_River_Raid_Cartridge.jpg', 'https://fr.wikipedia.org/wiki/Carol_Shaw'),
  ('Fei-Fei Li', 'Informaticienne et chercheuse spécialiste de la vision artificielle', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Fei-Fei_Li_at_AI_for_Good_2017.jpg/260px-Fei-Fei_Li_at_AI_for_Good_2017.jpg', 'https://fr.wikipedia.org/wiki/Fei-Fei_Li'),
  ('Kimberly Bryant', 'Fondatrice de Black Girls Code', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Kimberly_Bryant%2C_Black_Girls_Code_%40_SXSW_2016_%28cropped%29.jpg/260px-Kimberly_Bryant%2C_Black_Girls_Code_%40_SXSW_2016_%28cropped%29.jpg', 'https://fr.wikipedia.org/wiki/Kimberly_Bryant'),
  ('Rana el Kaliouby', 'Informaticienne et chercheuse dans le domaine de la reconnaissance de faciale', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Rana_el_Kaliouby.jpg/260px-Rana_el_Kaliouby.jpg', 'https://fr.wikipedia.org/wiki/Rana_el_Kaliouby');