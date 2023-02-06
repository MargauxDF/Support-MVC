DROP TABLE IF EXISTS wilder;

CREATE TABLE wilder (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  username varchar(255) UNIQUE NOT NULL,
  password varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  email varchar(255) UNIQUE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO wilder 
(firstname, lastname, username, password, city, email) 
VALUES 
('Ryan', 'Beaujot', 'RyanB', 'Tests28!', 'Lyon', 'ryan@mail.com'), 
('Iris', 'Succi', 'IrisS2', 'Tests28!', 'Nice', 'iris@mail.com'), 
('Madeline', 'Thomas', 'Maddie', 'Tests28!', 'Lyon', 'madeline@mail.com'),
('Rachid', 'Faik', 'RachidF', 'Tests28!', 'Lyon', 'rachid@mail.com'),
('Doroteya', 'Donova', 'DoroT', 'Tests28!', 'Lyon', 'doroteya@mail.com'),
('Sahrane', 'Guassemi', 'LeS', 'Tests28!', 'Lyon', 'sahrane@mail.com'),
('Matthieu', 'Georges', 'MatthieuG', 'Tests28!', 'Lyon', 'matthieu@mail.com'),
('Quentin', 'Ferrarri', 'quentinF', 'Tests28!', 'Lyon', 'quentin@mail.com'),
('Samy', 'Dumas','SamyD', 'Tests28!', 'Lyon', 'samy@mail.com'),
('Chloé', 'Bideau', 'ChloeB', 'Tests28!', 'Lyon', 'chloé@mail.com'),
('Daryl', 'Chaigne', 'DarylC', 'Tests28!', 'Lyon', 'daryl@mail.com'),
('Morgan', 'Mezaache', 'MorganM', 'Tests28!', 'Lyon', 'morgan@mail.com'),
('Mohammed Amine', 'Alouane', 'Amine', 'Tests28!', 'Lyon', 'amine@mail.com'),
('Idir', 'Adile', 'IdirA', 'Tests28!', 'Lyon', 'idir@mail.com'),
('Marion', 'Lalonde', 'MarionL10', 'Tests28!', 'Lyon', 'marion@mail.com'),
('Javier', 'Lopez', 'JavierL', 'Tests28!', 'Lyon', 'javier@mail.com'),
('Jonathan', 'Garonian', 'JohnG', 'Tests28!', 'Lyon', 'john@mail.com'),
('Vincent', 'Chabosson', 'VinceC', 'Tests28!', 'Lyon', 'vincent@mail.com'),
('Lucas', 'Rondepierre', 'LucasR', 'Tests28!', 'Lyon', 'lucas@mail.com'),
('Arnaud', 'Champetier', 'ArnaudC44', 'Tests28!', 'Lyon', 'arnaud@mail.com'),
('Davy', 'Robert', 'DavyR', 'Tests28!', 'Lyon', 'davy@mail.com'),
('Gaëlle', 'Goyon', 'GaelleG', 'Tests28!', 'Lyon', 'gaelle@mail.com'),
('Pierre', 'Paillard', 'PierreP', 'Tests28!', 'Villeurbanne', 'pierre@mail.com'), 
('Margaux', 'De Filippis', 'Gomar1', 'Tests28!', 'Lyon', 'margaux@mail.com');
