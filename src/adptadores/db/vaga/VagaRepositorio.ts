import VagaSaidaType from "../../../@types/VagaSaidaType";
import vagasSaidaArray from "../../../@types/vagasSaidaArray";
import VagaType from "../../../@types/VagaType";
import Vaga from "../../../core/model/vaga/Vaga";
import VagaRepositorioPort from "../../../core/useCase/vaga/VagaRepositorioPort";
import prismaDb from "../../prismaDb/Prisma";
export default class VagaRepositorio implements VagaRepositorioPort {
  async excluir(id: string, idOng: string): Promise<boolean> {
    try {
    
      const resultado = await prismaDb.vaga.deleteMany({ where: { id , ongId: idOng}, });
      
      
      return resultado? true : false
    } catch (error) {
      throw new Error("Erro ao deletar vaga");
    }
  }
  async registrar(vaga: Vaga):Promise<VagaSaidaType> {
    try {
      console.log(vaga, "vaga repo");
      const vagaRegistrada = await prismaDb.vaga.create({
        data: {
          id: vaga.getId(),
          titulo: vaga.getTitulo(),
          descricao: vaga.getDescricao(),
          requisitos:vaga.getRequisitos(),
          quantidade: vaga.getQuantidade(),
          status: vaga.getStatus(),
          duracao: vaga.getDuracao(),
          localizacao: vaga.getLocalizacao(),
          tipoTrabalho: vaga.getTipoTrabalho(),
          latitude: vaga.getLatitude(),
          longitude: vaga.getLongitude(),
          ongId: vaga.getOngId()
        },
      });

      console.log(vagaRegistrada, "vaga registrada");
      return vagaRegistrada;
    } catch (error) {
      console.log(error, "erro banco");
      throw new Error("erro no banco.");
    }
  }
  async buscar(): Promise<VagaSaidaType[] | null> {
    try {
      const vagas = await prismaDb.vaga.findMany({
        include: {
          ong: true,
          
        },
      });
      console.log(vagas, "vagas")
      return vagas 
    } catch (error) {
      throw new Error("erro ao buscar vagas.");
    }
  }
  async buscarPorId(id: string):Promise<VagaSaidaType| null> {
    try {
      const existeVaga = await prismaDb.vaga.findUnique({ where: { id },include: { ong:{select:{id:true,nome:true, imagem:true}} } });
      return existeVaga;
    } catch (error) {
      console.log(error,"error no banco")
      throw new Error("erro ao buscar vaga por id.");
    }
  }
  async editar(vaga: VagaType):Promise<VagaSaidaType> {
    try {
      const vagaAtualizada = await prismaDb.vaga.update({
        where: {
          id: vaga.id,
        },
        data: {
          titulo: vaga.titulo,
          descricao: vaga.descricao,
          requisitos: vaga.requisitos,
          quantidade: vaga.quantidade,
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
