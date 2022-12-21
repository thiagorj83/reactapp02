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

  Para este projeto, desenvolvido no Windows 11, foi necessário visitar a página **https://reactnavigation.org/docs/getting-started/** onde há a descrição de como instalar e utilizar a biblioteca **react-navigation**, necessária para criar o menu de navegação do aplicativo.
  
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

## Classe **PalindromeChecker**

A classe **PalindromeChecker** possui uma única função chamada **"isPalindrome** que recebe uma string e analise se há ou não a ocorrência de palíndromo.

    class PalindromeChecker {
        isPalindrome(text) {

            let original_text_strings = text.normalize('NFD').replace(/[\u0300-\u036f]/g, "").match(/[a-zA-Z]+/g).join('').toLowerCase()
            let reversed_text_strings = original_text_strings.split('').reverse().join('')
            if (original_text_strings === reversed_text_strings) {
                alert('\"' + `${text}` + '\"' + ' é um palíndromo!')
            } else {
                alert('\"' + `${text}` + '\"' + ' não é um palíndromo!')
            }

        }

    }
    
Na construção da função **isPalindrome** utilizei quatro funções pré-definidas do javascript:
* normalize()
* replace()
* match()
* join()
* toLowerCase()

A variável ***"text"*** contém o texto inserido pelo usuário. Ele pode ser uma palavra ou uma frase, contendo ou não sinais gráficos como traços, vírgulos, ou ponto final., entre outros.

Para explicar a utilidade de cada função pré-definida, a frase **Aí, Lima falou: “Olá, família!”** será utilizada.

text='Aí, Lima falou: “Olá, família!”'



A função pré-definida **normalize('NFD')** transforma os caracteres para o formato padrão UNICODE, o que torna possível remover os acentos que forem encontrados através da função **replace(/[\u0300-\u036f]/g, "")**, como acento agudo, circunflexo, crase ou til, entre outros,inclusive a cedilha('ç').

Neste caso, console.log(texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "")) exibiria a seguinte transformação na string original:
* Ai, Lima falou: “Ola, familia!”

A função pré-definida **match(/[a-zA-Z]+/g)** extrai, através de uma expressão regular, apenas as letras da string.
Juntando a função **match** com as duas anteriores, temos:

* ['Ai', 'Lima', 'falou', 'Ola', 'familia']

Por fim, as funções **join('')** e toLowerCase() efetuam,respectivamente, a junção de todas as strings presentes na array criada e as convertem para caracteres 
minúsculos, se for o caso. Esse resultado é salvo na variável **original_text_strings**:
* original_text_strings = ailimafalouolafamilia

O algoritmos efetua a inversão da string obtida e a salva na variável **reversed_text_strings** .
A função pré-definida split('') efetua a separação da string em caracteres.
Já a reverse(), inverte o array de caracteres.
Por fim, a função join('') efetua a junção dos caracteres em uma única string.

* reversed_text_strings = original_text_strings.split('').reverse().join('')
* reversed_text_strings = ailimafalouolafamilia

O algoritmo define que há um palíndromo quando **original_text_strings** é igual a **reversed_text_strings**.
Neste caso, ailimafalouolafamilia é igual ailimafalouolafamilia.
Neste caso, a frase **Aí, Lima falou: “Olá, família!”** é um palíndromo!





 
