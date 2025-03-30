-- AlterTable
ALTER TABLE "User" ADD COLUMN     "bannerImage" TEXT,
ADD COLUMN     "profileImage" TEXT,
ALTER COLUMN "biografia" DROP NOT NULL;
