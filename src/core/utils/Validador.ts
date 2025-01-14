

export default class Validador {
  static naoNulo(valor: any, erro: string): string | null {
    return valor !== null && valor !== undefined ? null : erro;
  }
  static isEmailValido(email: string): boolean {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    return regex.test(email);
  }
  static naoVazia(valor: string | null | undefined, erro: string) {
    if (Validador.naoNulo(valor, erro)) return erro;
    return valor!.trim() !== "" ? null : erro;
  }
  static combinar(...erros: (string | null)[]): string[] | null {
    const errosFiltrados = erros.filter((e) => e !== null) as string[];
    return errosFiltrados.length > 0 ? errosFiltrados : null;
  }
  static arrayInvalido(
    arr: (string | null | undefined)[],
    erro: string
  ): string | null  {
    
    if (!arr || arr.length === 0 ) {
      return erro;
    } 
     
    const validarItemArray = arr.some((item) => item === null || item ===undefined || item === "" || item === " ")
      if(validarItemArray){
        return erro
      }
      return null;
    }

    static validarCnpj(cnpj:string, erro:string): string | null{
      const regex: RegExp = /^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/;
      const res = regex.test(cnpj)
      if(res === false){
        return erro
      }
      return null
    }
   static validarLatitude(latitude: number): boolean {
    return latitude >= -90 && latitude <= 90;
  }

  static validarLongitude(longitude: number): boolean {
    return longitude >= -180 && longitude <= 180;
  }

  static validarCoordenadas(latitude: number, longitude: number, erro:string): string | null{
    return this.validarLatitude(latitude) && this.validarLongitude(longitude)? null : erro;
  }
   
}
