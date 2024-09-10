import React, { useState, useRef } from 'react';
import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import { MediaPlayer, MediaProvider, Poster } from '@vidstack/react';
import { DefaultVideoLayout, defaultLayoutIcons } from '@vidstack/react/player/layouts/default';
import { Title } from '../../types/Title.ts';
import '../../styles/Player/Player.scss'; // Импортируем стили SCSS
import type { MediaPlayerInstance } from '@vidstack/react';

interface Props {
    id: string | undefined, // id для загрузки данных
    titleObj: Title | null, // передаем titleObj как проп
    setTitleObj: React.Dispatch<React.SetStateAction<Title | null>>, // передаем функцию для изменения titleObj
    currentEpisode: string,
    setCurrentEpisode: React.Dispatch<React.SetStateAction<string>>,
}

function VideoPlayer({ id, titleObj, setTitleObj, currentEpisode, setCurrentEpisode }: Props): JSX.Element {
    const [currentQuality, setCurrentQuality] = useState<string>('fhd');
    const [savedTime, setSavedTime] = useState<number>(0); // Сохраняем текущее время
    const [canPlay, setCanPlay] = useState<boolean>(false);
    const playerRef = useRef<MediaPlayerInstance | null>(null);
    const [userInteracted, setUserInteracted] = useState<boolean>(false);

    // Обработчик события "can-play" для восстановления времени
    const handleCanPlay = () => {
        setCanPlay(true);
        if (playerRef.current && savedTime) {
            playerRef.current.currentTime = savedTime; // Восстанавливаем время
            playerRef.current.play().catch((error) => {
                console.warn('Play was prevented:', error);
            });
        }
    };

    // Обработка изменения качества
    const changeQuality = (quality: string) => {
        if (playerRef.current) {
            setSavedTime(playerRef.current.currentTime); // Сохраняем текущее время перед изменением качества
        }
        setCurrentQuality(quality);
        setCanPlay(false); // Сбросим флаг, чтобы дождаться готовности нового источника
    };

    if (!titleObj || !titleObj.title || !titleObj.title.player || !titleObj.title.player.list) {
        return <p>No video available</p>;
    }

    const playerList = titleObj.title.player.list[currentEpisode];
    const hlsSrc = `https://${titleObj.title.player.host}${playerList.hls[currentQuality]}`;
    const availableQualities = Object.keys(playerList.hls);
    const availableEpisodes = Object.keys(titleObj.title.player.list);

    // Функция для обработки взаимодействия пользователя
    const handleUserInteraction = () => {
        setUserInteracted(true);
        if (playerRef.current) {
            playerRef.current.play().catch((error) => {
                console.warn('Play was prevented:', error);
            });
        }
    };

    return (
        <div className='video-player-margin'>
            <div className="video-player-container">
                <MediaPlayer
                    ref={playerRef}
                    src={hlsSrc}
                    viewType="video"
                    streamType="on-demand"
                    logLevel="warn"
                    crossOrigin
                    playsInline
                    title={titleObj.title.name}
                    // poster={`https://static-libria.weekstorm.us${titleObj.title.posterURL}`}
                    onCanPlay={handleCanPlay} // Восстанавливаем время при готовности видео
                >
                    <MediaProvider>
                        <Poster className="vds-poster" />
                    </MediaProvider>

                    <div className="custom-menu">
                        <div className="quality-menu">
                            <p>Select Quality:</p>
                            {availableQualities.map((quality) => (
                                <button
                                    key={quality}
                                    className={currentQuality === quality ? 'selected' : ''}
                                    onClick={() => changeQuality(quality)} // Сохраняем текущее время и изменяем качество
                                >
                                    {quality.toUpperCase()}
                                </button>
                            ))}
                        </div>

                        <div className="episode-menu">
                            <p>Select Episode:</p>
                            {availableEpisodes.map((episode) => (
                                <button
                                    key={episode}
                                    className={currentEpisode === episode ? 'selected' : ''}
                                    onClick={() => setCurrentEpisode(episode)} // Меняем серию
                                >
                                    Episode {episode}
                                </button>
                            ))}
                        </div>
                    </div>

                    <DefaultVideoLayout icons={defaultLayoutIcons} />
                </MediaPlayer>

                {!userInteracted && (
                    <button className="play-button" onClick={handleUserInteraction}>
                        Click to Play
                    </button>
                )}
            </div>
        </div>
    );
}

export default VideoPlayer;