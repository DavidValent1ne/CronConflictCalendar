import React from 'react'
import Timeline from 'react-calendar-timeline'
import 'react-calendar-timeline/dist/style.css'
import moment from 'moment'
import CronTimes from './Components/CronTimes'

const App = () => {
  const groups = [{ id: 1, title: 'Port 1' }]

  const items = [
    {
      id: 1,
      group: 1,
      title: 'backup.sh',
      start_time: moment().add(5, 'minute'),
      end_time: moment().add(10, 'minute')
    },
    {
      id: 2,
      group: 1,
      title: 'loadPostgres.sh',
      start_time: moment().add(15, 'minute'),
      end_time: moment().add(20, 'minute')
    }
  ]

  return (
    <div>
      <h1>Cron Conflict calendar</h1>
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, 'hour')}
        defaultTimeEnd={moment().add(12, 'hour')}
        lineHeight={250}
      />
      <div className="App">
        <CronTimes />
      </div>
    </div>
    
  )
}

export default App
