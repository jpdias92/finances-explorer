create database finances_explorer;

USE finances_explorer;

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `finances_explorer`
--

-- --------------------------------------------------------

--
-- Table structure for table `donors`
--

CREATE TABLE `donors` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `birth` date NOT NULL,
  `adress` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `donors`
--

INSERT INTO `donors` (`id`, `name`, `birth`, `adress`, `phone`) VALUES
(1, 'Mariana', '2002-01-07', 'Avenida da República', '916666843'),
(2, 'João', '1992-09-14', 'Copenhaga', '+351 915 601 001'),
(3, 'Jaime', '1963-01-01', 'Rua 123', '915 601 983'),
(4, 'Clarisse', '1964-11-08', 'Praça das Flores', '96267');

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
(4, 2, '10000.00', '2018-12-12', 'Vitrais', '');

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

--
-- Indexes for dumped tables
--

--
-- Indexes for table `donors`
--
ALTER TABLE `donors`
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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `donors`
--
ALTER TABLE `donors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `movements`
--
ALTER TABLE `movements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `movement_categories`
--
ALTER TABLE `movement_categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
