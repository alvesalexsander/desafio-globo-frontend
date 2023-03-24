import './style.sass'

function PlayerCard({ playerObject, expanded }) {
  return (
    <div className='card__container' style={expanded ? { height: '35rem' } : {}}>
      <div className='card__container-shrink'>
        <div className='card__container__photo'
          style={{ background: `#006437 url('imgs/jogadores/${playerObject.foto}') 0% 0% / cover no-repeat padding-box` }}></div>
        <div className='card__container__data'>
          <div className='card__container__data__info'>
            <div className='card__container__data__info-name'>{playerObject.nome}</div>
            <div className='card__container__data__info-positionAndAge'>{`${playerObject.posicao} | ${playerObject.idade} anos`}</div>
          </div>
          <div className='card__container__data__stats'>
            <div className='card__container__data__stats__item'>
              <span className='card__container__data__stats__item-label'>Jogos</span>
              <div
                className='card__container__data__stats__item-bar'
                style={{ backgroundColor: '#b4ddc1', width: `${playerObject.jogos / 1.2}rem` }}
              ></div>
              <span className='card__container__data__stats__item-bar__value'>{playerObject.jogos}</span>
            </div>
            <div className='card__container__data__stats__item'>
              <span className='card__container__data__stats__item-label'>Gols</span>
              <div
                className='card__container__data__stats__item-bar'
                style={{ backgroundColor: '#72bf44', width: `${playerObject.gols / 1.2}rem` }}
              ></div>
              <span className='card__container__data__stats__item-bar__value'>{playerObject.gols}</span>
            </div>
          </div>
        </div>
        <div className='card__container-expander'
          onClick={() => {
            if (!expanded) {
              const ev = new Event('updateHighlighted')
              ev.playerName = playerObject.nome
              document.dispatchEvent(ev)
              document.getElementById('teamPlayers').style.display = 'none'
            } else {
              const ev = new Event('updateHighlighted')
              document.dispatchEvent(ev)
              document.getElementById('teamPlayers').style.display = 'block'
            }
          }}
          style={
            expanded ?
              {
                background: `url('imgs/icones/fechar.svg') 0% 0% / cover no-repeat padding-box`,
                bottom: '90%'
              }
              : { background: `url('imgs/icones/saiba-mais.svg') 0% 0% / cover no-repeat padding-box` }
          }></div>
      </div>
      {expanded ?
        <div className='card__container-expanded'>
          <textarea className='card__container-expanded__text' readOnly value={playerObject.texto}></textarea>
          <div className='card__container-expanded__nav'>
            <div className='card__container-expanded__nav-button'
              onClick={() => {
                console.log('anterior')
                document.dispatchEvent(new Event('hightlightPreviousPlayer'))
              }}
            >
              <div className='card__container-expanded__nav-button-icon'
                style={{
                  background: `url('imgs/icones/seta-esquerda.svg') center center no-repeat`,
                  left: '1rem'
                }}></div>
              <div className='card__container-expanded__nav-button-text'>Anterior</div>
            </div>
            <div className='card__container-expanded__nav-button'
              onClick={() => {
                document.dispatchEvent(new Event('hightlightNextPlayer'))
              }}>
              <div className='card__container-expanded__nav-button-text'>Próximo</div>
              <div className='card__container-expanded__nav-button-icon'
                style={{
                  background: `url('imgs/icones/seta-direita.svg') center center no-repeat`,
                  right: '1rem'
                }}></div>
            </div>
          </div>
        </div>
        : null
      }
    </div>
  )
}

export { PlayerCard }