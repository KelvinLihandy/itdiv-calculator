import React, { useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { SuppContext } from '../Contexts/SupportContext';

const SendSupport = () => {
  const navigate = useNavigate();
  const {inputValue, buttonState, setButtonState} = useContext(SuppContext)

  const refreshPage = () => {
    const randomNumber = Math.floor(Math.random() * 9999 + 1);
    return navigate(`/support/${randomNumber}`);
  }
  useEffect(() => {
    const isDisabled = setInterval(() => {
      if(inputValue.First.length > 0 && inputValue.Last.length > 0 
        && inputValue.Email.length > 0 && inputValue.Topic.length > 0){
        setButtonState({disabled: false});
      }
      else setButtonState({disabled: true});
    }, 100);
    return () => clearInterval(isDisabled);
  }, [inputValue, setButtonState]);

  return (
    <div className='send-supp'>
        <button disabled={buttonState.disabled} onClick={() => refreshPage()}>SEND</button>
    </div>
  )
}

export default SendSupport