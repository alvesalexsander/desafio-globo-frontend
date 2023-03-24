import { useState, useEffect } from 'react'

const POSITION_SELECTION_OPTIONS = {
  'Todas as posições': '',
  'Goleiro': 'Goleiro',
  'Zagueiro': 'Zagueiro',
  'Lateral Direito': 'Lateral Direito',
  'Lateral Esquerdo': 'Lateral Esquerdo',
  'Volante': 'Volante',
  'Meia': 'Meia',
  'Atacante': 'Atacante',
  'Ponta': 'Ponta', // Tomei a liberdade de adicionar esta opção para dar visibilidade aos jogadores nesta posição no time
  'Treinador': 'Treinador'
}

const AGE_SELECTION_OPTIONS = {
  'Todas as idades': '',
  '0-19 anos': '0-19',
  '20-29 anos': '20-29',
  '30-39 anos': '30-39',
  '40-49 anos': '40-49'
}

function useFilter() {
  const [positionSelection, setPositionSelection] = useState('Todas as posições')
  const [ageSelection, setAgeSelection] = useState('Todas as idades')

  const getNotSelectedOptions = (options, currentSelected) => Object.keys(options).filter(p => p !== currentSelected)

  const [positionSelectionOptions, setPositionSelectionOptions] = useState(getNotSelectedOptions(POSITION_SELECTION_OPTIONS, positionSelection))
  const [ageSelectionOptions, setAgeSelectionOptions] = useState(getNotSelectedOptions(AGE_SELECTION_OPTIONS, ageSelection))

  const [scoredGoalsCheckStatus, setScoredGoalsCheckStatus] = useState(false)
  const [playedAtFinalsCheckStatus, setPlayedAtFinalsCheckStatus] = useState(false)

  const injectFilterPayloadAtEvent = (ev) => {
    ev.positionSelection = POSITION_SELECTION_OPTIONS[positionSelection]
    ev.ageSelection = AGE_SELECTION_OPTIONS[ageSelection]
    ev.scoredGoalsCheckStatus = scoredGoalsCheckStatus
    ev.playedAtFinalsCheckStatus = playedAtFinalsCheckStatus
    return ev
  }

  useEffect(() => {
    setPositionSelectionOptions(getNotSelectedOptions(POSITION_SELECTION_OPTIONS, positionSelection))
    document.dispatchEvent(injectFilterPayloadAtEvent(new Event('filterUpdate')))
  }, [positionSelection]);

  useEffect(() => {
    setAgeSelectionOptions(getNotSelectedOptions(AGE_SELECTION_OPTIONS, ageSelection))
    document.dispatchEvent(injectFilterPayloadAtEvent(new Event('filterUpdate')))
  }, [ageSelection]);

  useEffect(() => {
    document.dispatchEvent(injectFilterPayloadAtEvent(new Event('filterUpdate')))
  }, [scoredGoalsCheckStatus]);

  useEffect(() => {
    document.dispatchEvent(injectFilterPayloadAtEvent(new Event('filterUpdate')))
  }, [playedAtFinalsCheckStatus]);

  return {
    positionSelection,
    setPositionSelection,
    ageSelection,
    setAgeSelection,
    positionSelectionOptions,
    ageSelectionOptions,
    scoredGoalsCheckStatus,
    setScoredGoalsCheckStatus,
    playedAtFinalsCheckStatus,
    setPlayedAtFinalsCheckStatus
  }
}

export { useFilter }