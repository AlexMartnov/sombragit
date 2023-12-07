import OleksandrPhoto from './Oleksandr.jpg';
import OlegPhoto from './Legarde_portrait4.webp'
import DmytroPhoto from './maaaksymiw.jpg'
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
          <p>Maksymiv Dmytro</p>
          <p>QA</p>
          <img src={DmytroPhoto} alt="Text"/>
        </div>
      </div>
  );
}

export default App;
