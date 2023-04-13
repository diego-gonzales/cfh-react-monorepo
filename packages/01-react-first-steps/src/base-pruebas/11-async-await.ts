export const getImagen = async () => {
  try {
    const apiKey = 'zsSARSb3Azb6j1l1MTrML5TgbYmezBvd';

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );

    const { data } = await resp.json();
    const { url } = data.images.original;

    return url;
  } catch (error) {
    return 'No existe la imagen';
  }
};
