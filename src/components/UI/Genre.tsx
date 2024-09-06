import React from 'react'
import '../../styles/UI/Genre.scss';

type Props = {
      genre: string,
};

function Genre({ genre }: Props) {
      return (
            <div className='GenreBox'>
                  <p>{genre}</p>
            </div>
      )
}

export default Genre;