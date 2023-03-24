import { useState } from 'react'
import { useFilter } from '../../../hooks/useFilter'
import { DropdownFilter } from './DropdownFilter'
import './style.sass'

function PlayersFilter() {
  const [shouldRenderPositionSelection, setShouldRenderPositionSelection] = useState(false)
  const [shouldRenderAgeSelection, setShouldRenderAgeSelection] = useState(false)

  const {
    positionSelection,
    setPositionSelection,
    ageSelection,
    setAgeSelection,
    ageSelectionOptions,
    positionSelectionOptions,
    scoredGoalsCheckStatus,
    setScoredGoalsCheckStatus,
    playedAtFinalsCheckStatus,
    setPlayedAtFinalsCheckStatus
  } = useFilter()

  return (
    <div id='playersFilter' className='player-filter'>
      <div id='dropdowns' className='player-filter__dropdowns'>

        <DropdownFilter
          optionsArray={positionSelectionOptions}
          dropdownId='positionFilter'
          isOpened={shouldRenderPositionSelection}
          updateOpened={setShouldRenderPositionSelection}
          value={positionSelection}
          setValue={setPositionSelection}
        />

        <DropdownFilter
          optionsArray={ageSelectionOptions}
          dropdownId='ageFilter'
          isOpened={shouldRenderAgeSelection}
          updateOpened={setShouldRenderAgeSelection}
          value={ageSelection}
          setValue={setAgeSelection}
        />

      </div>

      <div id='checkboxes' className='player-filter__checkboxes'>
        <div className='player-filter__checkboxes__container' onClick={() => setScoredGoalsCheckStatus(!scoredGoalsCheckStatus)}>
          <input type="checkbox" id="hasScored" checked={scoredGoalsCheckStatus}></input>
          <div className='player-filter__checkboxes__box'>
            <div className='player-filter__checkboxes__box-mark'></div>
          </div>
          <label>Somente quem marcou gol</label>
        </div>

        <div className='player-filter__checkboxes__container' onClick={() => setPlayedAtFinalsCheckStatus(!playedAtFinalsCheckStatus)}>
          <input type="checkbox" id='playedAtFinals' checked={playedAtFinalsCheckStatus}></input>
          <div className='player-filter__checkboxes__box'>
            <div className='player-filter__checkboxes__box-mark'></div>
          </div>
          <label>Somente quem jogou na final</label>
        </div>
      </div>
    </div >
  )

}

export { PlayersFilter }
