-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Waktu pembuatan: 16 Nov 2024 pada 13.16
-- Versi server: 8.0.30
-- Versi PHP: 8.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `healthyfy`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `news`
--

CREATE TABLE `news` (
  `id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data untuk tabel `news`
--

INSERT INTO `news` (`id`, `title`, `description`, `link`, `image`) VALUES
(5, 'Pentingnya Gizi Seimbang bagi Kesehatan', 'Kondisi gizi yang tidak optimal berkaitan dengan gangguan kesehatan dan kondisi kesehatan yang buruk, serta meningkatkan risiko penyakit infeksi, dan Penyakit Tidak Menular', 'https://krakataumedika.com/info-media/artikel/pentingnya-gizi-seimbang-bagi-kesehatan', 'https://firebasestorage.googleapis.com/v0/b/song-e806c.appspot.com/o/News%2Fnews1.jpg?alt=media&token=62b0e55e-b50d-46ec-8a02-0e3c254604d6'),
(6, 'Mengenal Pedoman Gizi Seimbang dan Manfaat untuk Kesehatan', 'Gizi seimbang sangat dibutuhkan oleh tubuh agar bisa menjalankan fungsinya dengan baik. Lalu, apa yang dimaksud dengan gizi seimbang?', 'https://www.halodoc.com/artikel/mengenal-pedoman-gizi-seimbang-dan-manfaat-untuk-kesehatan?srsltid=AfmBOoozoINykUcdEf22uwcGkqDSBYue6yWVPM-avysM_bzXLnglYehq', 'https://firebasestorage.googleapis.com/v0/b/song-e806c.appspot.com/o/News%2Fnews2.jpg?alt=media&token=9b4ac952-d9d8-4377-868a-b4a462ea8899'),
(8, '10 Pedoman Gizi Seimbang untuk Pola Hidup yang Lebih Sehat', 'Pedoman Gizi Seimbang yang didasari oleh 4 pilar utama dan 10 pesan gizi seimbang merupakan merupakan konsep baru yang menggantikan pedoman 4 Sehat 5 Sempurna dalam pemenuhan kebutuhan gizi masyarakat.', 'https://www.siloamhospitals.com/informasi-siloam/artikel/mengenal-10-pesan-gizi-seimbang', 'https://firebasestorage.googleapis.com/v0/b/song-e806c.appspot.com/o/News%2Fnews3.jpg?alt=media&token=93ba783b-cea8-4523-813a-e46726df6521'),
(9, 'Hidup Sehat Dengan Gizi Seimbang', 'Salah satu ciri bangsa maju adalah bangsa yang memiliki tingkat kesehatan, kecerdasan, dan produktivitas kerja yang tinggi. Ketiga hal ini dipengaruhi oleh keadaan gizi.', 'https://indonesiabaik.id/infografis/hidup-sehat-dengan-gizi-seimbang', 'https://firebasestorage.googleapis.com/v0/b/song-e806c.appspot.com/o/News%2Fnews4.png?alt=media&token=66a9c0e7-c95f-43af-a51f-5b8f6e9ac230'),
(10, 'Pentingkah Konsumsi Makanan Bergizi Seimbang', 'Sistem imunitas atau sistem kekebalan tubuh merupakan sistem pertahanan alami yang bertugas untuk melindungi tubuh dari serangan patogen atau kuman (virus, bakteri, jamur).', 'https://dinkes.jogjaprov.go.id/berita/detail/gizi-dan-imunitas-pentingkah-konsumsi-makanan-bergizi-seimbang', 'https://firebasestorage.googleapis.com/v0/b/song-e806c.appspot.com/o/News%2Fnews5.png?alt=media&token=0639585e-b379-400c-8c64-5b02ad284a1b');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `news`
--
ALTER TABLE `news`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
