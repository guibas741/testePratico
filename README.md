<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Este projeto faz parte de uma prova técnica com o objetivo de comprovar habilidades técnicas com desenvolvimento móvel utilizando React Native. O projeto utiliza o padrão Ducks, foi desenvolvido no Sistema Operacional Linux, utilizando como teste o emulador Android Genymotion.

### Feito Com

Abaixo segue o que foi utilizado no desenvolvimento deste projeto:

- [React Navigation](https://reactnavigation.org/) - Biblioteca para navegação entre telas do React Native;
- [Axios](https://github.com/axios/axios) - O Axios é um cliente HTTP baseado em Promises para Browser e NodeJS;
- [Prop Types](https://github.com/facebook/prop-types) - Biblioteca para verificação de propriedades de componentes React;
- [Redux](https://github.com/reduxjs/redux) - Biblioteca para controle de estado;
- [React Redux](https://github.com/reduxjs/react-redux) - Biblioteca para controle de estado;
- [React Native Document Picker](https://github.com/Elyx0/react-native-document-picker) - Biblioteca para selecionar arquivos em aplicações React Native;
- [Native Base](https://github.com/GeekyAnts/NativeBase) - Biblioteca de componentes estilizados;
- [Jest](https://github.com/facebook/jest) - Framework para testes em Javascript;
<!-- GETTING STARTED -->

### Estrutura de Arquivos

Estrutura de pastas e arquivos do projeto:

```bash
├── src/
│   ├── components/
│   │   └── common/
│   │   └── lawsuit/
│   │   └── index.js
│   ├── ducks/
│   │   ├── modules/
│   │   └── store.js
│   ├── screens/
│   ├── services/
│   │   └── api.js
│   ├── utils/
│   ├── App.js
│   └── routes.js
├── .eslintrc.json
├── .gitignore
├── index.js
├── package.json
└── README.md
```

### Build
```bash
$ npm install
$ react-native run-ios
ou
$ react-native run-android
```