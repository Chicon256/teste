console.log("Ola mundo!")


fetch('https://www.google.com.br/')
  .then((response) => {
    if (response.ok) {
      console.log('Status code 200: OK');
    } else {
      console.error('Erro ao buscar a página:', response.status);
    }
  })
  .catch((error) => {
    console.error('Erro ao buscar a página:', error);
  });