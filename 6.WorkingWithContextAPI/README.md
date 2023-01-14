<h1 align="center">
    <img alt="ContextAPI" title="#ContextAPI" src=".images/header.png" width="100%" />
</h1>

<h4 align="center"> 
	AluraCommerce
</h4>

<p align="center">
  <a href="#information_source-o-que-é-o-ficando-online">O que é o AluraCommerce?</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-como-usar">Como usar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## :information_source: O que é o AluraCommerce?

O AluraCommerce é uma aplicação feita em React Native que simula um e-commerce. A ideia é usar o Context API, do react, para ver a vantagem de se ter estados globais na aplicação. Também é usado o AsyncStorage e uma Web API para ter a persistência dos dados.

Esse projeto é utilizado na formação base de React Native da plataforma da Alura.


<h1 align="center">
    <img alt="Demonstracao" title="Demonstracao" src=".images/demo.gif" width="400px" />
</h1>


## :rocket: Tecnologias

Esse projeto foi desenvolvido com a utilização das seguintes tecnologias:
- [React Native][rn]
- [Expo][expo]

## :information_source: Como usar

```bash
# Instale as dependências
$ npm install
```

### Executar o Mobile

```bash
# Executar projeto com expo
$ expo start
```

```bash
# É necessário executar o json-server com o ip da máquina para que o emulador tenha acesso
$ expo start
$ json-server --watch db.json --host 192.XXX.XX.X
```


[nodejs]: https://nodejs.org/
[expo]: https://docs.expo.dev/
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
