const fetchApi = async () => {
  try {
    const urlApi = 'https://swapi-trybe.herokuapp.com/api/planets/';
    const responde = await fetch(urlApi);
    const { results } = await responde.json();
    return results;
  } catch (err) {
    console.log(err);
  }
};

export default fetchApi;
