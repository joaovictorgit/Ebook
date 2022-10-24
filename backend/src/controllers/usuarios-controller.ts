import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import jwt, { Secret } from 'jsonwebtoken';
const secret_key:Secret = 'ebook';
//const jwt = require("jsonwebtoken");
class UsuarioController {
  async createUser(req: any, res: any) {
    const { nome, email, senha, imagem } = req.body;
    try {
      const senhaHash = await bcrypt.hash(senha, 8);
      const usuario = await prisma.usuarios.create({
        data: {
          nome: nome,
          email: email,
          senha: senhaHash,
          imagem: imagem,
        },
        select: {
          nome: true,
          email: true,
          senha: true,
          imagem: false,
        },
      });
      return res.status(200).json(usuario);
    } catch (error: any) {
      return res.status(400).json("Informação inválida!");
    }
  }

  async login(req: any, res: any) {
    try {
      const { email, senha } = req.body;
      //console.log(email, senha);
      const checkEmail = await prisma.usuarios.findUnique({ where: { email } });

      if (!checkEmail) {
        return res.status(400).json("Email não existe!");
      }

      const comparePass = await bcrypt.compare(senha, checkEmail.senha);
      if (!comparePass) {
        return res.status(400).json("Senha incorreta!");
      }

      return res.status(200).json({
        checkEmail,
        token:jwt.sign(
          {
            id: checkEmail.id_usuario,
          },
          secret_key,
          { expiresIn: '1h' }
        ),
      });
    } catch (error: any) {
      return res.status(400).json("Informação inválida!");
    }
  }

  async showAllUsers(req: any, res: any) {
    try {
      const usuarios = await prisma.usuarios.findMany();
      return res.status(200).json(usuarios);
    } catch (error: any) {
      return res.status(400).json("Informação inválida!");
    }
  }

  async showByUserId(id_usuario: number, res: any) {
    try {
      let flag = await this.checkIfUserExists(id_usuario);

      if (!flag) {
        return res.status(400).json("Usuário não existe!");
      }

      const usuario = await prisma.usuarios.findUnique({
        where: {
          id_usuario: id_usuario,
        },
      });
      return res.status(200).json(usuario);
    } catch (error: any) {
      return res.status(400).json("Informação inválida!");
    }
  }

  async updateUser(id_usuario: number, req: any, res: any) {
    try {
      let flag = await this.checkIfUserExists(id_usuario);
      if (!flag) {
        return res.status(400).json("Usuário não existe!");
      }

      const usuarioAtualizar = await prisma.usuarios.update({
        where: {
          id_usuario: id_usuario,
        },
        data: req.body,
      });
      return res.status(200).json(usuarioAtualizar);
    } catch (error: any) {
      return res.status(400).json("Usuário não cadastrado!");
    }
  }

  async deleteUser(id_usuario: number, res: any) {
    try {
      let flag = await this.checkIfUserExists(id_usuario);
      if (!flag) {
        return res.status(404).json("Usuário não existe!");
      }
      // Caso exista, deleta o usuário e retorna status 200
      const deleteUser = await prisma.usuarios.delete({
        where: {
          id_usuario: id_usuario,
        },
      });
      return res.status(200).json("Usuário deletado com sucesso.");
    } catch (error: any) {
      return res.status(400).json("Usuário não cadastrado!");
    }
  }

  async checkIfUserExists(id_usuario: number) {
    const user = await prisma.usuarios.findUnique({
      where: {
        id_usuario: id_usuario,
      },
    });
    if (!user) {
      return false;
    } else {
      return true;
    }
  }
}

export default UsuarioController;
