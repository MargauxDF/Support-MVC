DROP TABLE IF EXISTS wilder;

CREATE TABLE wilder (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname varchar(255) NOT NULL,
  lastname varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  email varchar(255) UNIQUE NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO wilder 
(firstname, lastname, city, email) 
VALUES 
('Ryan', 'Beaujot', 'Lyon', 'ryan@mail.com'), 
('Iris', 'Succi', 'Nice', 'iris@mail.com'), 
('Madeline', 'Thomas', 'Lyon', 'madeline@mail.com'),
('Rachid', 'Faik', 'Lyon', 'rachid@mail.com'),
('Doroteya', 'Donova', 'Lyon', 'doroteya@mail.com'),
('Sahrane', 'Guassemi', 'Lyon', 'sahrane@mail.com'),
('Matthieu', 'Georges', 'Lyon', 'matthieu@mail.com'),
('Quentin', 'Ferrarri', 'Lyon', 'quentin@mail.com'),
('Samy', 'Dumas', 'Lyon', 'samy@mail.com'),
('Chloé', 'Bideau', 'Lyon', 'chloé@mail.com'),
('Daryl', 'Chaigne', 'Lyon', 'daryl@mail.com'),
('Morgan', 'Mezaache', 'Lyon', 'morgan@mail.com'),
('Mohammed Amine', 'Alouane', 'Lyon', 'amine@mail.com'),
('Idir', 'Adile', 'Lyon', 'idir@mail.com'),
('Marion', 'Lalonde', 'Lyon', 'marion@mail.com'),
('Javier', 'Lopez', 'Lyon', 'javier@mail.com'),
('Jonathan', 'Garonian', 'Lyon', 'john@mail.com'),
('Vincent', 'Chabosson', 'Lyon', 'vincent@mail.com'),
('Lucas', 'Rondepierre', 'Lyon', 'lucas@mail.com'),
('Arnaud', 'Champetier', 'Lyon', 'arnaud@mail.com'),
('Davy', 'Robert', 'Lyon', 'davy@mail.com'),
('Gaëlle', 'Goyon', 'Lyon', 'gaelle@mail.com'),
('Pierre', 'Paillard', 'Villeurbanne', 'pierre@mail.com'), 
('Margaux', 'De Filippis', 'Lyon', 'margaux@mail.com');
