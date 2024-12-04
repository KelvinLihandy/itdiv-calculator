import React, { useContext } from 'react'
// import HistoryInstance from './HistoryInstance'
import { CalcContext } from '../Contexts/CalcContext'

const History = () => {
  const {history, setHistory} = useContext(CalcContext);

  return (
    <div className='history-container'>
      {history.map(hist => (
        <div>{hist}</div>
      ))}
    </div>
  )
}

export default History
