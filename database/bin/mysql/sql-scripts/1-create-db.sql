create database finances_explorer;

USE finances_explorer;

-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql:3306
-- Generation Time: Jun 26, 2019 at 09:08 PM
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
  `gender` tinyint(1) DEFAULT NULL,
  `nationality` int(11) DEFAULT NULL,
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
(1, 'Miss', 'Adelaide Pereira', 1, 1, '1928-05-06', NULL, 'R. Pádua Correia', '166', '1º Dt.', '4430-999', 'Vila Nova de Gaia', '22 3860549', '919246535', NULL, NULL, NULL, '1943-01-15', 'Solteiro', NULL, 'Funcionária Pública Reformada', '9º ano', NULL, NULL),
(2, NULL, 'Afonso Santos', 0, 1, '1953-03-15', NULL, 'R. Dr. Francisco Sá Carneiro', '1366', '3º Dt.', '4430-999', 'Vila Nova de Gaia', '22 9789768', '22 2006908', 'afonso.santos@gmail.com', '1955-06-04', NULL, NULL, 'Casado', 11, 'Administrativo', 'Curso Profissional de nível 3', NULL, NULL),
(3, 'Dr.', 'Tiago Gomes Cunha', 0, 1, '1934-11-30', '2019-05-08', 'R Pombal', '14', '1º Esq.', '6300-809', 'Guarda', '+351 212 714 472', NULL, NULL, '1935-09-08', '1944-07-16', '1950-04-02', 'Viúvo', NULL, 'Advogado Reformado', 'Licenciatura', NULL, NULL),
(4, NULL, 'Rita Lima Barbosa Castro', 1, 2, '1946-09-30', NULL, 'Praça das Flores', '92', '6º Centro-Esq.', '2500-433', 'São Jacinto', '21 760 3798', NULL, NULL, NULL, NULL, NULL, 'Viúvo', 10, 'Dona de Casa', '4º ano', NULL, NULL),
(5, NULL, 'Tiago Gomes Araújo', 0, 1, '1991-04-15', NULL, 'R. Damião Góis', '79', '1º andar', '2695-093', 'São João da Talha', '912530408', '962556908', 'tiago.g.araujo@live.pt', '1992-08-30', '2000-02-06', '2008-11-16', 'Solteiro', NULL, 'Engenheiro Informático', 'Mestrado', NULL, NULL),
(6, '', 'Carlos Pereira', 0, 4, '1994-08-25', NULL, 'Avenida Sacadura Cabral', '117', 'Hab. 61', '1685-539', 'Caneças', '912 162 893', NULL, 'carlos.per@hotmail.com', '2018-11-13', NULL, NULL, 'Solteiro', NULL, 'Ajudante de Cozinheiro', 'Curso Profissional', NULL, NULL),
(7, 'Dra.', 'Gabriela Barbosa Castro Correia', 1, 1, '1982-06-20', NULL, 'Rua Vasco Gama', '96', '3º Centro', '4430-210', 'Vila Nova de Gaia', NULL, NULL, 'gaby.barbosa.castro@gmail.com', '1983-06-05', '1993-07-18', '2000-09-10', 'Casado', 9, 'Médica', 'Doutoramento', 10, 4),
(8, NULL, 'Sara Castro Cunha Correia', 1, 1, '2018-12-11', NULL, 'Rua Vasco Gama', '96', '3º Centro', '4430-210', 'Vila Nova de Gaia', NULL, NULL, NULL, '2019-06-09', NULL, NULL, 'Solteiro', NULL, NULL, NULL, 9, 7),
(9, 'Dr.', 'Alexandre Ribeiro Cunha Correia', 0, 1, '1980-09-13', NULL, 'Rua Vasco da Gama', '96', '3º Centro', '4430-210', 'Vila Nova de Gaia', '+351 912 764 472', '+351 212 716 472', 'alex.ribeiro.correia@gmail.com', '1981-06-07', '1990-09-09', '2000-09-10', 'Casado', 7, 'Cirurgião', 'Doutoramento', NULL, NULL),
(10, NULL, 'David Rocha Castro', 0, 1, '1940-06-05', '2010-02-06', 'Avenida João Crisóstomo', '74', 'Hab. 63', '1069-188', 'Lisboa', NULL, NULL, NULL, '1941-08-10', NULL, NULL, 'Casado', 4, 'Sapateiro Reformado', '6º ano', NULL, NULL),
(11, NULL, 'Melinda de Almeida Santos', 1, 1, '1953-10-18', NULL, 'R. Dr. Francisco Sá Carneiro', '1366', '4º Esq.', '4430-999', 'Vila Nova de Gaia', '22 9789768', NULL, NULL, NULL, NULL, NULL, 'Casado', 2, 'Reformada', NULL, NULL, NULL),
(12, NULL, 'Carolina Castro Cunha Correia', 1, 1, '2018-12-11', NULL, 'Rua Vasco Gama', '96', '3º Centro', '4430-210', 'Vila Nova de Gaia', NULL, NULL, NULL, '2019-06-09', NULL, NULL, 'Solteiro', NULL, NULL, NULL, 9, 7),
(13, NULL, 'Júlio Castro Cunha Correia', 0, 1, '2010-08-02', NULL, 'Rua Vasco Gama', '96', '3º Centro', '4430-210', 'Vila Nova de Gaia', NULL, NULL, 'julio.castro.correia@hotmail.com', '2011-06-05', '2019-06-09', NULL, 'Solteiro', NULL, 'Estudante', '4º ano', 9, 7),
(14, NULL, 'Daniel Santos Rodrigues', 0, 9, '1994-01-22', NULL, 'Avenida da República', '755', 'Hab. 93', '4430-180', 'Vila Nova de Gaia', '+1 332 555 0123', '+351 917 973 784', 'dany.s.rodrigues@gmail.com', '1994-05-08', '2000-02-06', '2008-11-16', 'Solteiro', NULL, 'Barbeiro', 'Curso Profissional', NULL, NULL),
(15, 'Eng.', 'João Fernando Fontes Oliveira', 0, 1, '1963-01-01', NULL, 'Avenida da República', '488', 'Hab. 32', '4430-910', 'Vila Nova de Gaia', '+351 912 764 765', '22 286 6808', 'joao.ff.oliveira@hotmail.com', '1964-02-23', '1971-12-05', '1978-08-27', 'Casado', 16, 'Engenheiro Eletrotécnico', 'Licenciatura', NULL, NULL),
(16, 'Enfª.', 'Carolina Almeida Oliveira', 1, 1, '1964-11-08', NULL, 'Avenida da República', '488', 'Hab. 32', '4430-910', 'Vila Nova de Gaia', '967 345 567', '22 286 6808', 'carol.alm.oliveira@gmail.com', '1965-04-04', '1973-01-07', NULL, 'Casado', 15, 'Enfermeira', 'Licenciatura', NULL, NULL),
(17, NULL, 'Emília Almeida Santos', 1, 3, '1982-07-04', NULL, 'R. de Santa Catarina', '158', '9º Dt.', '4000-442', 'Porto', '223 568 274', NULL, NULL, NULL, NULL, NULL, 'Solteiro', NULL, 'Funcionária Pública', '12º ano', NULL, NULL),
(18, NULL, 'Jorge Almeida Fontes Oliveira', 0, 1, '2004-08-14', NULL, 'Avenida da República', '488', 'Hab. 32', '4430-910', 'Vila Nova de Gaia', NULL, NULL, NULL, '2005-02-27', '2014-06-22', NULL, 'Solteiro', NULL, 'Estudante', '9º ano', 15, 16),
(19, NULL, 'Maria Ana Almeida Fontes Oliveira', 1, 1, '2014-02-07', NULL, 'Avenida da República', '488', 'Hab. 32', '4430-910', 'Vila Nova de Gaia', NULL, NULL, NULL, '2014-06-22', NULL, NULL, NULL, NULL, NULL, NULL, 15, 17),
(20, NULL, 'Pedro João dos Santos', 0, 7, '1980-08-05', NULL, 'Rua das Flores', '382', '1º Esq.', '1500-450', 'Lisboa', '918 638 264', NULL, 'pjoao.santos@gmail.com', NULL, NULL, NULL, 'Solteiro', NULL, 'Cirurgião', 'Doutoramento', NULL, NULL);

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
(1, 18, '300.00', '2019-03-12', 'Doação para o projeto Pés no Risco', ''),
(2, 15, '17.50', '2019-05-31', 'Compra de pão e vinho para a comunhão', 'Compras feitas no pingo doce pela Drª. Joana Pina Cabral'),
(3, 1, '30.52', '2019-06-01', 'Pagamento da água do mês de maio', ''),
(4, 1, '26.00', '2018-12-01', 'Pagamento do gás do mês de novembro', ''),
(5, 30, '120.00', '2019-06-30', 'Dia do Pastor', ''),
(6, 31, '120.00', '2019-06-30', 'Dia do Pastor', ''),
(7, 19, '10.00', '2019-06-11', 'Pipocas', 'Festa do final do ano letivo'),
(8, 19, '90.00', '2019-06-11', 'Cinema', 'Festa de final do ano letivo'),
(9, 33, '300.00', '2018-12-03', 'Compra de alimentos para os cabazes de Natal', 'Compras feitas no continente pela Drª. Helena Pina Cabral'),
(10, 12, '50.00', '2019-04-07', 'Ofertório', ''),
(11, 12, '60.00', '2019-05-12', 'Ofertório', ''),
(12, 12, '90.00', '2018-04-01', 'Ofertório do domingo de Páscoa', ''),
(13, 12, '57.80', '2019-06-02', 'Ofertório', ''),
(14, 12, '45.67', '2019-06-09', 'Ofertório', ''),
(15, 12, '67.45', '2019-06-16', 'Ofertório', ''),
(16, 12, '68.90', '2019-06-23', 'Ofertório', ''),
(17, 12, '64.05', '2019-04-28', 'Ofertório', ''),
(18, 12, '54.30', '2019-05-19', 'Ofertório', ''),
(19, 12, '48.50', '2019-04-21', 'Ofertório', ''),
(20, 12, '52.20', '2019-05-26', 'Ofertório', ''),
(21, 12, '59.00', '2019-04-14', 'Ofertório', ''),
(22, 29, '65.00', '2019-04-11', 'Lâmpadas', ''),
(23, 37, '16.00', '2019-03-28', 'Vendas de \"O Novo Despertar\"', '4 exemplares comprados pelo Bispo D. José Jorge de Pina Cabral'),
(24, 37, '15.00', '2018-07-11', 'Venda do Jornal \"O Gaiense\"', ''),
(25, 37, '12.50', '2019-02-12', 'Venda de Bíblia', ''),
(26, 28, '11.40', '2019-05-03', 'Produtos de Limpeza', ''),
(27, 20, '8.45', '2019-06-23', 'Ofertório', ''),
(28, 20, '9.80', '2019-06-16', 'Ofertório', ''),
(29, 20, '24.10', '2019-05-12', 'Ofertório da festa do Dia das Mães', 'Hoje estavam bastantes crianças na escola dominical e, por isso, as receitas foram mais elevadas do que o habitual'),
(30, 25, '5.10', '2018-12-28', 'Fotocópias - Plano Pastoral', 'Plano pastoral do trimestre de janeiro/fevereiro/março'),
(31, 3, '190.00', '2016-07-07', 'Cadeira de Rodas', ''),
(32, 8, '348.00', '2018-12-01', 'Jantares', '');

