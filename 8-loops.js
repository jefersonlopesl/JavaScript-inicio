console.log(`\n trabanhando com condicionais`)
const listaDeDestinos = new Array(
      `salvador`,
      `São Paulo`,
      `Rio de Janeiro`,
      `Curitiba`
);
const idadeComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Paraiba";

console.log("\n destinos possiveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador < 3){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break;
    }
    i +=1;
}

console.log("destino existe", destinoExiste)

if (podeComprar && destinoExiste) {
    console.log("Boa viagem")
}else{
    console.log("Desculpe, teve um erro...")
}

for(let i = 0; i < 3; i ++){
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
    }
}
