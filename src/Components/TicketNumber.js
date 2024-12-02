import React from 'react'

const formatting = (number) => {
    const formatted = number.toString().padStart(4, '0');
    return formatted;
}

const TicketNumber= ({number}) => {
  return (
    <div className='ticket'>
        <p>ticket number: <span>{formatting(number)}</span></p>
    </div>
  )
}

export default TicketNumber