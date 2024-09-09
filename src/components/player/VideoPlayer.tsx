import React, { useEffect, useState } from 'react';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster, Track } from '@vidstack/react';
import { DefaultVideoLayout, defaultLayoutIcons } from '@vidstack/react/player/layouts/default';
import { Title } from '../../types/Title.ts';
import { fetchTitle } from '../../handlers/fetchHandlers.ts';
import { useParams } from 'react-router-dom';
import '../../styles/Player/Player.scss'; // Импортируем стили SCSS

function VideoPlayer(): JSX.Element {
    const { id } = useParams<{ id: string }>();

    const [titleObj, setTitleObj] = useState<Title | null>(null);
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
        }

        fetchData();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!titleObj || !titleObj.title || !titleObj.title.player || !titleObj.title.player.list) {
        return <p>No video available</p>;
    }

    const hlsSrc = `https://${titleObj.title.player.host}${titleObj.title.player.list['1'].hls.fhd}`;

    // Создаем текстовые треки из данных titleObj
    // const textTracks = titleObj.title.textTracks || [];

    return (
        <div className="video-player-container">
            <MediaPlayer
                src={hlsSrc}
                viewType="video"
                streamType="on-demand"
                logLevel="warn"
                crossOrigin
                playsInline
                title={titleObj.title.name}
                poster={titleObj.title.posterURL}
            >
                <MediaProvider>
                    <Poster className="vds-poster" />
                    
                </MediaProvider>
                <DefaultVideoLayout
                    icons={defaultLayoutIcons}
                />
            </MediaPlayer>
        </div>
    );
}

export default VideoPlayer;