-- --------------------------------------------------------

--
-- Table structure for table `movement_categories`
--

CREATE TABLE `movement_categories` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `type` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `movement_categories`
--

INSERT INTO `movement_categories` (`id`, `name`, `type`) VALUES
(1, 'Água / Luz / Gás / Saneamento', 1),
(2, 'Apoios Sociais', 1),
(3, 'Aquisição de Equipamento', 1),
(4, 'Aquisição de Publicações', 1),
(5, 'Arciprestado', 1),
(6, 'Atividades Paroquiais', 1),
(7, 'Bazar de Natal - Despesas', 1),
(8, 'Bazar de Natal - Receitas', 0),
(9, 'Bolsa Diogo Cassels - Despesas', 1),
(10, 'Bolsa Diogo Cassels - Receitas', 0),
(11, 'Campos de Férias', 1),
(12, 'Coletas Dominicais', 0),
(13, 'Contribuições dos Membros', 0),
(14, 'Coro do Arciprestado', 1),
(15, 'Despesas com o Culto', 1),
(16, 'Despesas Diversas', 1),
(17, 'Despesas Pastorais', 1),
(18, 'Doações Anónimas', 0),
(19, 'Escola Dominical - Despesas', 1),
(20, 'Escola Dominical - Receitas', 0),
(21, 'Espaço Café - Despesas', 1),
(22, 'Espaço Café - Receitas', 0),
(23, 'Expediente', 1),
(24, 'Grupo de Jovens', 1),
(25, 'Impressos / Papelaria / Fotocópias', 1),
(26, 'Jardim', 1),
(27, 'Juros', 0),
(28, 'Limpezas e Higiene', 1),
(29, 'Manutenções', 1),
(30, 'Ofertas Especiais', 0),
(31, 'Ofertas Especiais - Devolução', 1),
(32, 'Peregrino', 1),
(33, 'Projeto Esperança', 1),
(34, 'Receitas Diversas', 0),
(35, 'Seguros', 1),
(36, 'Tesouraria Diocesana', 1),
(37, 'Venda de Publicações', 0);

-- --------------------------------------------------------

--
-- Table structure for table `nationalities`
--

CREATE TABLE `nationalities` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nationalities`
--

INSERT INTO `nationalities` (`id`, `name`) VALUES
(1, 'Portuguesa'),
(2, 'Brasileira'),
(3, 'Americana'),
(4, 'Espanhola'),
(5, 'Inglesa'),
(6, 'Francesa'),
(7, 'Alemã'),
(8, 'Japonesa'),
(9, 'Chinesa'),
(10, 'Angolana');

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
-- Indexes for table `nationalities`
--
ALTER TABLE `nationalities`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `movements`
--
ALTER TABLE `movements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `movement_categories`
--
ALTER TABLE `movement_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `nationalities`
--
ALTER TABLE `nationalities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `notification_groups`
--
ALTER TABLE `notification_groups`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
