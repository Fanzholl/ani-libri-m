import React from 'react'
import { Title } from '../../types/Title'
import '../../styles/Player/TitleInfo.scss';

type Props = {
      titleObj: Title | null,
}

function TitleInfo({ titleObj }: Props) {
      console.log(titleObj);

      if (!titleObj) {
            // Если titleObj равен null, можно вернуть placeholder или null
            return <p>No title available</p>;
      }

      return (
            <div className='TitleInfoContainer'>
                  <div className='TitleInfo'>
                        <img src={`https://static-libria.weekstorm.us/${titleObj.title.posters.original.url}`} alt='Title Poster/Постер тайтла.' />
                  </div>
            </div>
      )
}

export default TitleInfo