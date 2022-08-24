import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.scss';

interface Item {
    title: string,
    poster_path: string,
    vote_average: number,
    overview: string
}

const index = () => {

    const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
    const [movieData, setMovieData] = useState<undefined | Array<Item>>();
    const firstRef = useRef(true);
    const [inputValue, setInputValue] = useState('');


    useEffect(() => {
        if (firstRef.current) {
            getMovies(API_URL);
            firstRef.current = false;
        }
    })

    function fromSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (inputValue !== '') {
            getMovies(SEARCH_API + inputValue);
            setInputValue('');
        }
        else {
            window.location.reload();
        }
    }

    async function getMovies(url: string) {
        const res = await fetch(url)
        const data = await res.json()
        setMovieData(data.results)
    }

    return (
        <div className={styles.body}>
            <header>
                <form onSubmit={e => fromSubmit(e)}>
                    <input value={inputValue} onChange={e => setInputValue(e.target.value)} type={'text'} className={styles.search} placeholder='Search'></input>
                </form>
            </header>
            <main>
                {
                    movieData && movieData.map((item, idx) => (
                        <div key={idx} className={styles.movie}>
                            <img src={IMG_PATH + item.poster_path} alt={item.title}></img>
                            <div className={styles.movieInfo}>
                                <h3>{item.title}</h3>
                                <span className={getClassByRate(item.vote_average)}>{item.vote_average}</span>
                            </div>
                            <div className={styles.overview}>
                                <h3>OverView</h3>
                                {item.overview}
                            </div>
                        </div>
                    ))
                }
            </main>
        </div>
    )

    function getClassByRate(vote: number) {
        if (vote >= 8) {
            return `${styles.green}`;
        } else if (vote >= 5) {
            return `${styles.orange}`;
        } else {
            return `${styles.red}`;
        }
    }

}

export default index