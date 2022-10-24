import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class CarController {
    async createCar(req: any, res: any) {
        const { livro_id, usuario_id } = req.body;
        try {
            const car = await prisma.carrinhos.create({
                data: {
                    livro_id: livro_id,
                    usuario_id: usuario_id
                }
            });

            return res.status(200).json(car);
        } catch (error: any) {
            res.status(400).json("Informação inválida!");
        }
    }

   async showCarByUserID(usuario_id:number, res: any) {
    try {
        const user = await prisma.carrinhos.findMany({
            where: {
                usuario_id: usuario_id
            },
        });
        return res.status(200).json(user);
    } catch (error: any) {
        return res.status(400).json("Usuário não cadastrado!");
    }
   }

   async deleteCar (id_car: number, res: any) {
    try {
        let flag = await this.checkIfCarExists(id_car);
        if (!flag) {
            return res.status(400).json('Informação inválida');
        }

        const deleteCar = await prisma.carrinhos.delete({
            where: {
                id_carrinho: id_car
            }
        })
        return res.status(200).json('Livro removido do carrinho!');
    } catch (error: any) {
        res.status(400).json('Informação inválida!');
    }
   }

   async checkIfCarExists(id_car: number) {
    const car = await prisma.carrinhos.findUnique({
      where: {
        id_carrinho: id_car,
      },
    });
    if (!car) {
      return false;
    } else {
      return true;
    }
  }
};

export default CarController;