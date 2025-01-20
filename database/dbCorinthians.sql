CREATE DATABASE dbCorinthians;
USE dbCorinthians;

CREATE TABLE player (
	id_player INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(45),
    position VARCHAR(20),
    number CHAR(3),
    birthplace VARCHAR(45),
    date_birth DATE,
    weight INT,
    height FLOAT,
    image VARCHAR(255)
);

INSERT INTO player (name, position, number, birthplace, date_birth, weight, height, image) VALUES
('Hugo Souza', 'Goalkeeper', '1', 'Rio de Janeiro, Brasil', '1999-01-31', 95, 1.96, 'https://static.corinthians.com.br/uploads/172485122710cc088a48f313ab3b1f4e6e76353dd4.png'),
('Matheus Donelli', 'Goalkeeper', '32', 'São Paulo, Brasil', '2002-05-17', 85, 1.89, 'https://static.corinthians.com.br/uploads/1724851255b5c01503041b70d41d80e3dbe31bbd8c.png'),
('Diego Palacios', 'Full-back', '6', 'Guaiaquil, Equador', '1999-07-12', 70, 1.69, 'https://static.corinthians.com.br/uploads/17248518707fec306d1e665bc9c748b5d2b99a6e97.png'),
('Hugo', 'Full-back', '46', 'Alagoas, Brasil', '1997-08-29', 70, 1.79, 'https://static.corinthians.com.br/uploads/1724851848a2cc63e065705fe938a4dda49092966f.png'),
('Matheuzinho', 'Full-back', '2', 'Paraná, Brasil', '2000-09-08', 73, 1.71, 'https://static.corinthians.com.br/uploads/172485182385137246c8103963068cfe72b4c44e3e.png'),
('Matheus Bidu', 'Full-back', '21', 'São Paulo, Brasil', '1999-05-04', 72, 1.72, 'https://static.corinthians.com.br/uploads/1724851898673271cc47c1a4e77f57e239ed4d28a7.png'),

('Félix Torres', 'Center-back', '3', 'San Lorenzo, Equador', '1997-01-11', 80, 1.87, null),
('Gustavo Henrique', 'Center-back', '14', 'São Paulo, Brasil', '1993-03-24', 85, 1.96, null),
('Cacá', 'Center-back', '4', 'São Paulo, Brasil', '1999-04-25', 78, 1.83, null),
('Caetano', 'Center-back', '5', 'São Paulo, Brasil', '1999-06-19', 75, 1.84, null),
('Raul Gustavo', 'Center-back', '34', 'Pedro Leopoldo, Brasil', '1999-08-30', 79, 1.88, null),

('Paulinho', 'Midfielders', '15', 'São Paulo, Brasil', '1988-07-25', 71, 1.80, null),
('Igor Coronado', 'Midfielders', '18', 'Londres, Inglaterra', '1992-08-18', 65, 1.70, null),
('Raniele', 'Midfielders', '17', 'Camaçari, Brasil', '1997-06-17', 74, 1.78, null),
('Fausto Vera', 'Midfielders', '7', 'Hurlingham, Argentina', '2000-03-26', 72, 1.76, null),
('Ryan', 'Midfielders', '20', 'São Paulo, Brasil', '2003-02-15', 70, 1.75, null),
('Breno Bidon', 'Midfielders', '25', 'São Paulo, Brasil', '2004-05-10', 68, 1.77, null),
('Matheus Araújo', 'Midfielders', '26', 'Belém, Brasil', '2002-01-08', 70, 1.74, null),
('Rodrigo Garro', 'Midfielders', '10', 'Villa María, Argentina', '1998-01-04', 73, 1.78, null),
('Guilherme Biro', 'Midfielders', '27', 'São Paulo, Brasil', '2004-04-20', 66, 1.72, null),

('Gustavo Mosquito', 'Foward', '19', 'Rio de Janeiro, Brasil', '1997-05-05', 68, 1.73, null),
('Pedro Raul', 'Foward', '39', 'Porto Alegre, Brasil', '1996-11-05', 83, 1.92, null),
('Giovane', 'Foward', '11', 'São Paulo, Brasil', '2003-01-01', 70, 1.80, null),
('Wesley', 'Foward', '24', 'São Paulo, Brasil', '2000-03-13', 72, 1.75, null),
('Yuri Alberto', 'Foward', '9', 'São José dos Campos, Brasil', '2001-03-18', 79, 1.83, 'https://static.corinthians.com.br/uploads/1724852111c0d58683701171db454d0456f2508f90.png');

CREATE TABLE post (
	id_post INT PRIMARY KEY AUTO_INCREMENT,
    content VARCHAR(45)
);

INSERT INTO post (content) VALUES 
	('Vai Corinthiansss');