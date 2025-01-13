import Ong from "../../src/core/model/ong/Ong"
import Id from "../../src/core/shared/Id"
import AreaAtuacao from "../../src/@types/AreaAtuacao"
import Tipo from "../../src/@types/Tipo"
describe("Deve testar classe ong",() => {
    test("Deve criar ong valida",()=> {
        const id = Id.gerarId()
        const ong = new Ong(
            id,
                 // id da ONG (gerado, exemplo: UUID)
            "Nome da ONG",       // nome da ONG
            "email@ong.com",     // email da ONG
             Tipo.ONG,               // tipo de usuário (ONG)
            "Missão da ONG",     // missão da ONG
            "12.345.678/0001-90",// CNPJ da ONG
            "Descrição da ONG",  // descrição da ONG
            "Visão da ONG",      // visão da ONG
             AreaAtuacao.EDUCACAO,// área de atuação da ONG
            "Rua Exemplo, 123",  // endereço da ONG
            "senha-secreta",     // senha
            "imagem.jpg"         // imagem
        )
        expect(ong).toEqual({
          _id:id,
          _nome: 'Nome da ONG',
          _email: "email@ong.com",
          _tipo: 'ONG',
          descricao: 'Descrição da ONG',
          missao: 'Missão da ONG',
          cnpj: '12.345.678/0001-90',
          visao: 'Visão da ONG',
          areaAtuacao: 'Educação',
          endereco: 'Rua Exemplo, 123',
          _senha:"senha-secreta",
          _imagem: "imagem.jpg"
        })
    }   )

})