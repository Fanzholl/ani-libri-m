export type TitleObject = {
      name: string,
      posterURL: string,
      description: string,
      genres: Array<string>,
      season: {
            string: string,
            year: string,
      },
};

export type TitleGenres = Array<string>;

export type GenreTitleList = {
      genre: string,
      titleList: Array<Object>,
}