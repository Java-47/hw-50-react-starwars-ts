import React from 'react';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Home from './Home';
import StarWars from './StarWars';
import { navItems } from '../utils/constants';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage';

interface Props{
    changeHero: (hero: string) => void;

  }
const Main = ({changeHero}:Props) => {

    return (
        <Routes>
            {['/', '/:heroId', navItems[0].route, `${navItems[0].route}/:heroId`]
                                                    .map(path => <Route 
                                                                path={path} 
                                                                key={path} 
                                                                element={<Home changeHero={changeHero} />} 
                                                                />)}
            {[navItems[1].route, `${navItems[1].route}/:heroId`]
                                                    .map(path => <Route 
                                                                path={path} 
                                                                key={path} 
                                                                element={<AboutMe changeHero={changeHero} />} 
                                                                />)}
            <Route path={`${navItems[2].route}/*`} element={<StarWars />} />
            <Route path={`${navItems[3].route}/*`} element={<Contact />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )

}

export default Main