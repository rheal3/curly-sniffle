import styled from 'styled-components'
import ServiceCard from './ServiceCard'
import StaffCard from './StaffCard'
import {useState, useEffect} from 'react'
import {aptDetails, staffDetails} from './api'

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
    button {
        /* TODO if okay to move to next page change opacity of continue */
        background: #FFF;
        border: 1px solid #000;
        border-radius: 2px;
        padding: 5px 40px;
        font-weight: bold; 
    }
    button.continueBtn {
        background: #000;
        color: #FFF;
    }
    .navigation {
        display: flex;
        justify-content: space-between;
        margin: 0px 50px;
    }
`

const AppointmentStepsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 235px;
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

const ContentContainer = styled.div`
    flex-grow: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ServiceSelectedStyle = styled.div`
    background: #F5F6F7;
    padding: 16px 24px;
    border-radius: 4px;
    p {
        color: rgba(0, 0, 0, 0.6);
        margin: 0;
        font-size: 15px;
        line-height: 1.5;
        width: 147px;
        span {
            color: #000;
        }
    }
    .underline {
        text-decoration: underline;
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

const StaffSelected = ({staff}) => 
    <li>
        <h5>Select service</h5>
        <ServiceSelectedStyle>
            <p>
                <span>{staff.name}</span>
            </p>
        </ServiceSelectedStyle>     
    </li> 


const BookAppointment = () => {
    const [appointmentType, setAppointmentType] = useState()
    const [staff, setStaff] = useState()
    const [dateTime, setDateTime] = useState()
    const [customerDetails, setCustomerDetails] = useState()
    // const [appointment, setAppointment] = useState({'service': {}}) // TODO (continue btn) if appointment[currentPage] then can move to next page
    const [currentPage, setCurrentPage] = useState("service") //should this just be a const ? not useState?
    let nextPage = currentPage === "service" ? "staff" : currentPage === "staff" ? "dateTime" : currentPage === "dateTime" ? "customerDetails" : currentPage === "customerDetails"

    const contentSwitch = (currentPage, nextPage) => {
        switch (currentPage) {
            case "service":
                nextPage = "staff"
                return aptDetails.map((details, i) => <ServiceCard setAppointmentType={setAppointmentType} appointmentDetails={details}/>)
            case "staff":
                nextPage = "dateTime"
                return staffDetails.map((details, i) => <StaffCard setStaff={setStaff} staffDetails={details}/>)
            case "dateTime":
                nextPage = "customerDetails"
                return <p>dateTime page</p>
                // break;
            case "customerDetails":
                return <p>customerDetails page</p>
                // setNextPage("") // <<< what's next?
                // break;
            default:
                break;
        }
    }


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
                        : (currentPage === "service") ? <li><h5 class="underline">Select service</h5></li>
                        : <li><h5>Select service</h5></li>}
                        {staff ?
                            <StaffSelected staff={staff} />
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
                    <ContentContainer>
                        {contentSwitch(currentPage, nextPage)}
                    </ContentContainer>
                </div>
                <div>
                    {/* footer - next page and back buttons */}
                    <div className="navigation">
                        <button>Back</button>
                        <button className="continueBtn" onClick={() => {setCurrentPage(nextPage)}}>Continue</button>
                    </div>
                </div>
            </BookAppointmentContainer>
        </BookAppointmentBackground>
    )
}

export default BookAppointment