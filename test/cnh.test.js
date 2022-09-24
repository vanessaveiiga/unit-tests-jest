const { obterCnh } = require("../src/cnh");

test("Obter CNH", async () => {
    expect(obterCnh(18)).toBeTruthy();
});

test("Não obter CNH", async () => {
    expect(obterCnh(17)).toBeFalsy();
});
