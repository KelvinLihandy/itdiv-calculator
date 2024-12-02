import React from 'react'
import Form from './Form';

const LeftForm = () => {
  return (
    <div className='left-form'>
        <div className='name'>
                <Form label={'Name '} prompt={'First'} symbol={'*'} type={'short'}/>
                <Form label={''} prompt={'Last'} type={'short'}/>
        </div>
        <Form label={'Email '} prompt={'Email Address'} symbol={'*'} type={'short'}/>
        <Form label={'Topic '} symbol={'*'} type={'radio'}/>{/*radio maybe not form?*/ }
    </div>
  )
}

export default LeftForm