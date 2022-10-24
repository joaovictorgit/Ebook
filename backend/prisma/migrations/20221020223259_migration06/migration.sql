/*
  Warnings:

  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_usuario` on the `usuarios` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "carrinhos" DROP CONSTRAINT "carrinhos_usuario_id_fkey";

-- DropForeignKey
ALTER TABLE "livros" DROP CONSTRAINT "livros_usuario_id_fkey";

-- AlterTable
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_pkey",
DROP COLUMN "id_usuario",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "livros" ADD CONSTRAINT "livros_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrinhos" ADD CONSTRAINT "carrinhos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
