# Typescript

## Instalações

     npm install -D typescript

     npm install -D sucrase

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