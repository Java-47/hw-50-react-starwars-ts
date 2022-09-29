import React from 'react'
import { characters } from '../utils/constants'
import Navigation from './Navigation'

interface Props{
    hero: string
}
const Header = ({hero} : Props) => {
    return (
        <header>
            <Navigation hero={hero} />
            <h1 className="text-center py-4">{characters[hero].name}</h1>
        </header>
    )
}

export default Header