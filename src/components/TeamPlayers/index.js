import { PlayersFilter } from './PlayersFilter'
import { PlayersShowcase } from './PlayersShowcase'
import './style.sass'

function TeamPlayers() {
  return (
    <div id='teamPlayers'>
      <PlayersFilter />
      <div className='separator'></div>
      <PlayersShowcase />
    </div>
  )
}

export { TeamPlayers }
