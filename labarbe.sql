-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-04-2020 a las 14:06:00
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `labarbe`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `barber`
--

CREATE TABLE `barber` (
  `id` int(11) NOT NULL,
  `perfil` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `barber`
--

INSERT INTO `barber` (`id`, `perfil`, `nombre`, `descripcion`) VALUES
(19, 'da674df0-a109-40a8-b04d-4a098a166882.jpeg', 'Miguel', 'Barbero Peluquero, 5 años en el rubro. '),
(20, '29a7cd48-0311-430a-889a-77afa4e0097a.jpeg', 'Nazareno', 'Estilista, 4 años en el rubro. Maestro 2'),
(21, '45b50044-8d11-4b23-957c-d519d4e798b3.jpeg', 'Julian ', 'Experto en tinturas, Barbero, Estilista.'),
(22, '7d133f3c-dc8e-403b-9763-f7c55d9e6520.jpeg', 'Daniel', 'Barbero, 10 años de experiencia.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `barberos`
--

CREATE TABLE `barberos` (
  `id` int(11) NOT NULL,
  `id_barber` int(11) NOT NULL,
  `perfil` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `review` varchar(255) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `barberos`
--

INSERT INTO `barberos` (`id`, `id_barber`, `perfil`, `nombre`, `review`) VALUES
(41, 20, '29a7cd48-0311-430a-889a-77afa4e0097a.jpeg', 'Nazareno', 'Un genio'),
(42, 22, '7d133f3c-dc8e-403b-9763-f7c55d9e6520.jpeg', 'Daniel', 'Idolo Crack'),
(45, 19, 'da674df0-a109-40a8-b04d-4a098a166882.jpeg', 'Miguel', 'Un capo'),
(46, 22, '7d133f3c-dc8e-403b-9763-f7c55d9e6520.jpeg', 'Daniel', 'Un maestro, al toque perro'),
(47, 20, '29a7cd48-0311-430a-889a-77afa4e0097a.jpeg', 'Nazareno', 'Corta masomenos'),
(48, 19, 'da674df0-a109-40a8-b04d-4a098a166882.jpeg', 'Miguel', 'Un maestro, el mejor corte de la vida'),
(49, 19, 'da674df0-a109-40a8-b04d-4a098a166882.jpeg', 'Miguel', 'Todos unos capos voy siempre una vez por semana, sigan asi.'),
(50, 19, 'da674df0-a109-40a8-b04d-4a098a166882.jpeg', 'Miguel', 'Un crack siempre, genio de la vida. Ojala abran otra sucursal cerca de mi  barrio. Saludo grande'),
(54, 20, '29a7cd48-0311-430a-889a-77afa4e0097a.jpeg', 'Nazareno', 'Corta repiola');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id_usuario` int(11) NOT NULL,
  `email` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `pw` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8_spanish2_ci NOT NULL,
  `permisos` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_usuario`, `email`, `pw`, `nombre`, `permisos`) VALUES
(4, 'soyluis.es@hotmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'Luis', 1),
(5, 'capo@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'luis', 0),
(6, 'capo2@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', 'Luis', 0),
(7, 'capa@gmail.com', '81dc9bdb52d04dc20036dbd8313ed055', 'luis', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `barber`
--
ALTER TABLE `barber`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `barberos`
--
ALTER TABLE `barberos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id_usuario`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `barber`
--
ALTER TABLE `barber`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `barberos`
--
ALTER TABLE `barberos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
