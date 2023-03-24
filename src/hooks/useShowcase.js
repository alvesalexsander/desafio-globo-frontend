import { useState, useEffect } from 'react'

const players = require('../resources/libertadores-palmeiras-teste-dev.json')

function useShowcase() {
  const [showcasePlayers, setShowcasePlayers] = useState(players)
  const [highlightedPlayer, setHighlightedPlayer] = useState(null)

  const updateShowcasedPlayersByFilter = (ev) => setShowcasePlayers(new FilterExecution(ev).getFilteredShowcasePlayers())
  const updateHighlightedPlayers = (ev) => setHighlightedPlayer(showcasePlayers.filter(player => player.nome === ev.playerName)?.[0])
  const hightlightPreviousPlayer = () => {
    const currentIndex = showcasePlayers.indexOf(highlightedPlayer)
    if (currentIndex === 0) {
      setHighlightedPlayer(showcasePlayers.at(-1))
      return
    }
    setHighlightedPlayer(showcasePlayers[currentIndex - 1])
  }

  const hightlightNextPlayer = () => {
    const currentIndex = showcasePlayers.indexOf(highlightedPlayer)
    if (currentIndex === showcasePlayers.length - 1) {
      setHighlightedPlayer(showcasePlayers.at(0))
      return
    }
    setHighlightedPlayer(showcasePlayers[currentIndex + 1])
  }

  useEffect(() => {
    document.addEventListener('filterUpdate', updateShowcasedPlayersByFilter, true);
    document.addEventListener('updateHighlighted', updateHighlightedPlayers, true);
    document.addEventListener('hightlightPreviousPlayer', hightlightPreviousPlayer, true)
    document.addEventListener('hightlightNextPlayer', hightlightNextPlayer, true)
    return () => {
      document.removeEventListener('filterUpdate', updateShowcasedPlayersByFilter, true);
      document.removeEventListener('updateHighlighted', updateHighlightedPlayers, true);
    }
  });

  return {
    showcasePlayers,
    highlightedPlayer
  }
}

class FilterExecution {
  #filteredShowcaseState
  #filterParameters

  constructor(filterParameters) {
    this.#filterParameters = filterParameters
    this.#filteredShowcaseState = [...players]
  }

  #filterShowcasedPlayersByPosition() {
    if (!this.#filterParameters.positionSelection) {
      this.#filteredShowcaseState = players
      return
    }

    this.#filteredShowcaseState = this.#filteredShowcaseState
      .filter(player => player.posicao === this.#filterParameters.positionSelection)
  }

  #filterShowcasedPlayersByAge() {
    if (!this.#filterParameters.ageSelection) {
      return
    }

    const [minAge, maxAge] = this.#filterParameters.ageSelection.split('-')
    this.#filteredShowcaseState = [...this.#filteredShowcaseState].filter(player => player.idade >= minAge && player.idade <= maxAge)
  }

  #filterShowcasedPlayersOnlyScoredGoals() {
    if (!this.#filterParameters.scoredGoalsCheckStatus) {
      return
    }
    this.#filteredShowcaseState = [...this.#filteredShowcaseState].filter(player => player.gols > 0)
  }

  #filterShowcasedPlayersOnlyHasPlayedAtFinals() {
    if (!this.#filterParameters.playedAtFinalsCheckStatus) {
      return
    }
    this.#filteredShowcaseState = [...this.#filteredShowcaseState].filter(player => player.final === 'sim')
  }

  getFilteredShowcasePlayers() {
    this.#filterShowcasedPlayersByPosition()
    this.#filterShowcasedPlayersByAge()
    this.#filterShowcasedPlayersOnlyScoredGoals()
    this.#filterShowcasedPlayersOnlyHasPlayedAtFinals()
    return this.#filteredShowcaseState
  }

}

export { useShowcase }