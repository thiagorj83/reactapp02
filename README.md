# reactapp02

Este é um aplicativo simples criado em React Native que visa demonstrar o que é um palíndromo 
praticar a criação de telas utilizando as bibliotecas
***React Navigation*** e ***React Native Gesture Handler*** que criam menus laterais e permitem a interação do usuário via movimento de arrastar a tela.

#### Pré-requisitos
•	react-native >= 0.63.0.

## Introdução

  Um palíndromo é uma palavra ou frase que tem a mesma sequência de letras em qualquer ordem de leitura, seja da esquerda para a direita, seja da direita para a esquerda. Como as palavras “ovo” e “sopapos”, por exemplo. Acentos, cedilhas e pontuações não são considerados para a inversão da leitura.Também há palíndromos numéricos – qualquer sequência lida igual nos dois sentidos. O dia 20/02/2002 foi uma data palíndromo que só acontece a cada mil anos. 
O palíndromo mais antigo do mundo é a frase em latim “Sator arepo tenet opera rotas”, que você confere na ilustração acima. 

* Fonte: **https://super.abril.com.br/mundo-estranho/o-que-e-um-palindromo/**
  

## Instalação

  Para este projeto, desenvolvido no Windows 11, foi necessário visitar a página **https://reactnavigation.org/docs/getting-started/** onde há a descrição de como instalar e utilizar a biblioteca react-navigation, necessária para criar o menu de navegação do aplicativo.
  
  Para exemplificar a criação da pasta de projeto, utilizarei o nome **“app-react-native”**.
No prompt de comando ou no **Windows powershell**, digite:

* C:\> react-native init app-react-native    

  Com este comando, a pasta do projeto será criada com a maior parte dos arquivos necessário ao desenvolvimento do aplicativo.
Após isso, é necessário instalar os pacotes requeridos no projeto, via ***NPM*** ou ***YARN***, conforme indicado pela página **React Navigation**.       

* C:\> **npm install @react-navigation/native **    

  Após isso, instale também:         

* C:\> **npm install react-native-gesture-handler react-native-reanimated**

Para finalizar, adicione o seguinte ***import*** no topo dos imports, como o **primeiro** arquivo a ser importado em **app.js** e **index.js**. Certifique-se de que nenhum arquivo seja importado antes.   

* import 'react-native-gesture-handler';     

          

 
