# Typescript

## Instalações

     npm install -D typescript sucrase

## Criando tsconfig

     npx tsc --init

### Configurações do tsconfig

* **Target:** versão do js que o código em typecript será transcrevido;

* **rootDir:** pasta onde ficará os arquivos typecript;

* **outDir:** pasta onde ficará a pasta de distribuição;

* **sourceMap:** deixe como true, é importante para deputar;

## Configurando o sucrase

No arquivo *package.json* de sua aplicação, no objeto script, adicione uma linha com:

     "dev": "sucrase-node caminho_do_seu_index.ts"

## Buildar código de distribuição

     npx tsc

## Configurando para depurar

     {
          "version": "0.2.0",
          "configurations": [
               {
                    "type": "node",
                    "request": "launch",
                    "name": "Iniciar o Programa",
                    "skipFiles": [
                         "<node_internals>/**"
                    ],
                    "program": "${workspaceFolder}/src/caminho_para_index.ts",
                    "preLaunchTask": "tsc: build - tsconfig.json",
                    "outFiles": [ "${workspaceFolder}/**/*.js" ]
               }
          ]
     }

## Tipo de dados

### Declarando tipos básicos

Há dois príncipais tipos em ts: *number*, *string*, *boolean*  

`let n : number = 10;`  
`let s : string = 'Hello World;`  
`let b : boolean = true;`
`let arrayString: string[] = ['joao', 'carlos'];`  
`let arrayNumber: number[] = [1, 2, 3, 5];`  
`let arrayBool: boolean[] = [true, false, true];`

### Declarando outros tipos

* Há tipos que não estão presentes não ts, como Date: `let data = <Date> new Date();`

* **Any** é usado para desativar a verificação de tipos por meio do ts, assim uma variável pode ter diversos tipos: `let val : any = 10; val = 'joao';`

* Você pode criar um tipo de dados: `type statusJanela = 'aberta' | 'fechada' | 'minimizada'; let janela: statusJanela = 'aberta';`

### Uniões de tipos

* É quando uma variável pode receber dois ou mais tipos: `let a: number : string = 10; a = 'oi';`

## Tipo genérico

* Ele pode descrever os valores que um array contém

`// vamos criar um tipo de arr de strings`  
`type StringArr = Array<string>;`

`// vamos criar um tipo de arr de number`  
`type NumberArr = Array<number>;`

`// arr com um objeto que tem uma propriedade chamada name que é uma string`  
`type ObjectWithNameArray = Array<{ name: string }>`  

`let arrNumber:NumberArray = [1, 2, 3, 4, 5];`

## Interface

É uma maneira de criar uma interface padrão de tipo, é usado mais em obj

`interface Usuario { nome: string; id: number };`  
`const usuario: Usuario = {nome: 'joao', id: 0};`

### Usando interface em classes

Vamos usar a interface Usuario declarada no exemplo anterior:

     class UsuarioConta {
          nome: string;
          id: number;

          constructor(nome: string, id: number) {
               this.nome = nome;
               this.id = id;
          }
     }

     const user: Usuario = new UsuarioConta('Maria', 1);
     console.log(user);

## Fontes

* [typescriptlang](https://www.typescriptlang.org/docs/)
* [3 maneiras de executar e debugar TypeScript com o VS Code
](https://youtu.be/c2uGWy4Hn24)
