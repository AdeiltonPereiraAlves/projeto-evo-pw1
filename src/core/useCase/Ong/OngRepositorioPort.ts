import { promises } from "dns";
import OngType from "../../../@types/OngType";
import Ong from "../../model/ong/Ong";
import { mudarStatusVagaDto } from "./MudarStatusVaga";
import Vagatype from "../../../@types/VagaType";
import OngSaidaType from "../../../@types/OngSaidaType";
import VagaSaidaType from "../../../@types/VagaSaidaType";
import { aprovarDto } from "./AprovarVoluntario";
import { editarOngDto } from "./EditarOng";

export default interface OngRepositorioPort {
    registrar(ong:Ong):Promise<OngSaidaType>
    excluir(id:string):Promise<boolean>
    atualizar(ong:editarOngDto):Promise<Ong|null>
    buscarPorId(id:string): Promise<OngType>
    buscarTodos():Promise<OngSaidaType[]>
    buscarVagasDeOng(id:string):Promise<VagaSaidaType[]| null>
    buscarPorEmail(email:string):Promise<OngType| null>
    aprovarVoluntario(aprovacao: aprovarDto):Promise<boolean>
    listarVagaDeUmaOng(ong:any): Promise<VagaSaidaType| null>
    mudarStatusDaVaga(statusVaga: mudarStatusVagaDto):Promise<boolean>
    alterQuantidadeVaga(alterarVaga:mudarStatusVagaDto ):any
    


   
}
 