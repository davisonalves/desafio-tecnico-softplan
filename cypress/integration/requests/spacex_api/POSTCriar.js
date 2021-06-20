/// <reference types = "cypress"/>

function criarUsuario(nomeUsuario) {
    var criarUser = `
    mutation {
        insert_users(objects: {name: "${nomeUsuario}"}) {
          returning {
            id
            name
            }
        }
    }
    `
    return cy.request({
        method: 'POST',
        url: 'https://api.spacex.land/graphql/',
        body: {
            query: criarUser,
        },
        failOnStatusCode: false,
    });
};
export { criarUsuario }