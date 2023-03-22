import { useState } from 'react'
import { ageSelectionOptions, positionSelectionOptions, useFilterSelection } from '../../../hooks/usePositionSelectionFilter'
import { DropdownFilter } from './DropdownFilter'
import './style.sass'

function PlayersFilter() {
  const [shouldRenderPositionSelection, setShouldRenderPositionSelection] = useState(false)
  const [shouldRenderAgeSelection, setShouldRenderAgeSelection] = useState(false)

  const { positionSelection, setPositionSelection, ageSelection, setAgeSelection } = useFilterSelection()

  return (
    <div id='playersFilter' className='player-filter'>
      <div id='dropdowns' className='player-filter__dropdowns'>

        <DropdownFilter
          optionsObject={positionSelectionOptions}
          dropdownId='positionFilter'
          isOpened={shouldRenderPositionSelection}
          updateOpened={setShouldRenderPositionSelection}
          value={positionSelection}
          setValue={setPositionSelection}
        />

        <DropdownFilter
          optionsObject={ageSelectionOptions}
          dropdownId='ageFilter'
          isOpened={shouldRenderAgeSelection}
          updateOpened={setShouldRenderAgeSelection}
          value={ageSelection}
          setValue={setAgeSelection}
        />

      </div>

      <div id='checkboxes' className='player-filter__checkboxes'>
        <div>
          <input type="checkbox" id="hasScored"></input>
          <label htmlFor='hasScored'>Somente quem marcou gol</label>
        </div>

        <div>
          <input type="checkbox" id='wasInFinals'></input>
          <label htmlFor='wasInFinals'>Somente quem jogou na final</label>
        </div>
      </div>
    </div>
  )

}

export { PlayersFilter }
