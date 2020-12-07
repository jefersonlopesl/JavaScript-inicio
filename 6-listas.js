console.log(`trabanhando com listas`);
//const salvador = ``;
//const saoPaulo = ``;
//const rioDeJaneiro = ``;

const listaDeDestinos = new Array(
      `salvador`,
      `São Paulo`,
      `Rio de Janeiro`,
      `Curitiba`
)

listaDeDestinos.push(`Paraiba`)
console.log("destinos possiveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos)

listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]);
