const getPersonajes = async () => {
  const { data } = await axios.get(
    "https://rickandmortyapi.com/api/character/"
  );
  const results = data.results;
  return results;
};

getPersonajes().then((personajes) => {
  console.log(personajes);
  let personajeCard = [];
  for (let i = 0; i < personajes.length; i++) {
    const personaje = new Personaje(
      personajes[i].name,
      personajes[i].species,
      personajes[i].image
    );
    console.log(personaje.card);
    personajeCard.push(personaje.card);
  }
  personajeCard = personajeCard.join("");
  document.getElementById("cards").innerHTML = personajeCard;
});
