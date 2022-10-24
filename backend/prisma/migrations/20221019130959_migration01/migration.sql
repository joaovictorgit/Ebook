-- CreateTable
CREATE TABLE "usuarios" (
    "id_usurario" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "imagem" TEXT,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usurario")
);

-- CreateTable
CREATE TABLE "autores" (
    "id_autor" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "imagem" TEXT,

    CONSTRAINT "autores_pkey" PRIMARY KEY ("id_autor")
);

-- CreateTable
CREATE TABLE "livros" (
    "id_livro" SERIAL NOT NULL,
    "nome_livro" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,
    "imagem" TEXT,
    "autor_id" INTEGER NOT NULL,

    CONSTRAINT "livros_pkey" PRIMARY KEY ("id_livro")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "autores_email_key" ON "autores"("email");

-- CreateIndex
CREATE UNIQUE INDEX "livros_nome_livro_key" ON "livros"("nome_livro");

-- AddForeignKey
ALTER TABLE "livros" ADD CONSTRAINT "livros_autor_id_fkey" FOREIGN KEY ("autor_id") REFERENCES "autores"("id_autor") ON DELETE RESTRICT ON UPDATE CASCADE;
