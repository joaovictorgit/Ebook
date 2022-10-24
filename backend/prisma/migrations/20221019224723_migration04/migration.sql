-- CreateTable
CREATE TABLE "carrinhos" (
    "id_carrinho" SERIAL NOT NULL,
    "livro_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "carrinhos_pkey" PRIMARY KEY ("id_carrinho")
);

-- AddForeignKey
ALTER TABLE "carrinhos" ADD CONSTRAINT "carrinhos_livro_id_fkey" FOREIGN KEY ("livro_id") REFERENCES "livros"("id_livro") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "carrinhos" ADD CONSTRAINT "carrinhos_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id_usuario") ON DELETE RESTRICT ON UPDATE CASCADE;
