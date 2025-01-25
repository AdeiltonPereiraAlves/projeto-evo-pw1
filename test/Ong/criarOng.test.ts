import Ong from "../../src/core/model/ong/Ong";
import Id from "../../src/core/shared/Id";
import AreaAtuacao from "../../src/@types/AreaAtuacao";
import Tipo from "../../src/@types/Tipo";
describe("Deve testar classe ong", () => {
  test("Deve criar ong valida", () => {
    const id = Id.gerarId();
    const ong = new Ong(
      id,
      // id da ONG (gerado, exemplo: UUID)
      "Nome da ONG", // nome da ONG
      "ong@email.com", // email da ONG
      Tipo.ONG, // tipo de usuário (ONG)
      "Missão da ONG", // missão da ONG
      "12.345.678/0001-90", // CNPJ da ONG
      "Descrição da ONG", // descrição da ONG
      "Visão da ONG", // visão da ONG
      [AreaAtuacao.EDUCACAO], // área de atuação da ONG
      "Rua Exemplo, 123", // endereço da ONG
      "senha-secreta", // senha
      "imagem.jpg" // imagem
    );
    expect(ong).toEqual({
      _id: id,
      _nome: "Nome da ONG",
      _email: "ong@email.com",
      _tipo: "ONG",
      missao: "Missão da ONG",
      cnpj: "12.345.678/0001-90",
      descricao: "Descrição da ONG",
      visao: "Visão da ONG",
      areaAtuacao: ["EDUCACAO"],
      endereco: "Rua Exemplo, 123",
      _senha: "senha-secreta",
      _imagem: "imagem.jpg",
    });
  });
  test("Deve lancar erro ao passar algo vazio no construtor", () => {
    const id = Id.gerarId();

    expect(
      () =>
        new Ong(
          id,
          // id da ONG (gerado, exemplo: UUID)
          "Nome da ONG", // nome da ONG
          "ong@email.com", // email da ONG
          Tipo.ONG, // tipo de usuário (ONG)
          "Missão da ONG", // missão da ONG
          "12.345.678/0001-90", // CNPJ da ONG
          "Descrição da ONG", // descrição da ONG
          "", // visão da ONG
          [AreaAtuacao.EDUCACAO], // área de atuação da ONG
          "Rua Exemplo, 123", // endereço da ONG
          "senha-secreta", // senha
          "imagem.jpg" // imagem
        )
    ).toThrow("VISAO_VAZIA");
  });
  test("Deve lancar erro ao passar cnpj invalido no construtor", () => {
    const id = Id.gerarId();

    expect(
      () =>
        new Ong(
          id,
          // id da ONG (gerado, exemplo: UUID)
          "Nome da ONG", // nome da ONG
          "ong@email.com", // email da ONG
          Tipo.ONG, // tipo de usuário (ONG)
          "Missão da ONG", // missão da ONG
          "12.345.678/000", // CNPJ da ONG
          "Descrição da ONG", // descrição da ONG
          "Ver", // visão da ONG
          [AreaAtuacao.EDUCACAO], // área de atuação da ONG
          "Rua Exemplo, 123", // endereço da ONG
          "senha-secreta", // senha
          "imagem.jpg" // imagem
        )
    ).toThrow("CNPJ_INVALIDO");
  });
  test("Deve lancar erro ao alterar descricao", () => {
    const id = Id.gerarId();
    const ong =  new Ong(
        id,
        // id da ONG (gerado, exemplo: UUID)
        "Nome da ONG", // nome da ONG
        "ong@email.com", // email da ONG
        Tipo.ONG, // tipo de usuário (ONG)
        "Missão da ONG", // missão da ONG
        "12.345.678/0001-90", // CNPJ da ONG
        "Descrição da ONG", // descrição da ONG
        "Ver", // visão da ONG
        [AreaAtuacao.EDUCACAO], // área de atuação da ONG
        "Rua Exemplo, 123", // endereço da ONG
        "senha-secreta", // senha
        "imagem.jpg" // imagem
      )
     
    expect(
    
        ong.setDescricao("")
    ).toBe("DESCRICAO_VAZIA");
  });
  test("Deve lancar erro ao setar cnpj invalido ", () => {
    const id = Id.gerarId();
    const ong =  new Ong(
        id,
        // id da ONG (gerado, exemplo: UUID)
        "Nome da ONG", // nome da ONG
        "ong@email.com", // email da ONG
        Tipo.ONG, // tipo de usuário (ONG)
        "Missão da ONG", // missão da ONG
        "12.345.678/0001-90", // CNPJ da ONG
        "Descrição da ONG", // descrição da ONG
        "Ver", // visão da ONG
        [AreaAtuacao.EDUCACAO], // área de atuação da ONG
        "Rua Exemplo, 123", // endereço da ONG
        "senha-secreta", // senha
        "imagem.jpg" // imagem
      )
     
    expect(
    
        ong.setCnpj("")
    ).toBe("CNPJ_INVALIDO");
  });
  test("Deve lancar erro ao setar cnpj invalido ", () => {
    const id = Id.gerarId();
    const ong =  new Ong(
        id,
        // id da ONG (gerado, exemplo: UUID)
        "Nome da ONG", // nome da ONG
        "ong@email.com", // email da ONG
        Tipo.ONG, // tipo de usuário (ONG)
        "Missão da ONG", // missão da ONG
        "12.345.678/0001-90", // CNPJ da ONG
        "Descrição da ONG", // descrição da ONG
        "Ver", // visão da ONG
        [AreaAtuacao.EDUCACAO], // área de atuação da ONG
        "Rua Exemplo, 123", // endereço da ONG
        "senha-secreta", // senha
        "imagem.jpg" // imagem
      )
     
      ong.setCnpj("12.345.678/0001-11")
    expect(
      ong.getCnpj()
    ).toBe("12.345.678/0001-11");
  });
  test("Deve lancar erro ao setar cnpj invalido ", () => {
    const id = Id.gerarId();
    const ong =  new Ong(
        id,
        // id da ONG (gerado, exemplo: UUID)
        "Nome da ONG", // nome da ONG
        "ong@email.com", // email da ONG
        Tipo.ONG, // tipo de usuário (ONG)
        "Missão da ONG", // missão da ONG
        "12.345.678/0001-90", // CNPJ da ONG
        "Descrição da ONG", // descrição da ONG
        "Ver", // visão da ONG
        [AreaAtuacao.EDUCACAO], // área de atuação da ONG
        "Rua Exemplo, 123", // endereço da ONG
        "senha-secreta", // senha
        "imagem.jpg" // imagem
      )
     
      ong.setDescricao("Descrição da ONG muito legal")
    expect(
      ong.getDescricao()
    ).toBe("Descrição da ONG muito legal");
  });
  test("Deve setar missao ", () => {
    const id = Id.gerarId();
    const ong =  new Ong(
        id,
        // id da ONG (gerado, exemplo: UUID)
        "Nome da ONG", // nome da ONG
        "ong@email.com", // email da ONG
        Tipo.ONG, // tipo de usuário (ONG)
        "Missão da ONG", // missão da ONG
        "12.345.678/0001-90", // CNPJ da ONG
        "Descrição da ONG", // descrição da ONG
        "Ver", // visão da ONG
        [AreaAtuacao.EDUCACAO], // área de atuação da ONG
        "Rua Exemplo, 123", // endereço da ONG
        "senha-secreta", // senha
        "imagem.jpg" // imagem
      )
     
      ong.setMissao("Misao da ong")
    expect(
      ong.getMissao()
    ).toBe("Misao da ong");
  });
  test("Deve lancar erro ao setar missao invalida ", () => {
    const id = Id.gerarId();
    const ong =  new Ong(
        id,
        // id da ONG (gerado, exemplo: UUID)
        "Nome da ONG", // nome da ONG
        "ong@email.com", // email da ONG
        Tipo.ONG, // tipo de usuário (ONG)
        "Missão da ONG", // missão da ONG
        "12.345.678/0001-90", // CNPJ da ONG
        "Descrição da ONG", // descrição da ONG
        "Ver", // visão da ONG
        [AreaAtuacao.EDUCACAO], // área de atuação da ONG
        "Rua Exemplo, 123", // endereço da ONG
        "senha-secreta", // senha
        "imagem.jpg" // imagem
      )
     
      
    expect(
      ong.setMissao("")
    ).toBe("MISSAO_VAZIA");
  });
  test("Deve setar visao ", () => {
    const id = Id.gerarId();
    const ong =  new Ong(
        id,
        // id da ONG (gerado, exemplo: UUID)
        "Nome da ONG", // nome da ONG
        "ong@email.com", // email da ONG
        Tipo.ONG, // tipo de usuário (ONG)
        "Missão da ONG", // missão da ONG
        "12.345.678/0001-90", // CNPJ da ONG
        "Descrição da ONG", // descrição da ONG
        "Ver", // visão da ONG
        [AreaAtuacao.EDUCACAO], // área de atuação da ONG
        "Rua Exemplo, 123", // endereço da ONG
        "senha-secreta", // senha
        "imagem.jpg" // imagem
      )
     
      ong.setVisao("ver ong")
    expect(
      ong.getVisao()
    ).toBe("ver ong");
  });
  test("Deve lancar erro ao setar vissao invalida ", () => {
    const id = Id.gerarId();
    const ong =  new Ong(
        id,
        // id da ONG (gerado, exemplo: UUID)
        "Nome da ONG", // nome da ONG
        "ong@email.com", // email da ONG
        Tipo.ONG, // tipo de usuário (ONG)
        "Missão da ONG", // missão da ONG
        "12.345.678/0001-90", // CNPJ da ONG
        "Descrição da ONG", // descrição da ONG
        "Ver", // visão da ONG
        [AreaAtuacao.EDUCACAO], // área de atuação da ONG
        "Rua Exemplo, 123", // endereço da ONG
        "senha-secreta", // senha
        "imagem.jpg" // imagem
      )
     
      
    expect(
      ong.setVisao("")
    ).toBe("VISAO_VAZIA");
  });
  test("Deve alterar area atuação  ", () => {
    const id = Id.gerarId();
    const ong =  new Ong(
        id,
        // id da ONG (gerado, exemplo: UUID)
        "Nome da ONG", // nome da ONG
        "ong@email.com", // email da ONG
        Tipo.ONG, // tipo de usuário (ONG)
        "Missão da ONG", // missão da ONG
        "12.345.678/0001-90", // CNPJ da ONG
        "Descrição da ONG", // descrição da ONG
        "Ver", // visão da ONG
        [AreaAtuacao.EDUCACAO], // área de atuação da ONG
        "Rua Exemplo, 123", // endereço da ONG
        "senha-secreta", // senha
        "imagem.jpg" // imagem
      )
     
     
      ong.setAreaAtuacao([AreaAtuacao.CULTURA])
    expect(
        ong.getAreaAtuacao()
    ).toEqual(["CULTURA"]);
  });

  test("Deve setar endereço ", () => {
    const id = Id.gerarId();
    const ong =  new Ong(
        id,
        // id da ONG (gerado, exemplo: UUID)
        "Nome da ONG", // nome da ONG
        "ong@email.com", // email da ONG
        Tipo.ONG, // tipo de usuário (ONG)
        "Missão da ONG", // missão da ONG
        "12.345.678/0001-90", // CNPJ da ONG
        "Descrição da ONG", // descrição da ONG
        "Ver", // visão da ONG
        [AreaAtuacao.EDUCACAO], // área de atuação da ONG
        "Rua Exemplo, 123", // endereço da ONG
        "senha-secreta", // senha
        "imagem.jpg" // imagem
      )
     
      ong.setEndereco("Rua Exemplo, 12345")
    expect(
      ong.getEndereco()
    ).toBe("Rua Exemplo, 12345");
  });
  test("Deve lancar erro ao setar endereço invalida ", () => {
    const id = Id.gerarId();
    const ong =  new Ong(
        id,
        // id da ONG (gerado, exemplo: UUID)
        "Nome da ONG", // nome da ONG
        "ong@email.com", // email da ONG
        Tipo.ONG, // tipo de usuário (ONG)
        "Missão da ONG", // missão da ONG
        "12.345.678/0001-90", // CNPJ da ONG
        "Descrição da ONG", // descrição da ONG
        "Ver", // visão da ONG
        [AreaAtuacao.EDUCACAO], // área de atuação da ONG
        "Rua Exemplo, 123", // endereço da ONG
        "senha-secreta", // senha
        "imagem.jpg" // imagem
      )
     
      
    expect(
      ong.setEndereco("")
    ).toBe("ENDERECO_VAZIO");
  });
});
