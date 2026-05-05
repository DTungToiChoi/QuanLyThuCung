/*
  Warnings:

  - You are about to drop the column `danhMuc` on the `sanpham` table. All the data in the column will be lost.
  - Added the required column `danhMucId` to the `SanPham` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `sanpham` DROP COLUMN `danhMuc`,
    ADD COLUMN `danhMucId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `DanhMucSanPham` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tenDanhMuc` VARCHAR(191) NOT NULL,
    `moTa` VARCHAR(191) NULL,
    `hoatDong` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `DanhMucSanPham_tenDanhMuc_key`(`tenDanhMuc`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `SanPham` ADD CONSTRAINT `SanPham_danhMucId_fkey` FOREIGN KEY (`danhMucId`) REFERENCES `DanhMucSanPham`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
