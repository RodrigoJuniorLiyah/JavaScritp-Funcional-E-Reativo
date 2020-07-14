function esperarPor(tempo = 2000) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), tempo);
  });
}

function melhorAnime(cantoras) {
  cantoras = ["Lisa", "Aimer", "Lindsey Stirling", "Hiroyuki Sawano"];
  return cantoras;
}

async function executar() {
  let valor = melhorAnime();

  await esperarPor(1500);
  console.log(`Os melhores cantores/compositores`);

  await esperarPor(1500);
  console.log(`Melhor cantora: ${valor[0]}_1`);

  await esperarPor(1500);
  console.log(`Menção honrosa: ${valor[1]}_2`);

  await esperarPor(1500);
  console.log(`Melhor artista: ${valor[2]}_3`);

  await esperarPor(1500);
  console.log(`Melhor compositor: ${valor[3]}_4`);

  return (valor = "Obrigado, até mais!");
}

async function executarDeVerdade() {
  const valor = await executar();
  console.log(valor);
}

executarDeVerdade();
