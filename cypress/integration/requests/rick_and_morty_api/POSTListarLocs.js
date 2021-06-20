/// <reference types = "cypress"/>

function listarLocalizacoes(){
    var listLocations = `
    query{
        locations{
          results{
            id
            name
          }
        }
      }
    `
    return cy.request({
        method: 'POST',
        url: 'https://rickandmortyapi.com/graphql',
        body: {
            query: listLocations
        },
        failOnStatusCode: false,
    });
};

function listarLocalizacao(nomeLocalizacao){
    var listLocation = `
    query{
        locations(
          filter: {
            name: "${nomeLocalizacao}"
          }
        ){
          results{
            id
            name
          }
        }
    }
    `
    return cy.request({
        method: 'POST',
        url: 'https://rickandmortyapi.com/graphql/',
        body: {
            query: listLocation
        },
        failOnStatusCode: false,
    });
};

export { listarLocalizacoes, listarLocalizacao }