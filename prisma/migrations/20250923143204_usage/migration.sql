-- CreateTable
CREATE TABLE "public"."Usage" (
    "key" TEXT NOT NULL,
    "point" INTEGER NOT NULL,
    "expire" TIMESTAMP(3),

    CONSTRAINT "Usage_pkey" PRIMARY KEY ("key")
);
