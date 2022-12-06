// uniões - vc pode declarar que um tipo pode ser um de muitos
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";


// essa função pode receber uma string ou arry de strings
function getLength(obj: string | string[]) {
  return obj.length;
}

console.log(getLength("abc"));
console.log(getLength(["abc", "def"]));

function trueOrFalse(val: MyBool) {
  return val;
}

console.log(trueOrFalse(true));


// genéricos

// ele pode descrecer os valores que um array contém

type StringArray = Array<string>; // arr de string
type NumberArray = Array<number>; // arr de number
// arr com um objeto que tem uma propriedade chamada name que é uma string
type ObjectWithNameArray = Array<{ name: string }>;

let arrNumber:NumberArray = [1, 2, 3, 4, 5];
console.log(arrNumber);


// sistemas de tipo estruturais
interface Ponto {
     x: number;
     y: number;
};

function exibirPonto(ponto: Ponto) {
     console.log(ponto.x, ponto.y);
}

exibirPonto({ x: 1, y: 2 });


// any - ele desabilita o sistema de tipo do typescript

// fazendo os códigos não darem erro ao serem transpilados
let obj: any = { x: 0 };
//obj.foo();
//obj(); 
obj = 'abc';

// funções - propriedade opcional
function printName(obj: {first: string, last?: string}) {
  console.log(obj.first, obj.last ? obj.last : '');
}

printName({first: 'John'});
printName({first: 'John', last: 'Doe'});


// há tipos que não estão disponiveis no typescript
// para isso usamos a asserção de tipo
const data = <Date> new Date();
console.log(data);


// expressões de tipo de função
// uma função com parametro que não tem retorno
function greeter(fn: (a: string) => void) {
  // ele vai chamar a função que foi passada como parametro
}

greeter((s) => console.log(s));
