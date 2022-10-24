const request = require('supertest');

describe("Get Usuarios", () => {

    test('Exibir todos os usuários existentes', async () => {
        return await request('http://localhost:4444/')
        .get('usuarios/')
        .then((res: any) => {})
    });

    test('Exibir um usuario específico pelo id', async () => {
        return await request('http://localhost:4444/')
            .get('usuarios/2')
            .then((res: any) => {})
    });
});

/*describe("GET/ SWAPI People", () => {
    test("Select in people 1", async () => {
        return await request('https://swapi.dev/api/').get('people/1/')
					.then((res: any) => {})
    });
    test("Verify if camp is type correct In Swapi People 1", async () => {
        return await request('https://swapi.dev/api/').get('people/1/')
					.then((res: any) => {})
     });
});;*/