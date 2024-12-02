import React from 'react'
import { useNavigate } from 'react-router-dom'

const SendSupport = () => {
  const navigate = useNavigate();

  const refreshPage = () => {
    const randomNumber = Math.floor(Math.random() * 9999 + 1);
    return navigate(`/support/${randomNumber}`);
  }

  return (
    <div className='send-supp'>
        <button onClick={() => refreshPage()}>SEND</button>
    </div>
  )
}

export default SendSupport