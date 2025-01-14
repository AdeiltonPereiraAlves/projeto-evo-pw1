
import Tipo from '../../src/@types/Tipo'
import Voluntario from '../../src/core/model/voluntario/Voluntario'
import Id from '../../src/core/shared/Id'
import Disponibilidade from '../../src/@types/Disponibilidade'
import Erros from '../../src/core/constants/Erros'

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
    test("Deve  alterar habilidades ",() => {
        const id  = Id.gerarId()
       
        const habilidades = ["pisicolo","Comunicativo","Cuidadoso"]
        const interesses = ["Ajudar adolecentes","Ajudar comunidade"]
        const v = new Voluntario(id, "Jose", "jose@email.com", Tipo.VOLUNTARIO,habilidades,interesses,Disponibilidade.INTEGRAL,"123", "img/perfil")
        
    
        const h = ["comunicativo","Cuidadoso","bom em vendas"]
        v.setHabilidades(h)
        expect(v.getHabilidades()).toEqual(["comunicativo","Cuidadoso","bom em vendas"])

    })
    test("Deve retornar erro se alguma habilidade estiver vazia ",() => {
        const id  = Id.gerarId()
       
        const habilidades = ["pisicolo","Comunicativo","Cuidadoso"]
        const interesses = ["Ajudar adolecentes","Ajudar comunidade"]
        const v = new Voluntario(id, "Jose", "jose@email.com", Tipo.VOLUNTARIO,habilidades,interesses,Disponibilidade.INTEGRAL,"123", "img/perfil")
        
    
        const h = ["comunicativo","Cuidadoso"," "]
       
        expect( v.setHabilidades(h)).toBe("HABILIDADES_INVALIDAS")

    })
    test("Deve retornar habilidades",() => {
        const id  = Id.gerarId()
       
        const habilidades = ["pisicolo","Comunicativo","Cuidadoso"]
        const interesses = ["Ajudar adolecentes","Ajudar comunidade"]
        const v = new Voluntario(id, "Jose", "jose@email.com", Tipo.VOLUNTARIO,habilidades,interesses,Disponibilidade.INTEGRAL,"123", "img/perfil")
        
    
        
        expect(v.getHabilidades()).toEqual(["pisicolo","Comunicativo","Cuidadoso"])

    })
    test("Deve retornar erro ao alterar interesses para vazio",() => {
        const id  = Id.gerarId()
       
        const habilidades = ["pisicolo","Comunicativo","Cuidadoso"]
        const interesses = ["Ajudar adolecentes","Ajudar comunidade"]
        const v = new Voluntario(id, "Jose", "jose@email.com", Tipo.VOLUNTARIO,habilidades,interesses,Disponibilidade.INTEGRAL,"123", "img/perfil")
        
    
        const i = ["","",""]
        expect(v.setInteresses(i)).toBe("INTERESSES_INVALIDOS")

    })
    test("Deve retornar erro ao inserir string vazia no interesses ",() => {
        const id  = Id.gerarId()
       
        const habilidades = ["pisicolo","Comunicativo","Cuidadoso"]
        const interesses = ["Ajudar adolecentes","Ajudar comunidade"]
        const v = new Voluntario(id, "Jose", "jose@email.com", Tipo.VOLUNTARIO,habilidades,interesses,Disponibilidade.INTEGRAL,"123", "img/perfil")
        
    
        const i = ["Ajudar adolecentes",""]
        expect(v.setInteresses(i)).toBe("INTERESSES_INVALIDOS")

    })
    test("Deve retornar  interesses ",() => {
        const id  = Id.gerarId()
       
        const habilidades = ["pisicolo","Comunicativo","Cuidadoso"]
        const interesses = ["Ajudar adolecentes","Ajudar comunidade"]
        const v = new Voluntario(id, "Jose", "jose@email.com", Tipo.VOLUNTARIO,habilidades,interesses,Disponibilidade.INTEGRAL,"123", "img/perfil")
        
    
      
        expect(v.getInteresses()).toEqual(["Ajudar adolecentes","Ajudar comunidade"])

    })
    test("Deve alterar interesses ",() => {
        const id  = Id.gerarId()
       
        const habilidades = ["pisicolo","Comunicativo","Cuidadoso"]
        const interesses = ["Ajudar adolecentes","Ajudar comunidade"]
        const v = new Voluntario(id, "Jose", "jose@email.com", Tipo.VOLUNTARIO,habilidades,interesses,Disponibilidade.INTEGRAL,"123", "img/perfil")
        
        
        const i = ["Ajudar adolecentes","Ajudar idosos"]
        v.setInteresses(i)
        expect(v.getInteresses()).toEqual(["Ajudar adolecentes","Ajudar idosos"])

    })
    test("Deve alterar disponibilidade",() => {
        const id  = Id.gerarId()
       
        const habilidades = ["pisicolo","Comunicativo","Cuidadoso"]
        const interesses = ["Ajudar adolecentes","Ajudar comunidade"]
        const v = new Voluntario(id, "Jose", "jose@email.com", Tipo.VOLUNTARIO,habilidades,interesses,Disponibilidade.INTEGRAL,"123", "img/perfil")
        
        v.setDisponibilidade(Disponibilidade.MANHA)
        
        expect(v.getDisponibilidade()).toBe("manhã")

    })
    
  test("deve lançar um erro se os valores passados para o construtor forem inválidos", () => {
    expect(() => {
      
      new Voluntario(
        '1', " ", "", Tipo.VOLUNTARIO,[],[],Disponibilidade.INTEGRAL,"", ""
      );
    }).toThrow(
      `${Erros.NOME_VAZIO}, ${Erros.EMAIL_INVALIDO}, ${Erros.SENHA_INVALIDA}, ${Erros.IMAGEM_INVALIDA}`
    );
  
  })
  test("deve lançar um erro se os valores passados para o construtor forem inválidos", () => {
    expect(() => {
      
      new Voluntario(
        '1', "jose ", "jose@email.com", Tipo.VOLUNTARIO,[],[],Disponibilidade.INTEGRAL,"123", "123"
      );
    }).toThrow(
      `${Erros.HABILIDADES_INVALIDAS}, ${Erros.INTERESSES_INVALIDOS}`
    );
  
  })
  
})