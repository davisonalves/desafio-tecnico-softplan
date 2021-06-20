/// <reference types = "cypress"/>

function consultaUsuarios() {
    var consultaUsers = `
    {
        users {
          name
        }
    }
    `
    return cy.request({
        method: 'POST',
        url: 'https://api.spacex.land/graphql/',
        body: {
            query: consultaUsers
        },
        failOnStatusCode: false,
    });
};
function consultaUsuario(idUsuario) {
    var consultaUser = `
    {
        users(where: {id: {_eq: ${idUsuario} }}) {
          id
        }
    }
    `
    return cy.request({
        method: 'POST',
        url: 'https://api.spacex.land/graphql/',
        body: {
            query: consultaUser
        },
        failOnStatusCode: false,
    });
};
export { consultaUsuarios, consultaUsuario }