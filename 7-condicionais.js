console.log(`lista de condicionais`)
const listaDeDestinos = new Array(
      `salvador`,
      `São Paulo`,
      `Rio de Janeiro`,
      `Curitiba`
)
const idadeComprador = 15;
console.log("destinos possiveis:");
console.log(listaDeDestinos);

if(idadeComprador >= 18){
    console.log("maior de idade");
    listaDeDestinos.splice(1,1);///removendo meu intem
}
else{
console.log("Não é maior de idade");
}
console.log(listaDeDestinos);
