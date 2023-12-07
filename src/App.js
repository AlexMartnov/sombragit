import OleksandrPhoto from './Oleksandr.jpg';
import HannaPhoto from './images.jpg';
import OlegPhoto from './Legarde_portrait4.webp'

import DmytroPhoto from './maaaksymiw.jpg'

import RomanPhoto from './Cat03.jpg'


import './App.css';

function App() {
  return (
      <div>
        <div>
          <p>Martynov Oleksandr</p>
          <p>Backend developer</p>
          <img src={OleksandrPhoto} alt="Text"/>
        </div>
        <div>
          <p>Panchenko Oleg</p>
          <p>tech Lead</p>
          <img src={OlegPhoto} alt="Text"/>
        </div>
        <div>

          <p>Mudrak Hanna</p>
          <p>Project Manager</p>
          <img src={HannaPhoto} alt="Text"/>


          <p>Maksymiv Dmytro</p>
          <p>QA</p>
          <img src={DmytroPhoto} alt="Text"/>

          <p>Palenha Roman</p>
          <p>Full stack developer</p>
          <img src={RomanPhoto} alt="Text"/>


        </div>
      </div>
  );
}

export default App;
