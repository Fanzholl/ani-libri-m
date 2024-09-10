import React, { useEffect, useState } from 'react'
import VideoPlayer from './VideoPlayer.tsx'
import { useParams } from 'react-router-dom';
import TitleInfo from './TitleInfo.tsx';
import { Title } from '../../types/Title.ts';
import { fetchTitle } from '../../handlers/fetchHandlers.ts';

type Props = {}

function TitlePage({ }: Props) {
      const { id } = useParams<{ id: string }>();
      const [titleObj, setTitleObj] = useState<Title | null>(null);
      const [currentEpisode, setCurrentEpisode] = useState<string>('1');
      const [loading, setLoading] = useState<boolean>(true);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        if (id) {
                              const title: Title = await fetchTitle(id);
                              setTitleObj(title);
                        } else {
                              console.error("ID is undefined");
                        }
                  } catch (err) {
                        console.error(`Fetch error: ${err}`);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchData();
      }, [id, currentEpisode]);

      if (loading) {
            return <p>Loading...</p>;
      }

      return (
            <div className='TitleContainer'>
                  <VideoPlayer id={id} titleObj={titleObj} setTitleObj={setTitleObj} currentEpisode={currentEpisode} setCurrentEpisode={setCurrentEpisode} />
                  <TitleInfo titleObj={titleObj} />
            </div>
      )
}

export default TitlePage