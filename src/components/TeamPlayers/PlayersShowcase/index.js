import './style.sass'

function PlayersShowcase() {
  return (
    <div id='playersShowcase'>
      <div className='card__container closed'>
        <div className='card__container__photo'></div>
        <div className='card__container__data'>
          <div className='card__container__data__info'>
            <div className='card__container__data__info-name'></div>
            <div className='card__container__data__info-positionAndAge'></div>
          </div>
          <div className='card__container__data__stats'>
            <div className='card__container__data__stats-gamePlayed'></div>
            <div className='card__container__data__stats-scoredGoals'></div>
          </div>
        </div>
        <div className='card__container-expander'></div>
      </div>
    </div>
  )
}

export { PlayersShowcase }
