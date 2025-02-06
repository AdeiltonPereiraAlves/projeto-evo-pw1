import Vagatype from "../../../@types/VagaType"

export default interface VagaRepositorioPort {
    registrar(vaga:Vagatype): any
    buscar():any
}