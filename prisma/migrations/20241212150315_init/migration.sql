-- CreateTable
CREATE TABLE "State" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "state_img" TEXT NOT NULL,

    CONSTRAINT "State_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlacesToVisit" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "badge" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "PlacesToVisit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HiddenGem" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "brief_description" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "stateId" INTEGER NOT NULL,

    CONSTRAINT "HiddenGem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PlacesToVisit" ADD CONSTRAINT "PlacesToVisit_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HiddenGem" ADD CONSTRAINT "HiddenGem_stateId_fkey" FOREIGN KEY ("stateId") REFERENCES "State"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
