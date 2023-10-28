import './Header.scss';
import { Navbar } from '../Navbar/Navbar';
import { Rrss } from '../Rrss/Rrss';

export const Header = () => {
  return (
    <header className='Header'>
      <Title />
      <Navbar />
      <Rrss />
    </header>
  );
};

const Title = () => {
  return <h1 className='Header-title'>FreivysDev</h1>;
};
