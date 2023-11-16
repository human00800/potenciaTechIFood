var nomeHeroi = "Batman";
var xp = 5000;
var nivelHeroi;
if (xp < 1000) {
    console.log(nome + " é Ferro");
  } else if (xp >= 1000 && xp <= 2000) {
    console.log(nome + " é Bronze");
  } else if (xp >= 2001 && xp <= 5000) {
    console.log(nome + " é Prata");
  } else if (xp >= 6001 && xp <= 7000) {
    console.log(nome + " é Ouro");
  } else if (xp >= 7001 && xp <= 8000) {
    console.log(nome + " é Platina");
  } else if (xp >= 8001 && xp <= 9000) {
    console.log(nome + " é Ascendente");
  } else if (xp >= 9001 && xp <= 10000) {
    console.log(nome + " é Imortal");
  } else if (xp >= 10001) {
    console.log(nome + " é Radiante");
  }

  console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivelHeroi);