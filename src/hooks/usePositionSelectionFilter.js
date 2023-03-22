import { useState } from 'react'

const positionSelectionOptions = {
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

const ageSelectionOptions = {
  'Todas as idades': '',
  '0-19 anos': '0-19',
  '20-29 anos': '20-29',
  '30-39 anos': '30-39',
  '40-49 anos': '40-49'
}

function useFilterSelection() {
  const [positionSelection, setPositionSelection] = useState('Todas as posições')
  const [ageSelection, setAgeSelection] = useState('Todas as idades')

  return { positionSelection, setPositionSelection, ageSelection, setAgeSelection }
}

export { useFilterSelection, positionSelectionOptions, ageSelectionOptions }