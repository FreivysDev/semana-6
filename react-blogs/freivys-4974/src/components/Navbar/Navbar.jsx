import './Navbar.scss';
import { Anchor } from '../Anchor/Anchor';

export const Navbar = () => {
  return (
    <nav className='Navbar'>
      <ul className='Navbar-ul'>
        <li className='Navbar-li'>
          <Anchor clase='Navbar-anchor isActive' title='Home'></Anchor>
        </li>
        <li className='Navbar-li'>
          <Anchor clase='Navbar-anchor' title='About'></Anchor>
        </li>
        <li className='Navbar-li'>
          <Anchor clase='Navbar-anchor' title='Contact'></Anchor>
        </li>
      </ul>
    </nav>
  );
};
