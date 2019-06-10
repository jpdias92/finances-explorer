create database finances_explorer;

USE finances_explorer;

-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql:3306
-- Generation Time: Jun 10, 2019 at 06:27 PM
-- Server version: 5.7.26
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finances_explorer`
--

-- --------------------------------------------------------

--
-- Table structure for table `contributions`
--

CREATE TABLE `contributions` (
  `id` int(11) NOT NULL,
  `year` int(11) NOT NULL,
  `monthly_value` decimal(10,2) NOT NULL,
  `modality` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` int(11) NOT NULL,
  `title` varchar(15) DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `gender` tinyint(1) NOT NULL,
  `nationality` varchar(50) DEFAULT NULL,
  `birth_date` date DEFAULT NULL,
  `death_date` date DEFAULT NULL,
  `street_name` varchar(100) DEFAULT NULL,
  `door_number` varchar(15) DEFAULT NULL,
  `flat` varchar(50) DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `contact1` varchar(20) DEFAULT NULL,
  `contact2` varchar(20) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `baptism_date` date DEFAULT NULL,
  `communion_date` date DEFAULT NULL,
  `confirmation_date` date DEFAULT NULL,
  `marital_status` varchar(30) DEFAULT NULL,
  `partner_id` int(11) DEFAULT NULL,
  `occupation` varchar(100) DEFAULT NULL,
  `professional_qualifications` varchar(50) DEFAULT NULL,
  `father_id` int(11) DEFAULT NULL,
  `mother_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `title`, `name`, `gender`, `nationality`, `birth_date`, `death_date`, `street_name`, `door_number`, `flat`, `postal_code`, `city`, `contact1`, `contact2`, `email`, `baptism_date`, `communion_date`, `confirmation_date`, `marital_status`, `partner_id`, `occupation`, `professional_qualifications`, `father_id`, `mother_id`) VALUES
(1, 'Miss', 'Adelaide Pereira', 1, 'Portuguesa', '1928-05-06', NULL, 'R. Pádua Correia', '166', '1º Dtº', '4430-999', 'Vila Nova de Gaia', '22 3860549', '919246535', NULL, NULL, NULL, '1943-01-15', 'Solteiro', NULL, 'Funcionária Pública Reformada', '9º ano', NULL, NULL),
(2, NULL, 'Afonso Santos', 0, 'Portuguesa', '1953-03-15', NULL, 'R. Dr. Francisco Sá Carneiro', '1366', '', '4430-999', 'Vila Nova de Gaia', '22 9789768', '22 2006908', 'afonso.santos@gmail.com', '1955-06-04', NULL, NULL, 'Casado', 11, 'Administrativo', 'Curso Profissional de nível 3', NULL, NULL),
(3, 'Dr.', 'Tiago Gomes Cunha', 0, 'Portuguesa', '1934-11-30', '2019-05-08', 'R Pombal', '14', '1º Esq.º', '6300-809', 'Guarda', '+351 212 714 472', NULL, NULL, '1935-09-08', '1944-07-16', '1950-04-02', 'Viúvo', NULL, 'Advogado Reformado', 'Licenciatura', NULL, NULL),
(4, NULL, 'Rita Lima Barbosa Castro', 1, 'Brasileira', '1946-09-30', NULL, 'Praça das Flores', '92', NULL, '2500-433', 'São Jacinto', '21 760 3798', NULL, NULL, NULL, NULL, NULL, 'Viúva', 10, 'Dona de Casa', '4º ano', NULL, NULL),
(5, NULL, 'Tiago Gomes Araújo', 0, 'Portuguesa', '1991-04-15', NULL, NULL, NULL, NULL, NULL, NULL, '912530408', '962556908', 'tiago.g.araujo@live.pt', '1992-08-30', '2000-02-06', '2008-11-16', 'Solteiro', NULL, 'Engenheiro Informático', 'Mestrado', NULL, NULL),
(6, NULL, 'Carlos Pereira', 0, 'Angolana', '1994-08-25', NULL, 'Avenida Sacadura Cabral', '117', 'Hab. 61', '1685-539', 'Caneças', '912 162 893', NULL, 'carlos.per@hotmail.com', '2018-11-13', NULL, NULL, 'Solteiro', NULL, 'Ajudante de Cozinheiro', 'Curso Profissional', NULL, NULL),
(7, 'Dra.', 'Gabriela Barbosa Castro Correia', 1, 'Portuguesa', '1982-06-20', NULL, 'Rua Vasco Gama', '96', '3º Centro', '4430-210', 'Vila Nova de Gaia', NULL, NULL, 'gaby.barbosa.castro@gmail.com', '1983-06-05', '1993-07-18', '2000-09-10', 'Casado', 9, 'Médica', 'Doutoramento', 10, 4),
(8, NULL, 'Sara Castro Cunha Correia', 1, 'Portuguesa', '2018-12-11', NULL, 'Rua Vasco Gama', '96', '3º Centro', '4430-210', 'Vila Nova de Gaia', NULL, NULL, NULL, '2019-06-09', NULL, NULL, 'Solteiro', NULL, NULL, NULL, 9, 7),
(9, 'Dr.', 'Alexandre Ribeiro Cunha Correia', 0, 'Portuguesa', '1980-09-13', NULL, 'Rua Vasco da Gama', '96', '3º Centro', '4430-210', 'Vila Nova de Gaia', '+351 912 764 472', '+351 212 716 472', 'alex.ribeiro.correia@gmail.com', '1981-06-07', '1990-09-09', '2000-09-10', 'Casado', 7, 'Cirurgião', 'Doutoramento', NULL, NULL),
(10, 'Sr.', 'David Rocha Castro', 0, 'Brasileira', '1940-06-05', '2010-02-06', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1941-08-10', NULL, NULL, 'Casado', 4, 'Sapateiro Reformado', '6º ano', NULL, NULL),
(11, NULL, 'Luísa Dias', 1, 'Portuguesa', '1953-10-18', NULL, 'R. Dr. Francisco Sá Carneiro', '1366', NULL, '4430-999', 'Vila Nova de Gaia', '22 9789768', NULL, NULL, NULL, NULL, NULL, 'Casado', 2, NULL, NULL, NULL, NULL),
(12, NULL, 'Carolina Castro Cunha Correia', 1, 'Portuguesa', '2018-12-11', NULL, 'Rua Vasco Gama', '96', '3º Centro', '4430-210', 'Vila Nova de Gaia', NULL, NULL, NULL, '2019-06-09', NULL, NULL, 'Solteiro', NULL, NULL, NULL, 9, 7),
(13, NULL, 'Júlio Castro Cunha Correia', 0, 'Portuguesa', '2010-08-02', NULL, 'Rua Vasco Gama', '96', '3º Centro', '4430-210', 'Vila Nova de Gaia', NULL, NULL, 'julio.castro.correia@hotmail.com', '2011-06-05', '2019-06-09', NULL, 'Solteiro', NULL, NULL, '4º ano', 9, 7),
(14, NULL, 'Daniel Santos Rodrigues', 0, 'Americana', '1994-01-22', NULL, 'Avenida da República', '755', 'Hab. 93', '4430-180', 'Vila Nova de Gaia', '+1 332 555 0123', '+351 917 973 784', 'dany.s.rodrigues@gmail.com', '1994-05-08', '2000-02-06', '2008-11-16', 'Solteiro', NULL, 'Barbeiro', 'Curso Profissional', NULL, NULL),
(15, 'Eng.', 'João Fernando Fontes Oliveira', 0, 'Portuguesa', '1963-01-01', NULL, 'Avenida da República', '488', 'Hab. 32', '4430-910', 'Vila Nova de Gaia', '+351 912 764 765', '22 286 6808', 'joao.ff.oliveira@hotmail.com', '1964-02-23', '1971-12-05', '1978-08-27', 'Casado', 16, 'Engenheiro Eletrotécnico', 'Licenciatura', NULL, NULL),
(16, 'Enfª.', 'Carolina Almeida Oliveira', 1, 'Portuguesa', '1964-11-08', NULL, 'Avenida da República', '488', 'Hab. 32', '4430-910', 'Vila Nova de Gaia', '967 345 567', '22 286 6808', 'carol.alm.oliveira@gmail.com', '1965-04-04', '1973-01-07', NULL, 'Casado', 15, 'Enfermeira', 'Licenciatura', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `movements`
--

CREATE TABLE `movements` (
  `id` int(11) NOT NULL,
  `movement_category_id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `movement_date` date NOT NULL,
  `description` text NOT NULL,
  `comment` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movements`
--

INSERT INTO `movements` (`id`, `movement_category_id`, `amount`, `movement_date`, `description`, `comment`) VALUES
(1, 1, '21.00', '2019-05-05', 'Doação', ''),
(2, 2, '10.50', '2019-06-01', 'Gasto', 'Compras'),
(3, 1, '300.52', '2019-06-02', 'Doação', 'Oferta'),
(4, 2, '10000.00', '2018-12-12', 'Vitrais', ''),
(5, 2, '2000.00', '2019-06-05', 'Teste', '');

-- --------------------------------------------------------

--
-- Table structure for table `movement_categories`
--

CREATE TABLE `movement_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movement_categories`
--

INSERT INTO `movement_categories` (`id`, `name`) VALUES
(1, 'Doação'),
(2, 'Gasto');

-- --------------------------------------------------------

--
-- Table structure for table `notification_groups`
--

CREATE TABLE `notification_groups` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `notification_groups_members`
--

CREATE TABLE `notification_groups_members` (
  `member_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contributions`
--
ALTER TABLE `contributions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movements`
--
ALTER TABLE `movements`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `movement_categories`
--
ALTER TABLE `movement_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification_groups`
--
ALTER TABLE `notification_groups`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notification_groups_members`
--
ALTER TABLE `notification_groups_members`
  ADD PRIMARY KEY (`member_id`,`group_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contributions`
--
ALTER TABLE `contributions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `members`
--
ALTER TABLE `members`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `movements`
--
ALTER TABLE `movements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `movement_categories`
--
ALTER TABLE `movement_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `notification_groups`
--
ALTER TABLE `notification_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
