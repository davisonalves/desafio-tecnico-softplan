import * as POSTCriar from '../requests/spacex_api/POSTCriar'
import * as POSTConsultar from '../requests/spacex_api/POSTConsultar'
import * as POSTDeletar from '../requests/spacex_api/POSTDeletar'
import * as POSTAtualizar from '../requests/spacex_api/POSTAtualizar'

describe('CRUD Usuarios', () => {


    it('Cria usuário com sucesso', () => {
        POSTCriar.criarUsuario('Davison').should((response => {
            expect(response.status).to.eq(200);
            expect(response.body.data.insert_users.returning[0].name).to.eq('Davison');
        }));
    });
    it('Consulta todos os usuários', () => {
        POSTCriar.criarUsuario('Davison')
        POSTConsultar.consultaUsuarios().should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null;
        });       
    });

    it('Deleta um usuário', () => {
        POSTCriar.criarUsuario('Davison Apagado').then((response) => {
            var idDeletar = response.body.data.insert_users.returning[0].id;
            POSTDeletar.deletarUsuario(idDeletar).should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.data.delete_users.returning[0].id).to.eq(idDeletar);
            });
        });
    });
    it('Atualiza um usuário', () => {
        POSTCriar.criarUsuario('Davison Atualizado').then((response) => {
            var idAtualizar = response.body.data.insert_users.returning[0].id;
            cy.log(response.body.data.insert_users.returning[0].id);
            POSTAtualizar.atualizarUsuario(idAtualizar, 'Novo Nome').should((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.data.update_users.returning[0].id).to.eq(idAtualizar);
                expect(response.body.data.update_users.returning[0].name).to.eq('Novo Nome');
            });
        });
    });    
});