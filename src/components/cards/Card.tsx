import React from 'react';
import '../../styles/Cards/Card.scss';
import { cardTextSlicer } from '../../handlers/textHandler.js';
import Genre from '../UI/Genre.tsx';
import { Link } from 'react-router-dom';
import { TitleObject } from '../../types/Title.ts';

function Card({ name, posterURL, description, genres, season }: TitleObject) {

      description = cardTextSlicer(description, 100);
      name = cardTextSlicer(name, 40);
      genres = genres.length > 3 ? genres.slice(0, 3) : genres;
      genres.push(season.year);

      const genresList: JSX.Element[] = genres.map(el => <Genre key={el} genre={el} />);

      return (
            <div className='Card'>
                  <div className='InnerCard'>
                        <div className='Front' style={{ backgroundImage: `url(https://static-libria.weekstorm.us/${posterURL})` }}></div>
                        <div className='Back'>
                              <p className='Name'>{name}</p>
                              <div className='GenreContainer'>
                                    {genresList}
                              </div>
                              <Link to={''} className='WatchLink'>Смотреть</Link>
                        </div>
                  </div>
            </div>
      );
}

export default Card;
