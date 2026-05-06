-- AlterTable
ALTER TABLE `User`
    ADD COLUMN `tenNhanVien` VARCHAR(191) NULL,
    ADD COLUMN `chucVu` ENUM('QUAN_LY', 'BAC_SI') NULL;
