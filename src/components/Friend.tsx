import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import style from '../css_modules/borderRound.module.css';
import { characters } from '../utils/constants';

interface Props{
    friend: string,
    number: number
}
const Friend = ({ friend, number }: Props) => {
    const navigate = useNavigate();
    let friendStyle = 'col-4 p-1 ';

    if (number === 7) {
        friendStyle += style.bottomLeft;
    }
    if (number === 9) {
        friendStyle += style.bottomRight;
    }
    return (
        // <Link className={friendStyle} to={`/home/${friend}`}>
        //     <img className='w-100' src={characters[friend].img} alt={characters[friend].name} />
        // </Link>
        <img className={friendStyle} onClick={() => navigate(`/home/${friend}`)} src={characters[friend].img} alt={characters[friend].name} />
    )
}

export default Friend