async function Api<T>(): Promise<T> {
  const url: string = 'https://ghibliapi.herokuapp.com/films';

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export default Api;
