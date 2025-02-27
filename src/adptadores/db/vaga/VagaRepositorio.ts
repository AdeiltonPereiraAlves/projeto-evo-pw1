import vagasSaidaArray from "../../../@types/vagasSaidaArray";
import VagaType from "../../../@types/VagaType";
import VagaRepositorioPort from "../../../core/useCase/vaga/VagaRepositorioPort";
import prismaDb from "../../prismaDb/Prisma";
export default class VagaRepositorio implements VagaRepositorioPort {
  async excluir(id: string): Promise<any> {
    try {
      const vagaExistente = await this.buscarPorId(id);
      if (!vagaExistente) {
        throw new Error("ID nao existe");
      }
      const resultado = await prismaDb.vaga.delete({ where: { id } });

      if (!resultado) {
        throw new Error("Erro ao deletar vaga");
      }
      return resultado;
    } catch (error) {
      throw new Error("Erro ao deletar vaga");
    }
  }
  async registrar(vaga: VagaType) {
    try {
      console.log(vaga, "vaga repo");
      const vagaRegistrada = await prismaDb.vaga.create({
        data: {
        ...vaga
        },
      });

      console.log(vagaRegistrada, "vaga registrada");
      return vagaRegistrada;
    } catch (error) {
      console.log(error, "erro banco");
      throw new Error("erro no banco.");
    }
  }
  async buscar(): Promise<VagaType[] | null> {
    try {
      const vagas = await prismaDb.vaga.findMany({
        include: {
          ong: true,
        },
      });
      console.log(vagas, "vagas")
      return vagas as any
    } catch (error) {
      throw new Error("erro ao buscar vagas.");
    }
  }
  async buscarPorId(id: string) {
    try {
      const existeVaga = await prismaDb.vaga.findUnique({ where: { id } });
      return existeVaga;
    } catch (error) {
      throw new Error("erro ao buscar vaga por id.");
    }
  }
  async editar(vaga: VagaType) {
    try {
      const vagaAtualizada = await prismaDb.vaga.update({
        where: {
          id: vaga.id,
        },
        data: {
          titulo: vaga.titulo,
          descricao: vaga.descricao,
          requisitos: vaga.requisitos,
          status: vaga.status,
          duracao: vaga.duracao,
          localizacao: vaga.localizacao,
          tipoTrabalho: vaga.tipoTrabalho,
          latitude: vaga.latitude,
          longitude: vaga.longitude,
        },
      });
      return vagaAtualizada;
    } catch (error) {
      throw new Error("Erro ao editar uma vaga");
    }
  }
  async filtrarVagas(termo: string) {
    return await prismaDb.vaga.findMany({
      where: {
        OR: [
          { titulo: { contains: termo, mode: "insensitive" } }, // Ignora maiúsculas e minúsculas
          { descricao: { contains: termo, mode: "insensitive" } },
          {localizacao: {contains:termo, mode:"insensitive"}},
          {requisitos:{ hasSome: [termo]}},
          
        ],
     // Filtra pelo tipo de trabalho se fornecido
          // disponibilidade
      },
    });
  }
}
