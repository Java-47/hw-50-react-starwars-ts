import React from 'react';
import { navItems } from '../utils/constants';
import NavItem from './NavItem';
interface Props{
  hero: string
}
const Navigation = ({hero}:Props) => {
  return (
    <nav className="fixed-top mt-2 ms-4">
      <ul className="nav">
        {navItems.map(item => <NavItem key={item.route} item={item} hero={hero}/>)}
      </ul>
    </nav>
  )
}

export default Navigation