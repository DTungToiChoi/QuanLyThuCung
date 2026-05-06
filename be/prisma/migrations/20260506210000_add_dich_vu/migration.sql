-- CreateTable
CREATE TABLE `DichVu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tenDichVu` VARCHAR(191) NOT NULL,
    `moTaDichVu` VARCHAR(191) NULL,
    `giaDichVu` DECIMAL(12, 2) NOT NULL,
    `hinhAnhUrl` VARCHAR(191) NULL,
    `hoatDong` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
