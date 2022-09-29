import React from 'react';
import { characters } from '../utils/constants';
interface Props{
    hero: string
}
const Hero = ({hero}: Props) => {
    return (
        <section className="float-start me-3 w-25">
            <img className="w-100" src={characters[hero].img} alt={characters[hero].name} />
        </section>
    )
}

export default Hero