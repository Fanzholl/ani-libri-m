import React from 'react'
import Card from "./Card.tsx";
import { titleListCreater } from '../../handlers/listsHandlers.tsx';
import '../../styles/Cards/CardsList.scss';

type Props = {
      cardsList: {
            genre: string,
            titleList: Array<any>,
      },
}

function CardsListContent({ cardsList }: Props) {

      const titleList: Array<any> = cardsList.titleList;

      const LIST: JSX.Element[] = titleListCreater(titleList);

      return (
            <div className="CardsBox">
                  <p className='GenreName'>{cardsList.genre}</p>
                  <div className='GenreContent'>
                        {LIST}
                  </div>
            </div>
      )
}

export default CardsListContent;