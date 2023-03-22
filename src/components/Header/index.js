import MediaQuery from 'react-responsive'

import { StoryDate } from '../StoryDate'
import { StoryText } from '../StoryText'

import './style.sass'

function Header({ title, subtitle, backgroundImage }) {
  const bgStyle = {
    background: `transparent url('imgs/${backgroundImage}') 0% 0% / cover no-repeat padding-box`,
  }

  return (
    <header style={backgroundImage ? bgStyle : {}}>
      <h1 className='header-text'>{title}</h1>
      <p className='header-text'>{subtitle}</p>
      <MediaQuery minWidth={720}>
        <StoryDate
          publishDate='2021-08-03'
          lastUpdateDate='2021-08-04'
        />
        <StoryText
          content='Na conquista do tricampeonato da Libertadores pelo Palmeiras, candidatos a herói do título não faltaram. O carioca Deyverson de 30 anos saiu do banco na prorrogação para marcar o gol da vitória por 2 a 1 sobre o Flamengo e ser eleito o melhor do jogo. Com defesas importantes, Weverton também pode ser considerado um dos protagonistas do confronto.'
        />
      </MediaQuery>
    </header>
  )
}

export { Header }
