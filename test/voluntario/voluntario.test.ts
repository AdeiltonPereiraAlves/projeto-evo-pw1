
import Tipo from '../../src/@types/Tipo'
import Voluntario from '../../src/core/model/voluntario/Voluntario'
import Id from '../../src/core/shared/Id'
import Disponibilidade from '../../src/@types/Disponibilidade'

describe("testar voluntario",()=> {
    test("Deve criar um Voluntario valido",() => {
        const id  = Id.gerarId()
        const idTest = id
        const habilidades = ["pisicolo","Comunicativo","Cuidadoso"]
        const interesses = ["Ajudar adolecentes","Ajudar comunidade"]
        const v = new Voluntario(id, "Jose", "jose@email.com", Tipo.VOLUNTARIO,habilidades,interesses,Disponibilidade.INTEGRAL,"123", "img/perfil")
        expect(v).toEqual({
            _id:  idTest,
            _nome: "Jose",
            _email: "jose@email.com",
            _tipo: Tipo.VOLUNTARIO,
            habilidades:habilidades,
            interesses: ["Ajudar adolecentes","Ajudar comunidade"],
            disponibilidade: Disponibilidade.INTEGRAL,
            _senha: "123", 
            _imagem: "img/perfil"
        })

    })
})