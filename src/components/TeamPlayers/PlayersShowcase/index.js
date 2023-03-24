import { useShowcase } from '../../../hooks/useShowcase'
import { PlayerCard } from './PlayerCard'
import './style.sass'

function PlayersShowcase() {
  const { showcasePlayers } = useShowcase()
  return (
    <div id='playersShowcase'>
      {showcasePlayers.map(player => <PlayerCard playerObject={player} key={player.nome} />)}
    </div>
  )
}

export { PlayersShowcase }
