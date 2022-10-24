import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class LivrosController {
  async createBook(req: any, res: any) {
    const { nome_livro, categoria, imagem, preco, usuario_id } = req.body;
    try {
      const livro = await prisma.livros.create({
        data: {
          nome_livro: nome_livro,
          categoria: categoria,
          imagem: imagem,
          preco: preco,
          autorLivro: { connect: { id_usuario: usuario_id } },
        },
      });
      return res.status(200).json(livro);
    } catch (error: any) {
      return res.status(400).json("Livro não foi cadastrado!");
    }
  }

  async showAllBook(req: any, res: any) {
    const books = await prisma.livros.findMany();
    return res.status(200).json(books);
  }

  async showBooksByUserId(id_usuario: number, res: any) {
    try {
      const user = await prisma.livros.findMany({
        where: {
          usuario_id: id_usuario,
        },
      });
      return res.status(200).json(user);
    } catch (error: any) {
      return res.status(400).json("Usuário não cadastrado!");
    }
  }

  async showByBookId (livro_id: number, res: any) {
    try {
      const book = await prisma.livros.findUnique({
        where: {
          id_livro: livro_id
        },
      });
      return res.status(200).json(book);
    } catch (error: any) {
      res.status(400).json('Livro não foi cadastrado')
    }
  }

  async updateBook(id_book: number, req: any, res: any) {
    try {
      const flag = await this.checkIfBookExists(id_book);
      if (!flag) {
        return res.status(400).json("Livro não foi cadastrado!");
      }

      const newBook = await prisma.livros.update({
        where: {
          id_livro: id_book,
        },
        data: req.body,
      });

      return res.status(200).json(newBook);
    } catch (error: any) {
      return res.status(400).json("Livro não foi cadastrado!");
    }
  }

  async deleteBook(id_book: number, res: any) {
    try {
      const flag = await this.checkIfBookExists(id_book);
      if (!flag) {
        return res.status(400).json("Livro não foi cadastrado!");
      }

      const book = await prisma.livros.delete({
        where: {
          id_livro: id_book,
        },
      });

      return res.status(200).json("Livro deletado!");
    } catch (error: any) {
      return res.status(400).json("Livro não foi cadastrado!");
    }
  }

  async checkIfBookExists(id_book: number) {
    const comment = await prisma.livros.findUnique({
      where: {
        id_livro: id_book,
      },
    });

    if (!comment) {
      return false;
    } else {
      return true;
    }
  }
}

export default LivrosController;
