/// <reference types = "cypress"/>

function listaEpisodios(){
    var listEpisodes = `
    query{
        episodes(
            page: 1 
        )
        {
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
            query: listEpisodes
        },
        failOnStatusCode: false,
    });
};

function listaEpisodio(nomeEpisodio){
    var listEpisode = `
    query{
        episodes(
          filter: {
            name: "${nomeEpisodio}"
          }
        ){
          results{
            name
          }
        }
    }
    `

    return cy.request({
        method: 'POST',
        url: 'https://rickandmortyapi.com/graphql/',
        body: {
            query: listEpisode
        },
        failOnStatusCode: false,
    });
};

export {listaEpisodios, listaEpisodio}