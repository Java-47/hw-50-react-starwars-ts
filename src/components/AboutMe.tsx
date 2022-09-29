import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "../css_modules/aboutMe.module.css";
import { characters, defaultHero, friends, periodMonth } from "../utils/constants";
interface Props{
  changeHero: (hero: string) => void
}
interface Info{
  "name": string,
  "height": number,
  "mass": number,
  "hair_color": string,
  "skin_color": string,
  "eye_color": string,
  "birth_year": number
  "gender": string
}
interface State{
  hero:{
    name: string,
    height: number,
    birth_year: number,
    gender: string,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string


  }
}
const AboutMe = ({ changeHero }:Props) => {
  const [state, setState] = useState<State>(Object);
  let { heroId } = useParams();
  if (!friends.includes(heroId!)) {
    heroId = defaultHero;
  }

  useEffect(() => {
    let hero = JSON.parse(localStorage.getItem(heroId!) || "");
    if (!hero || (Date.now() - hero.time) > periodMonth) {
      fetch(characters[heroId!].url)
        .then(response => response.json())
        .then(data => {
          let info: Info = {
            "name": data.name,
            "height": data.height,
            "mass": data.mass,
            "hair_color": data.hair_color,
            "skin_color": data.skin_color,
            "eye_color": data.eye_color,
            "birth_year": data.birth_year,
            "gender": data.gender
          };
          setState({ hero: info });
          hero = {
            payload: info,
            time: Date.now()
          };
          localStorage.setItem(heroId!, JSON.stringify(hero));
        });
    } else {
      setState({ hero: hero.payload });
    }
    changeHero(heroId!);
    return () => console.log('Component AboutMe unmounted');
  }, [heroId, changeHero])

  return (
    <div>
      {(state.hero) &&
        <div className={`farGalaxy ${styles.hero_box}`}>
          <p><span className={styles.hero_titles}>name:</span> {state.hero.name}</p>
          <p><span className={styles.hero_titles}>height:</span> {state.hero.height}</p>
          <p><span className={styles.hero_titles}>birth year:</span> {state.hero.birth_year}</p>
          <p><span className={styles.hero_titles}>gender:</span> {state.hero.gender}</p>
          <p><span className={styles.hero_titles}>mass:</span> {state.hero.mass}</p>
          <p><span className={styles.hero_titles}>hair color:</span> {state.hero.hair_color}</p>
          <p><span className={styles.hero_titles}>skin color:</span> {state.hero.skin_color}</p>
          <p><span className={styles.hero_titles}>eye color:</span> {state.hero.eye_color}</p>
        </div>
      }
    </div>
  )


}

export default AboutMe;