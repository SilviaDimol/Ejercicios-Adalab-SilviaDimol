import logo from '../images/logo.jpg';
import '../styles/App.css';

function App() {
  return (
    <div>
      <header>
        <h1 className="title">FUTURAMA</h1>
        <img src={logo} title="Futurama" alt="Logo de Futurama" />
        <img src="https://beta.adalab.es/resources/images/adalab-logo-128x128.png" title="Página de Adalab" alt="Logo de Adalab" />
      </header>
    </div>
  );
}

export default App;
