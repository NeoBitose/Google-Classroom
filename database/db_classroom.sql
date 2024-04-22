CREATE TABLE `kelas_mengajar` (
  `id_kelas_mengajar` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nama_kelas` varchar(255),
  `deskripsi` varchar(255),
  `nama_bagian` varchar(255),
  `nama_ruang` varchar(255),
  `mata_pelajaran` varchar(255),
  `tema_id` int
);

CREATE TABLE `kelas_terdaftar` (
  `id_kelas_terdaftar` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nama_kelas` varchar(255),
  `deskripsi` varchar(255),
  `nama_bagian` varchar(255),
  `nama_ruang` varchar(255),
  `mata_pelajaran` varchar(255),
  `tema_id` int
);

CREATE TABLE `tema_kelas` (
  `id_tema_kelas` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nama_tema` int
);

ALTER TABLE `kelas_mengajar` ADD FOREIGN KEY (`tema_id`) REFERENCES `tema_kelas` (`id_tema_kelas`);

ALTER TABLE `kelas_terdaftar` ADD FOREIGN KEY (`tema_id`) REFERENCES `tema_kelas` (`id_tema_kelas`);
