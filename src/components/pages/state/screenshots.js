import React from 'react'
import { DateTime } from 'luxon'

export default ({ date, screenshots }) => {
  const dateScreenshots = []
  const currentDate = DateTime.fromISO(date)
  screenshots.forEach(({ node }) => {
    if (DateTime.fromISO(node.dateChecked).hasSame(currentDate, 'day')) {
      dateScreenshots.push(node)
    }
  })
  if (dateScreenshots.length === 0) {
    return null
  }
  return (
    <ul>
      {dateScreenshots.map(screenshot => (
        <li key={screenshot.url}>
          <a href={screenshot.url} target="_blank" rel="noopener noreferrer">
            {screenshot.dateChecked && (
              <>
                {DateTime.fromISO(screenshot.dateChecked)
                  .toFormat('h:mm a')
                  .toLowerCase()}
              </>
            )}
          </a>
        </li>
      ))}
    </ul>
  )
}
