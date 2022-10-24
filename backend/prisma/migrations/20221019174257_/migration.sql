/*
  Warnings:

  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_usurario` on the `usuarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "usuarios" DROP CONSTRAINT "usuarios_pkey",
DROP COLUMN "id_usurario",
ADD COLUMN     "id_usuario" SERIAL NOT NULL,
ADD CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario");
