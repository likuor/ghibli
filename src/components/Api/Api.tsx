import { useState, useEffect } from 'react';

const Api = () => {
  const [films, setFilms] = useState<any[]>([]);
  const url: string = 'https://ghibliapi.herokuapp.com/films';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setFilms(res));
  }, []);
  // console.log(films);

  return (
    <div>
      <ul>
        {films &&
          films.map((film, index) => (
            <li key={index}>
              <div>
                <div>
                  <img src={film.image} alt={film.title} />
                </div>
                <div>
                  <p>
                    {film.title} / {film.original_title}
                  </p>
                  <p>{film.description}</p>
                  <p>{film.release_date}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Api;
