
import Tipo from '../../src/@types/Tipo'
import Erros from '../../src/core/constants/Erros'
import Usuario from '../../src/core/model/usuario/Usuario'
import Id from '../../src/core/shared/Id'
import Validador from '../../src/core/utils/Validador'

describe("Deve testar funcionalidades do usuario",()=> {
    test("Deve criar um usuario valido",() => {
        const id = Id.gerarId()
        const u = new Usuario(id,"Jose","jose@email.com",Tipo.Voluntario,"123","z")
        expect(u).toEqual({_id: id,_nome:"Jose",_email:"jose@email.com",_tipo: Tipo.Voluntario,_senha:"123",_imagem:"z"})
    })
    test('Deve permitir retornar erro nome vazia se o nome for vazio',() => {
        const id = Id.gerarId()
        const u = new Usuario(id,"Jose","jose@email.com",Tipo.Voluntario,"123","z")
       
        // Validador.naoVazia("",Erros.NOME_VAZIO)
        // expect(Validador.naoVazia("",Erros.NOME_VAZIO)).toBe('NOME_VAZIO')
       
        expect(u.setNome("")).toBe('NOME_VAZIO')

    })
    test("Deve permitir altera o nome do usuario",() => {
        const id = Id.gerarId()
        const u = new Usuario(id,"Jose","jose@email.com",Tipo.Voluntario,"123","z")
       
        // Validador.naoVazia("",Erros.NOME_VAZIO)
        // expect(Validador.naoVazia("",Erros.NOME_VAZIO)).toBe('NOME_VAZIO')
        u.setNome("Jose pereira")
        expect(u.getNome()).toBe("Jose pereira")
    })
    test("Deve retornar erro ao inserir senha vazia",() => {
        const id = Id.gerarId()
        const u = new Usuario(id,"Jose","jose@email.com",Tipo.Voluntario,"123","z")
       
        // Validador.naoVazia("",Erros.NOME_VAZIO)
        // expect(Validador.naoVazia("",Erros.NOME_VAZIO)).toBe('NOME_VAZIO')
        u.setSenha("")
        expect( u.setSenha("")).toBe('SENHA_INVALIDA')
    }) 
    test("Deve inserir uma senha",() => {
        const id = Id.gerarId()
        const u = new Usuario(id,"Jose","jose@email.com",Tipo.Voluntario,"123","z")
       
        // Validador.naoVazia("",Erros.NOME_VAZIO)
        // expect(Validador.naoVazia("",Erros.NOME_VAZIO)).toBe('NOME_VAZIO')
        u.setSenha("123")
        expect(u.getSenha() ).toBe('123')
    })
    
})