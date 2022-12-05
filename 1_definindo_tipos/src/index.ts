// variável do tipo numbeer
const a:number = 1;
console.log(a);

// criaremos uma inferface usuário com seus tipos
interface Usuario {
     nome: string;
     id: number;
}

// vamos criar uma uma costante usuário com as configurações da interface
const usuario: Usuario = {
     nome: 'Diego',
     id: 0
}

console.log(usuario);

// o ts aceita programação POO
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


// função
// vai receber como parametro usuario do tipo Usuario
function setUsuario(usuario: Usuario): Usuario {
     return usuario; // retorna um valor do tipo Usuario
}

console.log(setUsuario(usuario))