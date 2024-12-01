import React from 'react'
import Form from '../Components/Form';
import WrapperSupp from '../Components/WrapperSupp'
import HeaderSupport from '../Components/HeaderSupport'
import FormContainer from '../Components/FormContainer'
import LeftForm from '../Components/LeftForm'
import SendSupport from '../Components/SendSupport'
const Support = () => {
    return (
        <div className='support'>
            <WrapperSupp>
                <HeaderSupport />
                <FormContainer>
                    <LeftForm />
                    <Form>
{/* descr */}
                    </Form>
                </FormContainer>
                <SendSupport />
            </WrapperSupp>
        </div>
    )
}

export default Support;