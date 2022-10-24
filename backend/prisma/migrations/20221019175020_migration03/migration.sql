/*
  Warnings:

  - You are about to drop the column `autor_id` on the `livros` table. All the data in the column will be lost.
  - You are about to drop the `autores` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `usuario_id` to the `livros` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "livros" DROP CONSTRAINT "livros_autor_id_fkey";

-- AlterTable
ALTER TABLE "livros" DROP COLUMN "autor_id",
ADD COLUMN     "usuario_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "autores";

-- AddForeignKey
ALTER TABLE "livros" ADD CONSTRAINT "livros_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
