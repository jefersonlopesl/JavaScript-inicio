console.log(`lista de condicionais`)
const listaDeDestinos = new Array(
      `salvador`,
      `São Paulo`,
      `Rio de Janeiro`,
      `Curitiba`
)
const idadeComprador = 17;
const estaAcompanhada = false;
conts temPassagemComprada = true;

console.log("destinos possiveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("maior de idade");
    listaDeDestinos.splice(1,1);///removendo meu intem
}
else{
//a pessoa é menos de idadeComprador
  if (estaAcompanhada){
    console.log("menor está acompanhado");
    listaDeDestinos.splice(1,1);///removendo meu intem
  } else {
      console.log("Não é maior de idade e não posso vender")
  }
}
console.log(listaDeDestinos);
