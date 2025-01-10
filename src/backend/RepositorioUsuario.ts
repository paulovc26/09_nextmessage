import { PrismaClient } from "@prisma/client";

export default class RepositorioUsuario {
  private static db: PrismaClient = new PrismaClient();

  static async listar() {
    return await this.db.usuario.findMany();
  }

  static async salvar(usuario: any) {
    return await this.db.usuario.upsert({
      where: { id: usuario.id },
      update: usuario,
      create: usuario,
    });
  }

  static async getAll() {
    return await this.db.usuario.findMany();
  }

  static async getById(id: string) {
    return await this.db.usuario.findUnique({ where: { id } });
  }
}
