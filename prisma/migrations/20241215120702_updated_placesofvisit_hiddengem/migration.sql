/*
  Warnings:

  - You are about to drop the column `brief_description` on the `HiddenGem` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `HiddenGem` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `PlacesToVisit` table. All the data in the column will be lost.
  - Added the required column `brief_desc` to the `HiddenGem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desc` to the `PlacesToVisit` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "HiddenGem" DROP COLUMN "brief_description",
DROP COLUMN "description",
ADD COLUMN     "brief_desc" TEXT NOT NULL,
ADD COLUMN     "desc" TEXT;

-- AlterTable
ALTER TABLE "PlacesToVisit" DROP COLUMN "description",
ADD COLUMN     "desc" TEXT NOT NULL;
