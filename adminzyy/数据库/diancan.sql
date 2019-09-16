-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-06-20 16:03:59
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `diancan`
--

-- --------------------------------------------------------

--
-- 表的结构 `admin`
--

CREATE TABLE `admin` (
  `id` int(100) NOT NULL,
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `admin`
--

INSERT INTO `admin` (`id`, `username`, `password`) VALUES
(1, 'bbvhc', '25+'),
(2, 'root', '111');

-- --------------------------------------------------------

--
-- 表的结构 `desk`
--

CREATE TABLE `desk` (
  `id` int(100) NOT NULL,
  `desk_name` varchar(100) NOT NULL,
  `desk_type` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `desk`
--

INSERT INTO `desk` (`id`, `desk_name`, `desk_type`) VALUES
(1, 'A1', '大桌'),
(2, 'A2', '大桌'),
(3, 'A3', '大桌'),
(4, 'A4', '大桌'),
(5, 'A5', '大桌'),
(6, 'B1', '小桌'),
(7, 'B2', '小桌'),
(8, 'B3', '小桌'),
(9, 'B4', '小桌'),
(10, 'B5', '小桌');

-- --------------------------------------------------------

--
-- 表的结构 `food`
--

CREATE TABLE `food` (
  `id` int(100) NOT NULL,
  `food_id` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `food_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `food_type` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `price` int(100) NOT NULL,
  `img` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `food`
--

INSERT INTO `food` (`id`, `food_id`, `food_name`, `food_type`, `price`, `img`) VALUES
(1, 'A01', '剁椒鱼头', '热菜', 68, 'http://localhost/diancan/djyt.jpg'),
(2, 'A02', '北京烤鸭', '热菜', 168, 'http://localhost/diancan/bjky.jpg'),
(3, 'A03', '大盘鸡', '热菜', 128, 'http://localhost/diancan/dpj.jpg'),
(4, 'B01', '风味口水鸡', '冷食', 88, 'http://localhost/diancan/fwksj.jpeg'),
(5, 'B02', '烧椒拌牛肉', '冷食', 98, 'http://localhost/diancan/sjbnr.jpeg'),
(6, 'B03', '虾仁', '冷食', 58, 'http://localhost/diancan/xr.jpg'),
(7, 'C01', '佛跳墙', '汤品', 168, 'http://localhost/diancan/ftq.jpg'),
(8, 'C02', '排骨汤', '汤品', 98, 'http://localhost/diancan/pgt.jpg'),
(9, 'C03', '红枣鲫鱼汤', '汤品', 118, 'http://localhost/diancan/hcjy.jpg'),
(10, 'D01', '橙汁', '饮品', 8, 'http://localhost/diancan/cz.jpg'),
(11, 'D02', '柠檬水', '饮品', 8, 'http://localhost/diancan/nms.jpg'),
(12, 'D03', '西瓜汁', '饮品', 8, 'http://localhost/diancan/xgz.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `foodtype`
--

CREATE TABLE `foodtype` (
  `id` int(100) NOT NULL,
  `typename` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `foodtype`
--

INSERT INTO `foodtype` (`id`, `typename`) VALUES
(1, '热菜'),
(2, '冷食'),
(3, '汤品'),
(4, '饮品');

-- --------------------------------------------------------

--
-- 表的结构 `orderdetail`
--

CREATE TABLE `orderdetail` (
  `id` int(100) NOT NULL,
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `order_date` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `desk_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `foods_name` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `food_count` int(100) DEFAULT NULL,
  `total_price` int(11) NOT NULL,
  `foods_num` varchar(20) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `orderdetail`
--

INSERT INTO `orderdetail` (`id`, `username`, `order_date`, `desk_name`, `foods_name`, `food_count`, `total_price`, `foods_num`) VALUES
(1, 'zyl', '下午9:01:03', '1', '剁椒鱼头', NULL, 68, '1'),
(2, 'zyl', '下午9:03:32', '6', '剁椒鱼头', NULL, 68, '1'),
(3, 'zyl', '下午9:04:10', '7', '剁椒鱼头', NULL, 136, '2'),
(4, 'zyl', '下午9:15:32', '6', '剁椒鱼头,北京烤鸭,剁椒鱼头,北京烤鸭,剁椒鱼头,北京烤鸭', NULL, 236, '1,1,1,1,1,1'),
(5, 'zyl', '下午9:16:05', '8', '风味口水鸡,西瓜汁', NULL, 96, '1,1'),
(6, 'zyl', '下午9:20:17', '7', '剁椒鱼头,烧椒拌牛肉', NULL, 166, '1,1'),
(7, 'zyl', '下午9:22:26', '6', '剁椒鱼头,北京烤鸭,大盘鸡', NULL, 364, '1,1,1'),
(8, 'zyl', '下午9:23:00', '6', '剁椒鱼头', NULL, 68, '1'),
(14, '', '下午11:52:59', '0', '', NULL, 0, '');

-- --------------------------------------------------------

--
-- 表的结构 `orders`
--

CREATE TABLE `orders` (
  `id` int(100) NOT NULL,
  `order_id` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `order_date` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `totalprice` int(100) NOT NULL,
  `order_state` int(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(100) NOT NULL,
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_czech_ci NOT NULL,
  `telephone` int(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `telephone`) VALUES
(1, '1654', '124', 0),
(2, '17802931663', 'zyy', 0),
(3, '15529677129', 'gxw', 0),
(4, '13891877523', 'zzl', 0),
(5, '13266666', '665', 0),
(6, 'root', '111', 0),
(7, 'zyl', '555', 0),
(10, 'gongxingwu', 'guoxingwu555', NULL);

-- --------------------------------------------------------

--
-- 表的结构 `xse`
--

CREATE TABLE `xse` (
  `id` int(100) NOT NULL,
  `data` varchar(100) NOT NULL,
  `amount` varchar(100) NOT NULL,
  `sales` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `desk`
--
ALTER TABLE `desk`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `food`
--
ALTER TABLE `food`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `foodtype`
--
ALTER TABLE `foodtype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orderdetail`
--
ALTER TABLE `orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `xse`
--
ALTER TABLE `xse`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `desk`
--
ALTER TABLE `desk`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `food`
--
ALTER TABLE `food`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- 使用表AUTO_INCREMENT `foodtype`
--
ALTER TABLE `foodtype`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- 使用表AUTO_INCREMENT `orderdetail`
--
ALTER TABLE `orderdetail`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
--
-- 使用表AUTO_INCREMENT `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- 使用表AUTO_INCREMENT `xse`
--
ALTER TABLE `xse`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
