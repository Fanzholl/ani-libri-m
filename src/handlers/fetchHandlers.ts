import { getGenres, getTitles, getTitlesByGenre, getTitlesByName } from "../http/axios.js";
import { TitleGenres, GenreTitleList, TitleName, NameTitleList } from '../types/Title.ts';

export async function fetchGenres() {
      const result: TitleGenres = await getGenres();
      return result;
}

export async function fetchTitlesByGenres(genres: TitleGenres) {
      console.log(genres);
      const result: Array<Object> = await Promise.all(genres.map(async (genre) => {
            const titles = await getTitlesByGenre(genre);
            const genreTitleList: GenreTitleList = {
                  genre: genre,
                  titleList: titles,
            };
            return genreTitleList;
      }));

      // console.log(result);

      return result;
}

export async function fetchTitlesByName(name: TitleName) {
      console.log(name);

      const titles = await getTitlesByName(name);

      const genreTitleList: NameTitleList = {
            name: name,
            titleList: titles,
      };

      const arr = [genreTitleList]

      return arr;

      // console.log(genreTitleList);
}

export async function fetchTitles(setTitles) {
      const result = await getTitles();
      setTitles(result);
};