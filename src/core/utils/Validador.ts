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
  static arrayInvalido(arr:(string | null | undefined)[], erro:string): string | null{
     if(arr.length === 0 || null || undefined){
       return erro
     }
     return null

  }
}
