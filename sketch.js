//indices         0           1           2
var jogos = ["minecraft","roblox","fortinite"];
console.log(jogos)

//para inserir novos elementos no final do array
jogos.push("Dark Souls");
console.log(jogos)
console.log(jogos.length)

//para remover o ultimo elemento usamos pop
jogos.pop()
console.log(jogos)

//removendo elementos específicos
jogos.splice(1,1)
console.log(jogos);

delete jogos[1]
console.log(jogos);

function setup() {
  createCanvas(400, 400);

}

function draw() {
  background("#1fcc92");

  drawSprites();
}

