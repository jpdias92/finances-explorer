create database finances_explorer;

USE finances_explorer;

-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 02-Jun-2019 às 15:26
-- Versão do servidor: 5.7.26
-- versão do PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finance`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `movements`
--

DROP TABLE IF EXISTS `movements`;
CREATE TABLE IF NOT EXISTS `movements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `movement_category_id` int(11) NOT NULL,
  `amount` decimal(10,2) NOT NULL,
  `movement_date` date NOT NULL,
  `description` text NOT NULL,
  `comment` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `movements`
--

INSERT INTO `movements` (`id`, `movement_category_id`, `amount`, `movement_date`, `description`, `comment`) VALUES
(1, 1, '21.00', '2019-05-05', 'Doação', ''),
(2, 2, '10.50', '2019-06-01', 'Gasto', 'Compras'),
(3, 1, '300.52', '2019-06-02', 'Doação', 'Oferta'),
(4, 2, '10000.00', '2018-12-12', 'Vitrais', '');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;