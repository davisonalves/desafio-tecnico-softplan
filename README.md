# Repositório referente ao desafio técnico para vaga de QA da Softplan

## Considerações durante o desenvolvimento do desafio

A primeira parte do desafio teve foco na automação e teste da API "[Spacex](https://api.spacex.land/graphql/)", nessa API fiz a automatização do CRUD no endpoint de usuários, validei coisas como: Status http e campos esperados na response. Na segunda questão a API testada foi a "[Rick and Morty](https://rickandmortyapi.com/graphql)" e nessa eu validei os endpoints de localizações e de episódios, observei que quando a request era pra listar todos ela trazia sempre 20 itens por lista, então assumindo isso como regra de negócio verifiquei o tamanho da lista que recebia na response, e quando a query possuia um filtro por "name" eu validei se o atributo "name" da response era o mesmo que passei na query. A terceira questão do desafio foi uma automação na camada de interface da aplicação "[Todo List](https://todomvc.com/examples/typescript-react/#/completed)" onde realizei a validação da inserção de um item na lista, a conclusão de uma tarefa da lista, a exclusão de um item e o funcionamento correto dos filtros "Acitve", "All" e "Completed". E pra finalizar a última questão era pra implementar a integração CI/CD, eu resolvi fazer com GitHub actions e configurei para que toda push na main os testes fossem executados, no caso de falha em algum teste ele me alerta por e-mail :D

### Vale ressaltar 2 coisas
1. Essa foi minha primeira experiência com testes de API graphql usando cypress
2. E também meu primeiro contato com integração CI/CD, foi um processo bem legal estudar e implementá-la com o GitHub Actions :)

Dito isso estou aberto para receber qualquer feedback seja positivo ou crítica construtiva sobre o que desenvolvi 

## SETUP 🖥️
### Antes de rodar os comandos é importante que você já tenha instalado
- [git ](https://git-scm.com/)
- [node](https://nodejs.org/en/)
- [allure](https://docs.qameta.io/allure/#_commandline) e [Java](https://www.java.com/pt-BR/) caso deseje executar os reports
### Clonando o  projeto
- digite em seu terminal o comando  `git clone https://github.com/davisonalves/desafio-tecnico-softplan.git`
### Instalando dependencias
- digite em seu terminal o comando `npm install`
### Rodando os testes
- digite em seu terminal o comando `npm test`
### Se você quiser pode rodar também os comandos abaixo para vizualizar o reporte do allure
**OBS:** Lembrando que aqui você precisa do allure e do java instalados ai na sua máquina beleza
- `npm run cy:run` pra rodar os testes com o allure junto
- `npm run allure:generate` pra salvar os arquivos na pasta "allure-results"
- `npm run allure:open` pra abrir o allure no seu browser com o reporte feito

## Imagens do Allure Reports
![image](https://user-images.githubusercontent.com/53572219/122690796-7f6f6200-d1f9-11eb-8e39-24330136e8d3.png)
![image](https://user-images.githubusercontent.com/53572219/122690818-a3cb3e80-d1f9-11eb-9fa2-a4893c678545.png)
## Imagens do GitHub Actions
![image](https://user-images.githubusercontent.com/53572219/122690864-ec82f780-d1f9-11eb-97dc-112ee421eb76.png)
![image](https://user-images.githubusercontent.com/53572219/122690881-0fada700-d1fa-11eb-9343-a1ad7ee29e13.png)
