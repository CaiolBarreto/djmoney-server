-- CreateTable
CREATE TABLE "Transition" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "date" TEXT NOT NULL,

    CONSTRAINT "Transition_pkey" PRIMARY KEY ("id")
);
