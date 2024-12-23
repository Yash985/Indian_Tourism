/*
  Warnings:

  - You are about to drop the column `img` on the `HiddenGem` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `PlacesToVisit` table. All the data in the column will be lost.
  - You are about to drop the column `state_img` on the `State` table. All the data in the column will be lost.
  - Added the required column `img_url` to the `HiddenGem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `img_url` to the `PlacesToVisit` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state_img_url` to the `State` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HiddenGem" DROP COLUMN "img",
ADD COLUMN     "img_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PlacesToVisit" DROP COLUMN "img",
ADD COLUMN     "img_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "State" DROP COLUMN "state_img",
ADD COLUMN     "state_img_url" TEXT NOT NULL;
