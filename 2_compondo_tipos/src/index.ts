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