import React from 'react'
import Form from './Form'

const RightForm = () => {
  return (
    <div className='right-form'>
        <Form label={'Description '} prompt={'Description Report'} symbol={'optional'} type={'long'}/>
    </div>
  )
}

export default RightForm