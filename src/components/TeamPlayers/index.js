import { PlayersFilter } from './PlayersFilter'
import { PlayersShowcase } from './PlayersShowcase'
import './style.sass'

function TeamPlayers() {
  return (
    <div id='teamPlayers'>
      TeamPlayers
      <PlayersFilter />
      <PlayersShowcase />
    </div>
  )
}

export { TeamPlayers }
