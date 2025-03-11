

export default interface UsuarioRepo {
    buscarPorEmail(email: string): any
    buscarPorId(id: string): Promise<any> 
    editarFoto(id: string, novaImagem: string): Promise<any>
    // excluir(id: string): Promise<boolean>
    // registrar(entidade: any): Promise<any>
    // atualizar(id: string, dados: Partial<any>): Promise<any>
    // buscarTodos():any
}