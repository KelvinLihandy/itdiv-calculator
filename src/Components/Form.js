import React from 'react'

const getType = (type) => {
  const types = {
    'short': 'form-short',
    'long': 'form-long',
  }
  return types[type];
}

const getForm = (type, prompt) => {
  let field = '';
  if(type === 'short'){
    field = <input type='text' required className={`${getType(type)}`} placeholder={prompt}></input>;
  }
  else if(type === 'long'){
    field = <textarea type='text' className={`${getType(type)}`} placeholder={prompt}></textarea>;
  }
  else if(type === 'radio'){
    field = <input type='radio' name='topic'></input>;
  }
  return field;
}

const Form = ({label, prompt, symbol, type}) => {
  return (
    <div className='form'>
        {label !== '' ? <p>{label}<sup>{symbol}</sup></p> : <p>&nbsp;<sup>&nbsp;</sup></p>}
        {getForm(type, prompt)}
    </div>
  )
}

export default Form