/*
  Warnings:

  - You are about to drop the column `category_id` on the `store_item` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `store_item` table. All the data in the column will be lost.
  - You are about to drop the `expense_item_category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `item_id` to the `store_item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "expense_item_category" DROP CONSTRAINT "expense_item_category_parent_id_fkey";

-- DropForeignKey
ALTER TABLE "store_item" DROP CONSTRAINT "store_item_category_id_fkey";

-- AlterTable
ALTER TABLE "store_item" DROP COLUMN "category_id",
DROP COLUMN "name",
ADD COLUMN     "item_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "expense_item_category";

-- CreateTable
CREATE TABLE "item" (
    "id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_category" (
    "id" TEXT NOT NULL,
    "parent_id" TEXT,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "item_category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "item_category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "store_item" ADD CONSTRAINT "store_item_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_category" ADD CONSTRAINT "item_category_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "item_category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
