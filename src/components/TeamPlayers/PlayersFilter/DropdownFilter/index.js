import { useEffect } from 'react'

const DropdownFilter = ({ dropdownId, optionsObject, isOpened, updateOpened, value, setValue }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.id.includes(dropdownId)) {
        updateOpened(false);
      }
    }

    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    }
  }, [updateOpened, dropdownId])

  return (<div id={dropdownId} className='player-filter__dropdowns__options__container'>

    <div
      id={dropdownId}
      className='player-filter__dropdowns__options__selected'
      onClick={() => updateOpened(!isOpened)}>
      {value}
    </div>

    {isOpened ? <div id={dropdownId} className='player-filter__dropdowns__options__items'>
      {
        Object.keys(optionsObject)
          .map(option =>
          (<div key={option}>

            <input
              type='radio'
              id={dropdownId + option}
              name={dropdownId}
              className='player-filter__dropdowns__options__radio'
              onChange={() => {
                setValue(option)
                updateOpened(false)
              }} />

            <label
              id={dropdownId}
              htmlFor={dropdownId + option}
              className='player-filter__dropdowns__options__item'
            >{option}</label>

          </div>)
          )
      }</div> : null}
  </div>)
}

export { DropdownFilter }