-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 11 Okt 2020 pada 15.27
-- Versi server: 10.4.13-MariaDB
-- Versi PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nongky`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `activity`
--

CREATE TABLE `activity` (
  `activity_id` int(15) NOT NULL,
  `user_id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `login` datetime NOT NULL,
  `logout` datetime NOT NULL,
  `token` time NOT NULL,
  `sisa_token` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `activity`
--

INSERT INTO `activity` (`activity_id`, `user_id`, `name`, `email`, `phone`, `login`, `logout`, `token`, `sisa_token`) VALUES
(85, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-23 00:09:28', '2020-09-23 00:22:16', '00:00:00', '00:00:00'),
(86, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-23 00:32:05', '2020-09-23 00:33:15', '00:00:00', '00:00:00'),
(87, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-23 00:54:36', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(88, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-23 01:04:49', '2020-09-23 01:05:09', '00:00:00', '00:00:00'),
(89, 12, 'Rizkia', 'rizkia@gmail.com', '2147483647', '2020-09-23 01:39:27', '2020-09-23 01:40:05', '00:00:00', '00:00:00'),
(90, 11, 'Tobichan', 'tobiropo@gmail.com', '0', '2020-09-23 02:13:16', '2020-09-23 02:13:20', '00:00:00', '00:00:00'),
(91, 9, 'mbahkunci', 'Shadow@gmail.com', '0', '2020-09-23 02:19:39', '2020-09-23 02:19:41', '00:00:00', '00:00:00'),
(92, 9, 'mbahkunci', 'Shadow@gmail.com', '0', '2020-09-23 02:20:55', '2020-09-23 02:20:57', '00:00:00', '00:00:00'),
(93, 13, 'Konta', 'konta@gmail.com', '2147483647', '2020-09-23 11:41:52', '2020-09-24 02:00:31', '00:00:00', '00:00:00'),
(94, 12, 'Rizkia', 'rizkia@gmail.com', '2147483647', '2020-09-24 10:30:41', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(95, 12, 'Rizkia', 'rizkia@gmail.com', '2147483647', '2020-09-24 11:08:52', '2020-09-24 11:10:02', '00:00:00', '00:00:00'),
(96, 22, 'Mira', 'mira321@gmail.com', '2147483647', '2020-09-24 11:11:22', '2020-09-24 12:47:59', '00:00:00', '00:00:00'),
(97, 22, 'Mira', 'mira321@gmail.com', '08977286414', '2020-09-24 13:09:20', '2020-09-24 13:28:58', '00:00:00', '00:00:00'),
(98, 22, 'Mira', 'mira321@gmail.com', '08977286414', '2020-09-24 13:29:12', '2020-09-24 16:46:01', '00:00:00', '00:00:00'),
(99, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-24 16:46:38', '2020-09-24 17:49:59', '00:00:00', '00:00:00'),
(100, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-24 17:50:31', '2020-09-24 18:53:29', '00:00:00', '00:00:00'),
(101, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-24 18:53:35', '2020-09-24 20:07:12', '00:00:00', '00:00:00'),
(102, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-24 19:39:37', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(103, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-24 20:07:22', '2020-09-24 21:08:41', '00:00:00', '00:00:00'),
(104, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-24 20:48:06', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(105, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-24 21:13:47', '2020-09-24 21:48:39', '00:00:00', '00:00:00'),
(106, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-24 21:49:13', '2020-09-25 00:58:31', '00:00:00', '00:00:00'),
(107, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-24 22:27:02', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(108, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-24 23:37:14', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(109, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-25 00:37:24', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(110, 12, 'Rizkia', 'rizkia@gmail.com', '2147483647', '2020-09-25 01:02:16', '2020-09-25 02:09:13', '00:00:00', '00:00:00'),
(111, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-25 01:47:32', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(112, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-25 02:09:54', '2020-09-25 03:10:19', '00:00:00', '00:00:00'),
(113, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-25 02:50:02', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(114, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-25 03:10:28', '2020-09-25 04:09:41', '00:00:00', '00:00:00'),
(115, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-25 03:58:25', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(116, 1, 'arif', 'arif12345@gmail.com', '0', '2020-09-25 04:10:42', '2020-09-25 09:25:29', '00:00:00', '00:00:00'),
(118, 12, 'Rizkia', 'rizkia@gmail.com', '2147483647', '2020-09-25 09:48:40', '2020-09-25 11:44:52', '00:00:00', '00:00:00'),
(119, 12, 'Rizkia', 'rizkia@gmail.com', '2147483647', '2020-09-25 09:56:03', '2020-09-25 09:56:31', '00:00:00', '00:00:00'),
(120, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-25 09:56:50', '2020-09-25 10:02:56', '00:00:00', '00:00:00'),
(121, 22, 'Mira', 'mira321@gmail.com', '08977286414', '2020-09-25 10:04:08', '2020-09-25 10:22:35', '00:00:00', '00:00:00'),
(122, 12, 'Rizkia', 'rizkia@gmail.com', '2147483647', '2020-09-25 13:00:25', '2020-09-25 14:11:57', '00:00:00', '00:00:00'),
(124, 5, 'saprolio', 'saprolio1234@gmail.com', '0', '2020-09-25 17:25:07', '2020-09-25 17:26:44', '00:00:00', '00:00:00'),
(125, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-25 17:26:59', '2020-09-25 17:58:48', '00:00:00', '00:00:00'),
(126, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-25 18:01:42', '2020-09-25 18:05:11', '00:00:00', '00:00:00'),
(127, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-25 18:05:23', '2020-09-25 19:07:41', '00:00:00', '00:00:00'),
(128, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-25 19:07:54', '2020-09-25 20:08:28', '00:00:00', '00:00:00'),
(129, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-25 20:31:11', '2020-09-25 21:35:47', '00:00:00', '00:00:00'),
(130, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-25 21:35:58', '2020-09-25 22:38:51', '00:00:00', '00:00:00'),
(131, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-25 22:45:22', '2020-09-25 23:54:57', '00:00:00', '00:00:00'),
(132, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-25 23:55:35', '2020-09-26 07:45:38', '00:00:00', '00:00:00'),
(133, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-26 07:46:12', '2020-09-26 10:33:37', '00:00:00', '00:00:00'),
(136, 11, 'Tobichan', 'tobiropo@gmail.com', '0', '2020-09-26 10:34:15', '2020-09-26 12:47:28', '00:00:00', '00:00:00'),
(138, 11, 'Tobichan', 'tobiropo@gmail.com', '0', '2020-09-26 12:47:51', '2020-09-26 13:54:30', '00:00:00', '00:00:00'),
(139, 11, 'Tobichan', 'tobiropo@gmail.com', '0', '2020-09-26 13:55:41', '2020-09-26 13:57:44', '00:00:00', '00:00:00'),
(140, 5, 'saprolio', 'saprolio1234@gmail.com', '0', '2020-09-26 13:58:15', '2020-09-26 13:59:42', '00:00:00', '00:00:00'),
(141, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-26 14:00:46', '2020-09-26 14:01:36', '00:00:00', '00:00:00'),
(142, 12, 'Rizkia', 'rizkia@gmail.com', '2147483647', '2020-09-26 14:01:43', '2020-09-26 14:02:14', '00:00:00', '00:00:00'),
(143, 11, 'Tobichan', 'tobiropo@gmail.com', '0', '2020-09-26 14:02:23', '2020-09-26 14:11:15', '00:00:00', '00:00:00'),
(144, 22, 'Mira', 'mira321@gmail.com', '08977286414', '2020-09-26 14:11:22', '2020-09-26 14:29:25', '00:00:00', '00:00:00'),
(148, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-26 17:30:13', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(149, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-26 17:42:09', '2020-09-26 17:44:46', '00:00:00', '00:00:00'),
(150, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-26 17:44:53', '2020-09-26 18:45:08', '00:00:00', '00:00:00'),
(151, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-26 18:46:06', '2020-09-26 19:00:29', '00:00:00', '00:00:00'),
(152, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-26 19:00:37', '2020-09-26 20:02:04', '00:00:00', '00:00:00'),
(153, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-26 19:54:15', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(154, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-26 20:02:11', '2020-09-26 21:02:15', '00:00:00', '00:00:00'),
(155, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-26 21:02:21', '2020-09-26 21:18:57', '00:00:00', '00:00:00'),
(156, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-26 21:19:10', '2020-09-26 21:19:26', '00:00:00', '00:00:00'),
(157, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-26 21:19:34', '2020-09-26 21:19:53', '00:00:00', '00:00:00'),
(158, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-26 21:20:01', '2020-09-26 21:35:53', '00:00:00', '00:00:00'),
(159, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-26 21:36:00', '2020-09-26 21:39:05', '00:00:00', '00:00:00'),
(160, 11, 'Tobichan', 'tobiropo@gmail.com', '0', '2020-09-26 21:39:15', '2020-09-26 21:56:21', '00:00:00', '00:00:00'),
(161, 11, 'Tobichan', 'tobiropo@gmail.com', '0', '2020-09-26 21:57:15', '2020-09-26 21:57:46', '00:00:00', '00:00:00'),
(162, 5, 'saprolio', 'saprolio1234@gmail.com', '0', '2020-09-26 21:58:22', '2020-09-26 22:26:14', '00:00:00', '00:00:00'),
(163, 9, 'mbahkunci', 'Shadow@gmail.com', '0', '2020-09-26 22:37:16', '2020-09-26 22:38:23', '00:00:00', '00:00:00'),
(164, 22, 'Mira', 'mira321@gmail.com', '08977286414', '2020-09-26 22:38:30', '2020-09-26 22:39:43', '00:00:00', '00:00:00'),
(165, 9, 'mbahkunci', 'Shadow@gmail.com', '0', '2020-09-26 22:39:50', '2020-09-26 23:41:48', '00:00:00', '00:00:00'),
(168, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-27 07:32:10', '2020-09-27 12:32:53', '00:00:00', '00:00:00'),
(169, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-27 07:32:48', '2020-09-27 12:33:03', '00:00:00', '00:00:00'),
(170, 12, 'Rizkia', 'rizkia@gmail.com', '2147483647', '2020-09-27 11:04:01', '2020-09-27 14:00:13', '00:00:00', '00:00:00'),
(171, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-27 12:33:12', '2020-09-27 13:54:41', '00:00:00', '00:00:00'),
(172, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-27 12:33:21', '2020-09-27 14:02:23', '00:00:00', '00:00:00'),
(173, 11, 'Tobichan', 'tobiropo@gmail.com', '0', '2020-09-27 13:55:01', '2020-09-27 14:00:01', '00:00:00', '00:00:00'),
(174, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-27 15:43:11', '2020-09-27 15:45:21', '00:00:00', '00:00:00'),
(175, 1, 'arif', 'arif12345@gmail.com', '0', '2020-09-27 19:44:41', '2020-09-27 20:19:46', '00:00:00', '00:00:00'),
(176, 5, 'saprolio', 'saprolio1234@gmail.com', '0', '2020-09-27 19:45:22', '2020-09-27 20:16:12', '00:00:00', '00:00:00'),
(177, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-27 19:55:57', '2020-09-27 20:14:37', '00:00:00', '00:00:00'),
(178, 9, 'mbahkunci', 'Shadow@gmail.com', '0', '2020-09-27 20:20:04', '2020-09-27 23:52:52', '00:00:00', '00:00:00'),
(179, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-28 00:12:23', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(180, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-28 08:52:50', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(181, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-28 09:02:52', '2020-09-28 10:39:31', '00:00:00', '00:00:00'),
(182, 13, 'Konta', 'konta@gmail.com', '08977286415', '2020-09-28 09:41:27', '2020-09-28 14:18:52', '00:00:00', '00:00:00'),
(183, 22, 'Mira', 'mira321@gmail.com', '08977286414', '2020-09-28 10:39:46', '2020-09-28 11:09:29', '00:00:00', '00:00:00'),
(184, 22, 'Mira', 'mira321@gmail.com', '08977286414', '2020-09-28 11:09:42', '2020-09-28 12:58:30', '00:00:00', '00:00:00'),
(185, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-28 12:50:59', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(186, 22, 'Mira', 'mira321@gmail.com', '0899977786', '2020-09-28 12:58:37', '2020-09-28 14:29:56', '00:00:00', '00:00:00'),
(187, 9, 'mbahkunci', 'Shadow@gmail.com', '0', '2020-09-28 13:05:03', '2020-09-28 14:19:07', '00:00:00', '00:00:00'),
(188, 11, 'Tobichan', 'tobiropo@gmail.com', '0', '2020-09-28 14:19:37', '2020-09-28 14:28:03', '00:00:00', '00:00:00'),
(189, 11, 'Tobichan', 'tobiropo@gmail.com', '0324455789', '2020-09-28 14:29:37', '2020-09-28 14:30:02', '00:00:00', '00:00:00'),
(190, 11, 'Tobichan', 'tobiropo@gmail.com', '0324455789', '2020-09-28 14:30:09', '2020-09-28 14:56:08', '00:00:00', '00:00:00'),
(191, 22, 'Mira', 'mira321@gmail.com', '0899977786', '2020-09-28 14:31:27', '2020-09-28 14:31:46', '00:00:00', '00:00:00'),
(192, 22, 'Mira', 'mira321@gmail.com', '0899977786', '2020-09-28 14:55:06', '2020-09-28 14:59:32', '00:00:00', '00:00:00'),
(193, 11, 'Tobichan', 'tobiropo@gmail.com', '0324455789', '2020-09-28 14:56:16', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(194, 22, 'Mira', 'mira321@gmail.com', '0899977786', '2020-09-28 19:30:43', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(195, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-28 19:35:23', '0000-00-00 00:00:00', '00:00:00', '00:00:00'),
(196, 11, 'Tobichan', 'tobiropo@gmail.com', '0324455789', '2020-09-28 19:50:34', '2020-09-28 23:57:49', '00:00:00', '00:00:00'),
(197, 22, 'Mira', 'mira321@gmail.com', '0899977786', '2020-09-28 19:50:44', '2020-09-28 19:52:38', '00:00:00', '00:00:00'),
(198, 6, 'rey', 'rey1234@gmail.com', '0', '2020-09-28 23:08:12', '2020-09-28 23:57:43', '00:00:00', '00:00:00'),
(199, 12, 'Rizkia', 'rizkia@gmail.com', '2147483647', '2020-09-29 09:27:58', '2020-09-29 10:28:21', '00:00:00', '00:00:00'),
(200, 1, 'arif', 'arif12345@gmail.com', '0', '2020-09-29 09:28:26', '2020-09-29 09:39:19', '00:00:00', '00:00:00'),
(201, 13, 'Konta', 'konta@gmail.com', '0877788899', '2020-09-29 09:29:35', '2020-09-29 10:21:48', '00:00:00', '00:00:00'),
(202, 23, 'dimas', 'dimas@gmail.com', '0998989789', '2020-09-29 10:05:53', '2020-09-29 10:06:16', '00:00:00', '00:00:00'),
(203, 23, 'dimas', 'dimas@gmail.com', '0998989789', '2020-09-29 10:07:15', '2020-09-29 10:28:03', '00:00:00', '00:00:00'),
(204, 11, 'Tobichan', 'tobiropo@gmail.com', '0324455789', '2020-10-02 11:44:49', '2020-10-02 11:49:58', '00:00:00', '00:00:00');

-- --------------------------------------------------------

--
-- Struktur dari tabel `chat`
--

CREATE TABLE `chat` (
  `table_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `receiver_id` int(11) NOT NULL,
  `message` varchar(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp(),
  `chat_status` int(1) NOT NULL COMMENT '0 = unread, 1 = read'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `chat`
--

INSERT INTO `chat` (`table_id`, `room_id`, `sender_id`, `receiver_id`, `message`, `created`, `chat_status`) VALUES
(61, 6441, 5, 1, 'rif', '2020-09-26 17:00:00', 0),
(62, 6441, 1, 5, 'ya?', '2020-09-26 17:00:00', 0),
(63, 6441, 5, 1, 'mau tanya bole?', '2020-09-26 17:00:00', 0),
(64, 6441, 1, 5, 'silahkan', '2020-09-26 17:00:00', 0),
(65, 4803, 1, 13, 'kon', '2020-09-26 17:00:00', 0),
(66, 4803, 1, 13, 'lg dimans?', '2020-09-26 17:00:00', 0),
(67, 6441, 5, 1, 'oke', '2020-09-26 17:00:00', 0),
(68, 6441, 5, 1, 'kok', '2020-09-26 17:00:00', 0),
(69, 7113, 5, 6, 'rey', '2020-09-26 17:00:00', 0),
(70, 4803, 1, 13, 'a', '2020-09-26 17:00:00', 0),
(71, 7113, 5, 6, 'oi', '2020-09-26 17:00:00', 0),
(72, 6441, 1, 5, 'io', '2020-09-26 17:00:00', 0),
(73, 6441, 5, 1, 'gajadi', '2020-09-26 17:00:00', 0),
(74, 7113, 6, 5, 'ya', '2020-09-26 17:00:00', 0),
(75, 6441, 5, 1, 'koko', '2020-09-26 17:00:00', 0),
(76, 4803, 1, 13, 'bagaimana?', '2020-09-26 17:00:00', 0),
(77, 7113, 6, 5, 'knp?', '2020-09-26 17:00:00', 0),
(78, 6441, 5, 1, 'aa', '2020-09-26 17:00:00', 0),
(79, 6441, 1, 5, 'apa?', '2020-09-26 17:00:00', 0),
(80, 6441, 5, 1, 'oioi', '2020-09-26 17:00:00', 0),
(81, 6441, 1, 5, 'ads', '2020-09-26 17:00:00', 0),
(82, 6441, 5, 1, 'a', '2020-09-26 17:00:00', 0),
(83, 6441, 1, 5, 'abcd', '2020-09-26 17:00:00', 0),
(84, 6441, 5, 1, 'efgh', '2020-09-26 17:00:00', 0),
(85, 7113, 5, 6, 'pqlm', '2020-09-26 17:00:00', 0),
(86, 6441, 1, 5, 'opqr', '2020-09-26 17:00:00', 0),
(87, 7113, 5, 6, 'stuv', '2020-09-26 17:00:00', 0),
(88, 6441, 5, 1, 'wxy', '2020-09-26 17:00:00', 0),
(89, 7113, 5, 6, 'ooop', '2020-09-26 17:00:00', 0),
(90, 4803, 1, 13, 'oi', '2020-09-26 17:00:00', 0),
(91, 7113, 5, 6, 'opp', '2020-09-26 17:00:00', 0),
(92, 7113, 5, 6, 'po', '2020-09-26 17:00:00', 0),
(93, 4803, 1, 13, 'oi', '2020-09-26 17:00:00', 0),
(94, 7113, 5, 6, 'oi', '2020-09-26 17:00:00', 0),
(95, 6441, 5, 1, 'oi', '2020-09-26 17:00:00', 0),
(96, 4651, 9, 22, 'Yo mira', '2020-09-26 17:00:00', 0),
(97, 8075, 13, 12, 'kiaaaa', '2020-09-27 17:00:00', 0),
(98, 9261, 13, 6, 'samikum', '2020-09-27 17:00:00', 0),
(99, 4651, 22, 9, 'yo', '2020-09-27 17:00:00', 0),
(100, 2031, 22, 11, 'gg', '2020-09-27 17:00:00', 0),
(101, 4651, 9, 22, 'a', '2020-09-27 17:00:00', 0),
(102, 4651, 9, 22, 'a', '2020-09-27 17:00:00', 0),
(103, 4651, 9, 22, 'a', '2020-09-27 17:00:00', 0),
(104, 4651, 9, 22, 'a', '2020-09-27 17:00:00', 0),
(105, 4651, 9, 22, 'aku', '2020-09-27 17:00:00', 0),
(106, 4651, 9, 22, 'tasaaa', '2020-09-27 17:00:00', 0),
(107, 4651, 9, 22, 'sabi', '2020-09-27 17:00:00', 0),
(108, 2031, 11, 22, 'yoppi', '2020-09-27 17:00:00', 0),
(109, 2031, 11, 22, 'ppaaaa', '2020-09-27 17:00:00', 0),
(110, 2031, 11, 22, 'Yoo\'', '2020-09-27 17:00:00', 0),
(111, 2031, 11, 22, 'lalala', '2020-09-27 17:00:00', 0),
(112, 2031, 11, 22, 'papa', '2020-09-27 17:00:00', 0),
(113, 2031, 11, 22, 'holo', '2020-09-27 17:00:00', 0),
(114, 2031, 22, 11, 'hry hry', '2020-09-27 17:00:00', 0),
(115, 2031, 11, 22, 'naon?', '2020-09-27 17:00:00', 0),
(116, 2031, 11, 22, 'hiahia', '2020-09-27 17:00:00', 0),
(117, 2031, 22, 11, 'tes', '2020-09-27 17:00:00', 0),
(118, 2031, 11, 22, 'tes', '2020-09-27 17:00:00', 0),
(119, 2031, 11, 22, 'cek', '2020-09-27 17:00:00', 0),
(120, 2031, 11, 22, 'cek123', '2020-09-27 17:00:00', 0),
(121, 243, 11, 6, 'rey', '2020-09-27 17:00:00', 0),
(122, 2031, 11, 22, 'tes12345', '2020-09-27 17:00:00', 0),
(123, 2031, 22, 11, '123141', '2020-09-27 17:00:00', 0),
(124, 2031, 11, 22, 'olololo', '2020-09-27 17:00:00', 0),
(125, 243, 6, 11, 'aaaa', '2020-09-27 17:00:00', 0),
(126, 7113, 6, 5, 'as', '2020-09-27 17:00:00', 0),
(127, 7113, 6, 5, 'aaa', '2020-09-27 17:00:00', 0),
(128, 243, 6, 11, 'malam', '2020-09-27 17:00:00', 0),
(129, 243, 11, 6, 'malam', '2020-09-27 17:00:00', 0),
(130, 243, 6, 11, 'aku', '2020-09-27 17:00:00', 0),
(131, 243, 11, 6, 'sendiri', '2020-09-27 17:00:00', 0),
(132, 243, 11, 6, 'tanpa', '2020-09-27 17:00:00', 0),
(133, 243, 6, 11, 'cintamu', '2020-09-27 17:00:00', 0),
(134, 243, 11, 6, 'lagi', '2020-09-27 17:00:00', 0),
(135, 243, 6, 11, 'oooo', '2020-09-27 17:00:00', 0),
(136, 243, 11, 6, 'telah', '2020-09-27 17:00:00', 0),
(137, 243, 6, 11, 'habis', '2020-09-27 17:00:00', 0),
(138, 243, 11, 6, 'keyakinanku', '2020-09-27 17:00:00', 0),
(139, 243, 6, 11, 'bintang', '2020-09-27 17:00:00', 0),
(140, 2031, 11, 22, 'kan', '2020-09-27 17:00:00', 0),
(141, 243, 6, 11, 'bersinar', '2020-09-27 17:00:00', 0),
(142, 2031, 11, 22, 'menerpa', '2020-09-27 17:00:00', 0),
(143, 243, 11, 6, 'hidupku', '2020-09-27 17:00:00', 0),
(144, 243, 6, 11, 'cahaya kan', '2020-09-27 17:00:00', 0),
(145, 243, 11, 6, 'datang', '2020-09-27 17:00:00', 0),
(146, 243, 6, 11, 'oooo', '2020-09-27 17:00:00', 0),
(147, 243, 6, 11, 'oo', '2020-09-27 17:00:00', 0),
(148, 243, 11, 6, 'taman bunga', '2020-09-27 17:00:00', 0),
(149, 243, 6, 11, 'mekar sari', '2020-09-27 17:00:00', 0),
(150, 243, 11, 6, 'hadeuh', '2020-09-27 17:00:00', 0),
(151, 243, 6, 11, 'lelah', '2020-09-27 17:00:00', 0),
(152, 4803, 13, 1, 'oit', '2020-09-28 17:00:00', 0),
(153, 4803, 13, 1, 'ape?', '2020-09-28 17:00:00', 0),
(154, 8075, 12, 13, 'ia?', '2020-09-28 17:00:00', 0),
(155, 8075, 13, 12, 'apa kabar?', '2020-09-28 17:00:00', 0),
(156, 4803, 13, 1, 'yeee', '2020-09-28 17:00:00', 0),
(157, 1306, 23, 13, 'hallo', '2020-09-28 17:00:00', 0),
(158, 1306, 13, 23, 'hallo juga', '2020-09-28 17:00:00', 0),
(159, 1306, 13, 23, 'aaaa\'', '2020-09-28 17:00:00', 0),
(160, 1306, 23, 13, 'hahaha', '2020-09-28 17:00:00', 0);

-- --------------------------------------------------------

--
-- Struktur dari tabel `chat_list`
--

CREATE TABLE `chat_list` (
  `table_id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `friend_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `status` int(1) NOT NULL COMMENT '0 = unreply, 1 = reply'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `chat_list`
--

INSERT INTO `chat_list` (`table_id`, `sender_id`, `friend_id`, `room_id`, `status`) VALUES
(24, 5, 1, 6441, 2),
(25, 1, 13, 4803, 2),
(26, 5, 6, 7113, 2),
(27, 9, 22, 4651, 2),
(28, 13, 12, 8075, 2),
(29, 13, 6, 9261, 2),
(30, 22, 11, 2031, 2),
(31, 11, 6, 243, 2),
(32, 23, 13, 1306, 2);

-- --------------------------------------------------------

--
-- Struktur dari tabel `friend`
--

CREATE TABLE `friend` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL COMMENT 'user_id nyambung ke sender_id',
  `friend_id` int(11) NOT NULL COMMENT 'friend_id nyambung ke user_id',
  `response_status` int(1) NOT NULL COMMENT '0 = decline, 1 = accepted, 2 = pending',
  `friend_created` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `friend`
--

INSERT INTO `friend` (`id`, `user_id`, `friend_id`, `response_status`, `friend_created`) VALUES
(1, 6, 13, 1, '2020-09-25'),
(2, 13, 6, 1, '2020-09-25'),
(5, 12, 13, 1, '2020-09-25'),
(7, 13, 12, 1, '2020-09-25'),
(8, 13, 1, 1, '2020-09-25'),
(9, 1, 13, 1, '2020-09-25'),
(11, 22, 12, 1, '2020-09-25'),
(12, 12, 22, 1, '2020-09-25'),
(13, 5, 6, 1, '2020-09-25'),
(14, 6, 5, 1, '2020-09-25'),
(15, 11, 5, 1, '2020-09-26'),
(16, 11, 6, 1, '2020-09-26'),
(17, 11, 12, 1, '2020-09-26'),
(18, 5, 11, 1, '2020-09-26'),
(19, 6, 11, 1, '2020-09-26'),
(20, 12, 11, 1, '2020-09-26'),
(21, 11, 22, 1, '2020-09-26'),
(22, 22, 11, 1, '2020-09-26'),
(23, 22, 22, 0, '2020-09-26'),
(24, 22, 22, 0, '2020-09-26'),
(25, 9, 22, 1, '2020-09-26'),
(26, 22, 9, 1, '2020-09-26'),
(27, 1, 5, 1, '2020-09-27'),
(28, 5, 1, 1, '2020-09-27'),
(29, 23, 23, 0, '2020-09-29'),
(30, 23, 12, 2, '0000-00-00'),
(31, 23, 13, 1, '2020-09-29'),
(32, 13, 23, 1, '2020-09-29');

-- --------------------------------------------------------

--
-- Struktur dari tabel `invite`
--

CREATE TABLE `invite` (
  `invite_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `sender_id` int(11) NOT NULL,
  `created` date NOT NULL,
  `invite_status` int(1) NOT NULL COMMENT '0 = false(''belum di proses''), 1 = true (sudah di proses)',
  `response_status` int(1) NOT NULL COMMENT '0 = decline, 1 = accepted, 2 = pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `invite`
--

INSERT INTO `invite` (`invite_id`, `user_id`, `sender_id`, `created`, `invite_status`, `response_status`) VALUES
(1, 13, 6, '2020-09-25', 1, 1),
(2, 13, 12, '2020-09-25', 1, 1),
(4, 1, 13, '2020-09-25', 1, 1),
(6, 12, 22, '2020-09-25', 1, 1),
(7, 6, 5, '2020-09-25', 1, 1),
(8, 5, 11, '2020-09-26', 1, 1),
(9, 6, 11, '2020-09-26', 1, 1),
(10, 12, 11, '2020-09-26', 1, 1),
(11, 22, 11, '2020-09-26', 1, 1),
(12, 22, 22, '2020-09-26', 1, 0),
(13, 22, 22, '2020-09-26', 1, 0),
(14, 22, 9, '2020-09-26', 1, 1),
(15, 5, 1, '2020-09-27', 1, 1),
(16, 23, 23, '2020-09-29', 1, 0),
(17, 12, 23, '0000-00-00', 0, 2),
(18, 13, 23, '2020-09-29', 1, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_phone` varchar(12) NOT NULL,
  `user_image` varchar(255) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_lat` varchar(255) NOT NULL,
  `user_lng` varchar(255) NOT NULL,
  `user_bio` varchar(255) NOT NULL,
  `user_login_status` int(1) NOT NULL,
  `user_account_status` int(1) NOT NULL,
  `user_type` varchar(15) NOT NULL,
  `user_full_name` varchar(255) NOT NULL,
  `user_created` datetime NOT NULL,
  `user_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`user_id`, `user_email`, `user_password`, `user_name`, `user_phone`, `user_image`, `user_address`, `user_lat`, `user_lng`, `user_bio`, `user_login_status`, `user_account_status`, `user_type`, `user_full_name`, `user_created`, `user_updated`) VALUES
(1, 'arif12345@gmail.com', '$2b$10$caXHEYnDOI4FP.wCEzM0mO/lrSfQ6Cvn0rNiJM/3l1t9n4bXdL1ue', 'arif', '0', '2020-09-28T03-39-00.716Z-prabu-kresna.jpg', '', '', '', '', 0, 1, '', '', '2020-09-01 11:09:00', '2020-09-28 10:39:00'),
(5, 'saprolio1234@gmail.com', '$2b$10$AYk5ZZF5ghS5ODXDjgspTenklEthMg3an1u6xXz1I2zEFxQsVKFTe', 'saprolio', '0', '', '', '', '', '', 0, 1, '', '', '2020-09-02 18:16:32', '0000-00-00 00:00:00'),
(6, 'rey1234@gmail.com', '$2b$10$ikXf/Yu/x4jucMu6sNO7J.otOB7irn.DC3P5JJVOTuJ.cT9DCq.Ra', 'rey', '0', '2020-09-20T05-52-25.684Z-starky-sapling.png', '', '', '', '', 0, 1, '', '', '2020-09-02 18:17:06', '2020-09-05 14:01:12'),
(9, 'Shadow@gmail.com', '$2b$10$EsdIXp5Zy07BK1LWA3g9l.a9DtujFOg1fgg.I2tW1QoQPZacesXnu', 'mbahkunci', '0887146666', '2020-09-28T06-47-20.801Z-saitamahead.png', '', '', '', 'Saya adalah orang yang ingin menjadi pahlawan karena nganggur', 0, 1, '', 'Saitama', '2020-09-07 11:35:34', '2020-09-28 13:47:20'),
(11, 'tobiropo@gmail.com', '$2b$10$kt4p3OT.agHSRey8y1ZUpOyfiORyxmFZFHV2OqIyVXMemux1VYBQC', 'Tobichan', '0324455789', '2020-09-28T07-30-41.293Z-tobiroppo.jpg', '', '', '', 'Tobiropo never die', 0, 1, '', 'Tobi Roppo', '2020-09-11 15:02:41', '2020-09-28 14:30:41'),
(12, 'rizkia@gmail.com', '$2b$10$EHUHvWJQyAvyRI4ZMpOSWOyg/2rvDiInEO00w4U1QxhhuwTy9nkmq', 'Rizkia', '2147483647', '2020-09-20T15-12-19.128Z-hisoka.jpg', '', '', '', '', 0, 0, '', '', '2020-09-23 01:34:29', '0000-00-00 00:00:00'),
(13, 'konta@gmail.com', '$2b$10$cc0C25r0Wf3H7fcrFHYrVObhXgF7c3eJfeWMLNnghbe/C/g57JF6S', 'Konta', '0877788899', '2020-09-29T02-30-46.891Z-1540401.jpg', '', '', '', 'Tidak ada kegabuatan yang lebih hakiki', 0, 0, '', 'Konta Yana', '2020-09-23 11:40:10', '2020-09-29 09:30:46'),
(22, 'mira321@gmail.com', '$2b$10$D.VkweW1AGcT7mMus0tDg.BsjR9Y28d7se8pPyBMEIizpD9pJ/isq', 'Mira', '0899977786', '2020-09-28T05-38-20.473Z-92f8wv7xkj.jpg', '', '', '', 'Hallo semuanya, ', 0, 0, '', 'Yoo Mira', '2020-09-24 11:06:16', '2020-09-28 12:38:20'),
(23, 'dimas@gmail.com', '$2b$10$0uGzFPkFU7T6D84aCCYOd.rfg2eyh6Qz.kkwAXL.8LJMUZvEHcjUG', 'dimas', '07878775564', '2020-09-29T03-15-19.148Z-bumi.jpg', '', '', '', 'hallo guys', 0, 0, '', 'Dimas blablabl', '2020-09-29 10:05:24', '2020-09-29 10:16:21');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user2`
--

CREATE TABLE `user2` (
  `user_id` int(11) NOT NULL,
  `user_email` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_phone` varchar(12) NOT NULL,
  `user_image` varchar(255) NOT NULL,
  `user_address` varchar(255) NOT NULL,
  `user_lat` varchar(255) NOT NULL,
  `user_lng` varchar(255) NOT NULL,
  `user_bio` varchar(255) NOT NULL,
  `user_login_status` int(1) NOT NULL,
  `user_account_status` int(1) NOT NULL,
  `user_type` varchar(15) NOT NULL,
  `user_full_name` varchar(255) NOT NULL,
  `user_created` datetime NOT NULL,
  `user_updated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data untuk tabel `user2`
--

INSERT INTO `user2` (`user_id`, `user_email`, `user_password`, `user_name`, `user_phone`, `user_image`, `user_address`, `user_lat`, `user_lng`, `user_bio`, `user_login_status`, `user_account_status`, `user_type`, `user_full_name`, `user_created`, `user_updated`) VALUES
(1, 'arif12345@gmail.com', '$2b$10$caXHEYnDOI4FP.wCEzM0mO/lrSfQ6Cvn0rNiJM/3l1t9n4bXdL1ue', 'arif', '0', '2020-09-28T03-39-00.716Z-prabu-kresna.jpg', '', '', '', '', 0, 1, '', '', '2020-09-01 11:09:00', '2020-09-28 10:39:00'),
(5, 'saprolio1234@gmail.com', '$2b$10$AYk5ZZF5ghS5ODXDjgspTenklEthMg3an1u6xXz1I2zEFxQsVKFTe', 'saprolio', '0', '', '', '', '', '', 0, 1, '', '', '2020-09-02 18:16:32', '0000-00-00 00:00:00'),
(6, 'rey1234@gmail.com', '$2b$10$ikXf/Yu/x4jucMu6sNO7J.otOB7irn.DC3P5JJVOTuJ.cT9DCq.Ra', 'rey', '0', '2020-09-20T05-52-25.684Z-starky-sapling.png', '', '', '', '', 1, 1, '', '', '2020-09-02 18:17:06', '2020-09-05 14:01:12'),
(9, 'Shadow@gmail.com', '$2b$10$EsdIXp5Zy07BK1LWA3g9l.a9DtujFOg1fgg.I2tW1QoQPZacesXnu', 'mbahkunci', '0887146666', '2020-09-28T06-47-20.801Z-saitamahead.png', '', '', '', 'Saya adalah orang yang ingin menjadi pahlawan karena nganggur', 0, 1, '', 'Saitama', '2020-09-07 11:35:34', '2020-09-28 13:47:20'),
(11, 'tobiropo@gmail.com', '$2b$10$kt4p3OT.agHSRey8y1ZUpOyfiORyxmFZFHV2OqIyVXMemux1VYBQC', 'Tobichan', '0324455789', '2020-09-28T07-30-41.293Z-tobiroppo.jpg', '', '', '', 'Tobiropo never die', 0, 1, '', 'Tobi Roppo', '2020-09-11 15:02:41', '2020-09-28 14:27:49'),
(12, 'rizkia@gmail.com', '$2b$10$EHUHvWJQyAvyRI4ZMpOSWOyg/2rvDiInEO00w4U1QxhhuwTy9nkmq', 'Rizkia', '2147483647', '2020-09-20T15-12-19.128Z-hisoka.jpg', '', '', '', '', 0, 0, '', '', '2020-09-23 01:34:29', '0000-00-00 00:00:00'),
(13, 'konta@gmail.com', '$2b$10$cc0C25r0Wf3H7fcrFHYrVObhXgF7c3eJfeWMLNnghbe/C/g57JF6S', 'Konta', '0877788899', '2020-09-29T02-30-46.891Z-1540401.jpg', '', '', '', 'Tidak ada kegabuatan yang lebih hakiki', 0, 0, '', 'Konta Yana', '2020-09-23 11:40:10', '2020-09-29 09:30:46'),
(22, 'mira321@gmail.com', '$2b$10$D.VkweW1AGcT7mMus0tDg.BsjR9Y28d7se8pPyBMEIizpD9pJ/isq', 'Mira', '08977286414', '2020-09-28T04-55-28.281Z-92f8wv7xkj.jpg', '', '', '', '', 0, 0, '', '', '2020-09-24 11:06:16', '2020-09-28 11:55:28'),
(23, 'dimas@gmail.com', '$2b$10$unPovksjw9UpMGMec3JjDOhbIALchP1N3h1Z47ijD829Ebigk0u1.', 'dimas', '07878775564', '2020-09-29T03-15-19.148Z-bumi.jpg', '', '', '', 'hallo guys', 0, 0, '', 'Dimas blablabl', '2020-09-29 10:05:24', '2020-09-29 10:16:21');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`activity_id`);

--
-- Indeks untuk tabel `chat`
--
ALTER TABLE `chat`
  ADD PRIMARY KEY (`table_id`);

--
-- Indeks untuk tabel `chat_list`
--
ALTER TABLE `chat_list`
  ADD PRIMARY KEY (`table_id`);

--
-- Indeks untuk tabel `friend`
--
ALTER TABLE `friend`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `invite`
--
ALTER TABLE `invite`
  ADD PRIMARY KEY (`invite_id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indeks untuk tabel `user2`
--
ALTER TABLE `user2`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `activity`
--
ALTER TABLE `activity`
  MODIFY `activity_id` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=205;

--
-- AUTO_INCREMENT untuk tabel `chat`
--
ALTER TABLE `chat`
  MODIFY `table_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=161;

--
-- AUTO_INCREMENT untuk tabel `chat_list`
--
ALTER TABLE `chat_list`
  MODIFY `table_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT untuk tabel `friend`
--
ALTER TABLE `friend`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT untuk tabel `invite`
--
ALTER TABLE `invite`
  MODIFY `invite_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT untuk tabel `user2`
--
ALTER TABLE `user2`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
