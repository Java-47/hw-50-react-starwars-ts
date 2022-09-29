import React, { useEffect, useState } from 'react';
import style from '../css_modules/farGalaxy.module.css';
import { base_url } from '../utils/constants';

const FarGalaxy = () => {
    const [openingCrawl, setOpeningCrawl] = useState('Loading...');

    useEffect(() => {
        const text = sessionStorage.getItem('opening_crawl');
        if (text) {
            setOpeningCrawl(text);
        } else {
            const episode = Math.floor(1 + Math.random() * 6);
            fetch(`${base_url}/v1/films/${episode}`)
                .then(response => response.json())
                .then(data => {
                    setOpeningCrawl(data.opening_crawl);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl)
                });
        }
        return () => console.log('Component FarGalaxy unmounted');
    }, []);

    return (
        <p className={style.farGalaxy}>{openingCrawl}</p>
    )
}

export default FarGalaxy