
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
            _habilidades:habilidades,
            _interesses: interesses,
            _disponibilidade: Disponibilidade.INTEGRAL,
            _senha: "123", 
            _imagem: "img/perfil"
        })

    })
    test("Deve alterar o nome do  Voluntario valido",() => {
        const id  = Id.gerarId()
        
        const habilidades = ["pisicolo","Comunicativo","Cuidadoso"]
        const interesses = ["Ajudar adolecentes","Ajudar comunidade"]
        const v = new Voluntario(id, "Jose", "jose@email.com", Tipo.VOLUNTARIO,habilidades,interesses,Disponibilidade.INTEGRAL,"123", "img/perfil")
        v.setNome("Carlos alves")

        expect(v.getNome()).toBe("Carlos alves")

    })
    test("Deve retornar erro ao alterar habilidades para vazio",() => {
        const id  = Id.gerarId()
       
        const habilidades = ["pisicolo","Comunicativo","Cuidadoso"]
        const interesses = ["Ajudar adolecentes","Ajudar comunidade"]
        const v = new Voluntario(id, "Jose", "jose@email.com", Tipo.VOLUNTARIO,habilidades,interesses,Disponibilidade.INTEGRAL,"123", "img/perfil")
        
    

        expect(v.setHabilidades([])).toBe("HABILIDADES_INVALIDAS")

    })
    test("Deve retornar erro ao alterar habilidades para vazio",() => {
        const id  = Id.gerarId()
       
        const habilidades = ["pisicolo","Comunicativo","Cuidadoso"]
        const interesses = ["Ajudar adolecentes","Ajudar comunidade"]
        const v = new Voluntario(id, "Jose", "jose@email.com", Tipo.VOLUNTARIO,habilidades,interesses,Disponibilidade.INTEGRAL,"123", "img/perfil")
        
    
        const h = ["","",""]
        expect(v.setHabilidades(h)).toBe("HABILIDADES_INVALIDAS")

    })
    test("Deve retornar erro ao alterar interesses para vazio",() => {
        const id  = Id.gerarId()
       
        const habilidades = ["pisicolo","Comunicativo","Cuidadoso"]
        const interesses = ["Ajudar adolecentes","Ajudar comunidade"]
        const v = new Voluntario(id, "Jose", "jose@email.com", Tipo.VOLUNTARIO,habilidades,interesses,Disponibilidade.INTEGRAL,"123", "img/perfil")
        
    
        const i = ["","",""]
        expect(v.setInteresses(i)).toBe("INTERESSES_INVALIDOS")

    })
})