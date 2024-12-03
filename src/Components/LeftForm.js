import React, {useContext} from 'react'
import Form from './Form'
// import { SuppContext } from '../Contexts/SupportContext'

const LeftForm = () => {
  // const {req, setReq} = useContext(SuppContext);
  
  return (
    <div className='left-form'>
        <div className='name'>
                <Form label={'Name '} prompt={'First'} symbol={'*'} type={'short'}/>
                <Form label={''} prompt={'Last'} type={'short'}/>
        </div>
        <Form label={'Email '} prompt={'Email'} symbol={'*'} type={'short'}/>
        <Form label={'Topic '} symbol={'*'} type={'radio'}/>
    </div>
  )
}

export default LeftForm