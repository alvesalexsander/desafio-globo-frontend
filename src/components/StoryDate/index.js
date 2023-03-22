import './style.sass'

import { DateTime } from 'luxon'

function StoryDate({ publishDate, lastUpdateDate }) {
  return (
    <div id='storyDate'>
      <span>Publicado em {getFormatedStoryDate(publishDate)}</span>{lastUpdateDate ? <span>• Atualizado em {getFormatedStoryDate(lastUpdateDate)}</span> : null}
    </div>
  )
}

const getFormatedStoryDate = (isoDate) => DateTime.fromISO(isoDate).toFormat('dd.LL.yyyy')

export { StoryDate }
