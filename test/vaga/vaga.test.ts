import Vaga from "../../src/core/model/vaga/Vaga"; // Ajuste o caminho conforme a estrutura do projeto
import Status from "../../src/@types/Status";
import TipoTrabalho from "../../src/@types/TipoTrabalho";
import Erros from "../../src/core/constants/Erros";

describe("Classe Vaga", () => {
  let vaga: Vaga;

  beforeEach(() => {
    vaga = new Vaga(
      "1",
      "Descrição válida",
      ["Requisito 1", "Requisito 2"],
      Status.ABERTO,
      "40 horas",
      "São Paulo",
      TipoTrabalho.REMOTO,
      -23.55052,
      -46.633308
    );
  });

  test("deve criar uma instância válida da classe Vaga", () => {
    expect(vaga).toBeInstanceOf(Vaga);
    expect(vaga.getDescricao()).toBe("Descrição válida");
    expect(vaga.getRequisitos()).toEqual(["Requisito 1", "Requisito 2"]);
    expect(vaga.getStatus()).toBe(Status.ABERTO);
    expect(vaga.getDuracao()).toBe("40 horas");
    expect(vaga.getLocalizacao()).toBe("São Paulo");
    expect(vaga.getTipoTrabalho()).toBe(TipoTrabalho.REMOTO);
    expect(vaga.getLatitude()).toBe(-23.55052);
    expect(vaga.getLongitude()).toBe(-46.633308);
  });

  test("deve lançar um erro se os valores passados para o construtor forem inválidos", () => {
    expect(() => {
      new Vaga(
        "1",
        "",
        ["Requisito 1", ""],
        Status.ABERTO,
        "",
        "",
        TipoTrabalho.REMOTO,
        -200,
        200
      );
    }).toThrow(
      `${Erros.DESCRICAO_INVALIDA}, ${Erros.REQUISITOS_INVALIDOS}, ${Erros.DURACAO_INVALIDA}, ${Erros.LOCALIZACAO_INVALIDA}, ${Erros.CORDENADAS_INVALIDAS}`
    );
  });
  
  test("deve alterar os atributos com os métodos set e retornar com os métodos get", () => {
    vaga.setDescricao("Nova descrição");
    expect(vaga.getDescricao()).toBe("Nova descrição");

    vaga.setRequisitos(["Novo requisito 1", "Novo requisito 2"]);
    expect(vaga.getRequisitos()).toEqual(["Novo requisito 1", "Novo requisito 2"]);

    vaga.setStatus(Status.ENCERRADO);
    expect(vaga.getStatus()).toBe(Status.ENCERRADO);

    vaga.setDuracao("30 horas");
    expect(vaga.getDuracao()).toBe("30 horas");

    vaga.setLocalizacao("Rio de Janeiro");
    expect(vaga.getLocalizacao()).toBe("Rio de Janeiro");

    vaga.setTipoTrabalho(TipoTrabalho.PRESENCIAL);
    expect(vaga.getTipoTrabalho()).toBe(TipoTrabalho.PRESENCIAL);

    vaga.setLatitude(-22.906847);
    expect(vaga.getLatitude()).toBe(-22.906847);

    vaga.setLongitude(-43.172896);
    expect(vaga.getLongitude()).toBe(-43.172896);
    expect(vaga.getId()).toBe("1")
  });

  test("deve lançar um erro ao usar métodos set com valores inválidos", () => {
    expect(() => vaga.setDescricao("")).toThrow(Erros.DESCRICAO_INVALIDA);

    expect(() =>
      vaga.setRequisitos(["Requisito válido", ""])
    ).toThrow(Erros.REQUISITOS_INVALIDOS);

    

    expect(() => vaga.setDuracao("")).toThrow(Erros.DURACAO_INVALIDA);

    expect(() => vaga.setLocalizacao("")).toThrow(Erros.LOCALIZACAO_INVALIDA);

    expect(() => vaga.setLatitude(-200)).toThrow(Erros.LATITUDE_INVALIDA);

    expect(() => vaga.setLongitude(200)).toThrow(Erros.LONGITUDE_INVALIDA);
  });

  
});
