import './App.css';
import Alerts from './Header/Alerts';
import NavbarH from './Header/Navbar';
import Slider from './Accueil/Slider';

function App() {
  return (
  <>
    <div style={{width:'100%'}}>
        <div className='headerSection'>
          <Alerts />
          <NavbarH />
        </div>
      <Slider/> 
    </div>
  </>
  );
}

export default App;
