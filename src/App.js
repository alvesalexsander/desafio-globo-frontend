import MediaQuery from 'react-responsive';

import './App.sass';
import { Header } from './components/Header';
import { StoryDate } from './components/StoryDate';
import { StoryText } from './components/StoryText';
import { TeamPlayers } from './components/TeamPlayers';

function App() {

  return (
    <div className="App">
      <Header
        title='O ELENCO DO CAMPEÃO'
        subtitle='CONHEÇA OS JOGADORES DO PALMEIRAS, VENCEDOR DA LIBERTADORES 2021'
        backgroundImage='img-header.jpg'
      />
      <MediaQuery maxWidth={720}>
        <StoryDate
          publishDate='2021-08-03'
          lastUpdateDate='2021-08-04'
        />
        <StoryText
          content='Na conquista do tricampeonato da Libertadores pelo Palmeiras, candidatos a herói do título não faltaram. O carioca Deyverson de 30 anos saiu do banco na prorrogação para marcar o gol da vitória por 2 a 1 sobre o Flamengo e ser eleito o melhor do jogo. Com defesas importantes, Weverton também pode ser considerado um dos protagonistas do confronto.'
        />
      </MediaQuery>
      <TeamPlayers />
    </div>
  );
}

export default App;
