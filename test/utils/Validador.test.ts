import Validador from '../../src/core/utils/Validador'

test("deve retornar null com texto nao nulo", () => {
    const erro = Validador.naoNulo('bom dia', 'texto invalido')
    expect(erro).toBeNull()
})
test("deve retornar erro com texto nulo", () => {
    const msgErro = 'texto invalido'
    const erro = Validador.naoNulo(null, msgErro)
    expect(erro).toBe(msgErro)
})

test("Deve retornar false ", () => {
const email = Validador.isEmailValido('adeiltonemail/.com')
expect(email).toBeFalsy()
})
test("Deve retornar true", () => {
const email = Validador.isEmailValido('adeilton@email.com')
expect(email).toBeTruthy()
})