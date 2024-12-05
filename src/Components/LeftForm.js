import React, {useContext} from 'react'
import Form from './Form'
import { SuppContext } from '../Contexts/SupportContext'

const LeftForm = () => {
  const {inputValue, buttonState} = useContext(SuppContext);
  
  return (
    <div className='left-form'>
        <div className='name'>
                <Form label={'Name '} prompt={'First'} symbol={'*'} type={'short'}/>
                <Form label={''} prompt={'Last'} type={'short'}/>
        </div>
        <Form label={'Email '} prompt={'Email'} symbol={'*'} type={'short'}/>
        <Form label={'Topic '} prompt={'Topic'} symbol={'*'} type={'radio'}/>
        {/* <p>{inputValue.First.length}{inputValue.Last.length}{inputValue.Email.length}{inputValue.Topic.length}{buttonState.disabled}</p> */}
    </div>
  )
}

export default LeftForm