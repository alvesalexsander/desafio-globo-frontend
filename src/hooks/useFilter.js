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

  useEffect(() => {
    setPositionSelectionOptions(getNotSelectedOptions(POSITION_SELECTION_OPTIONS, positionSelection))
  }, [positionSelection]);

  useEffect(() => {
    setAgeSelectionOptions(getNotSelectedOptions(AGE_SELECTION_OPTIONS, ageSelection))
  }, [ageSelection]);

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