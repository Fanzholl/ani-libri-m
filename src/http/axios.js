import axios from "axios";

const API = 'https://api.anilibria.tv/v3/';
const TITLES = 'title';

export async function getTitles() {
      try {
            const response = await axios.get(`${API + TITLES}/updates`, {
                  params: {
                        limit: 10,
                  },
            });
            const data = response.data.list; // доступ к data после завершения запроса
            console.log(data);
            return data;
      } catch (err) {
            console.log(`Error: ${err}!`);
      }
}

export async function getGenres() {
      try {
            const response = await axios.get(`${API}genres`);
            const genres = response.data; // получаем данные из ответа
            console.log(genres); // выводим жанры в консоль
            return genres; // возвращаем жанры
      } catch (err) {
            console.log(`Error: ${err}!`);
      }
}

export async function getTitlesByGenre(genre) {
      try {
            const response = await axios.get(`${API + TITLES}/search`, {
                  params: {
                        genres: genre,
                        limit: 10,
                  }
            }); const data = response.data.list;
            return data;
      } catch (err) {

      }
}
