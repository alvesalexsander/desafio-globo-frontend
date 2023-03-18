import './App.sass';
import { Header } from './Header';

function App() {
  return (
    <div className="App">
      <Header
        title='O ELENCO DO CAMPEÃO'
        subtitle='CONHEÇA OS JOGADORES DO PALMEIRAS, VENCEDOR DA LIBERTADORES 2021'
        backgroundImage='img-header.jpg'
      />
    </div>
  );
}

export default App;
