import React from 'react'
import WrapperSupp from '../Components/WrapperSupp'
import HeaderSupport from '../Components/HeaderSupport'
import FormContainer from '../Components/FormContainer'
import LeftForm from '../Components/LeftForm'
import RightForm from '../Components/RightForm'
import SendSupport from '../Components/SendSupport'
const Support = () => {
    return (
        <div className='support'>
            <WrapperSupp>
                <HeaderSupport />
                <FormContainer>
                    {/*combine this at a component that return different component*/}
                    <LeftForm />
                    <RightForm>
{/* descr */}
                    </RightForm>
                </FormContainer>
                <SendSupport />
            </WrapperSupp>
        </div>
    )
}

export default Support;