import React, {useContext} from 'react'
import { SuppContext } from '../Contexts/SupportContext'

const getType = (type) => {
  const types = {
    'short': 'form-short',
    'long': 'form-long',
  }
  return types[type];
}

const Form = ({label, prompt, symbol, type}) => {
  const {inputValue, setInputValue} = useContext(SuppContext);

  // const input = (event) => {
  //   setInputValue({
  //     ...inputValue,
  //     [prompt]:  event.target.inputValue, 
  //   })
  // }

  const getForm = (type, prompt) => {
    let field = '';
    if(type === 'short'){
      field = <input type='text' required className={`${getType(type)}`}  placeholder={prompt} 
      value={inputValue[prompt]} onChange={e => setInputValue({...inputValue, [prompt]: e.target.value})}></input>;
    }
    else if(type === 'long'){
      field = <textarea type='text' className={`${getType(type)}`} placeholder={prompt}></textarea>;
    }
    else if(type === 'radio'){
      field = 
      <div className='radio-container'>
        <p>What can we help you today?</p>
        <div className='radio-button'>
          <input type='radio' name='topic' id='radio1' required onChange={e => setInputValue({...inputValue, [prompt]: e.target.value})}></input>
          <label for='radio1'>General</label>
        </div>
        <div className='radio-button'>
          <input type='radio' name='topic' id='radio2' required onChange={e => setInputValue({...inputValue, [prompt]: e.target.value})}></input>
          <label for='radio2'>Bug</label>
        </div>
      </div>
    }
    return field;
  }

  return (
    <div className='form'>
        {label !== '' ? <p>{label}<sup className={symbol}>{symbol}</sup></p> : <p>&nbsp;<sup>&nbsp;</sup></p>}
        {getForm(type, prompt)}
    </div>
  )
}

export default Form