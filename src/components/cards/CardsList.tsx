import React from 'react'
import Card from "./Card.tsx";
import '../../styles/Cards/CardsList.scss';

type Props = {
      cardsList: {
            genre: string,
            titleList: Array<any>,
      },
}

function CardsList({ cardsList }: Props) {

      const titleList: Array<any> = cardsList.titleList;

      const LIST: JSX.Element[] = titleList.map(el => {
            return <Card key={el.id} name={el.names.ru} posterURL={el.posters.original.url} description={el.description} genres={el.genres} season={el.season} />
      });

      return (
            <div className="CardsBox">
                  <p className='GenreName'>{cardsList.genre}</p>
                  <div className='GenreContent'>
                        {LIST}
                  </div>
            </div>
      )
}

export default CardsList