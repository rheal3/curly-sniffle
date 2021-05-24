import styled from 'styled-components'
import ServiceCard from './ServiceCard'
import {useState, useEffect} from 'react'

const BookAppointmentBackground = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    background: rgb(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
`

const BookAppointmentContainer = styled.div`
    width: 900px;
    height: 90vh;
    border-radius: 5px;
    box-shadow: 2px 3px 10px 2px rgba(0,0,0,0.47);
    background: #FFF;
`

const AppointmentStepsContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    ul {
        list-style-type: none;
        text-align: left;
        li {
            margin-bottom: 24px;
            h5 {
                margin-top: 0;
                margin-bottom: 16px;
                font-size: 1rem;
                line-height: 1.625;
            }
        }
    }
`

const AppointmentContentContainer = styled.div`
    flex-grow: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
`

// const StaffCard = () => 
//     <div>
//         {/* <span>image of letter in circle</span> */}
//         <h5>Name</h5>
//     </div>

const ServiceSelectedStyle = styled.div`
    background: #F5F6F7;
    padding: 16px 24px;
    border-radius: 4px;
    p {
        color: rgba(0, 0, 0, 0.6);
        margin: 0;
        font-size: 0.875rem;
        line-height: 1.5;
        span {
            color: #000;
        }
    }
`
const ServiceSelected = ({appointmentType}) =>
    <li>
        <h5>Select service</h5>
        <ServiceSelectedStyle>
            <p>
                <span>{appointmentType.title}</span>
                <br />
                {appointmentType.length}
            </p>
        </ServiceSelectedStyle>     
    </li>

const BookAppointment = () => {
    const [appointmentType, setAppointmentType] = useState()
    const [staff, setStaff] = useState()
    const [dateTime, setDateTime] = useState()
    const [customerDetails, setCustomerDetails] = useState()
    const [currentPage, setCurrentPage] = useState("service")

    const aptDetails = {
        id: 43,
        title: 'super cut',
        price: '$30.00',
        length: '1 hour'
    }

    useEffect(() => {
        // when appointmentType changes change what is displayed in side bar
        console.log(appointmentType)
    }, [appointmentType])

    return (
        <BookAppointmentBackground>
            <BookAppointmentContainer>
                <div>
                    close - fixed top right
                </div>
                <div style={{height: '80px'}}>
                    header - title top left
                </div>
                <div className='row' style={{display: 'flex'}}>
                    <AppointmentStepsContainer>
                        <ul>
                        {appointmentType ?
                            <ServiceSelected appointmentType={appointmentType}/>
                        : (currentPage === "service") ? <li><h5 style={{textDecoration: 'underline'}}>Select service</h5></li>
                        : <li><h5>Select service</h5></li>}
                        {staff ?
                            <li>
                                <h5>Select staff</h5>
                            </li>
                        : <li><h5 style={{color: '#adb1b5'}}>Select staff</h5></li>}
                        {dateTime ?
                            <li>
                                <h5>Select date and time</h5>
                            </li>
                        : <li><h5 style={{color: '#adb1b5'}}>Select date and time</h5></li>}
                        {customerDetails ?
                            <li>
                                <h5>Enter your details</h5>
                            </li>
                        : <li><h5 style={{color: '#adb1b5'}}>Enter your details</h5></li>}
                        </ul>
                    </AppointmentStepsContainer>
                    <AppointmentContentContainer>
                        <ServiceCard setAppointmentType={setAppointmentType} appointmentDetails={aptDetails}/>
                    </AppointmentContentContainer>
                </div>
                <div>
                    {/* footer - next page and back buttons */}
                    <div>
                        <button>Continue</button>
                    </div>
                </div>
            </BookAppointmentContainer>
        </BookAppointmentBackground>
    )
}

export default BookAppointment