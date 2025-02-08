import CasoDeUso from "../../../@types/CasoDeUso";
import OngRepositorioPort from "./OngRepositorioPort";
export type aprovarDto = {
    id:string,
    aprovado: string
}
export default class AprovarVoluntario implements CasoDeUso<aprovarDto,any>{
    constructor(private ongRepositorio: OngRepositorioPort){}
    async executar(dto: aprovarDto): Promise<any> {
        try {
            
            const aprovado = await this.ongRepositorio.aprovarVoluntario(dto)
            return aprovado
        } catch (error) {
            
            throw new Error("Method not implemented.");
        }
    }

}