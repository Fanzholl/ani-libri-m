import axios from "axios";

const API = 'https://api.anilibria.tv/v3/';
const TITLES = 'title';

export async function getTitle(id) {
      try {
          const response = await axios.get(`${API}${TITLES}`, {
              params: {
                  id: id,
              }
          });
          const data = response.data; // Убедитесь, что `data` имеет правильную структуру
          return data;
      } catch (err) {
          console.error(`Error: ${err}`);
          throw err;
      }
  }

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
            // console.log(genres); // выводим жанры в консоль
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
                        limit: 12,
                  }
            }); const data = response.data.list;
            // console.log(222)
            return data;
      } catch (err) {

      }
}

export async function getTitlesByName(name) {
      try {
            const response = await axios.get(`${API + TITLES}/search`, {
                  params: {
                        search: name,
                        limit: 36,
                  }
            }); const data = response.data.list;
            // console.log(222)
            return data;
      } catch (err) {

      }
}
