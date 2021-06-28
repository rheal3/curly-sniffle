import styled from 'styled-components'
import ServiceCard from './ServiceCard'
import StaffCard from './StaffCard'
import {useState, useEffect} from 'react'
import {getServices, getStaff} from '../api'

const BookAppointmentBackground = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 3;
    background: rgb(0, 0, 0, 0.6);
    display: ${props => props.aptOverlay === true ? "flex" : "none"};
    justify-content: center;
    align-items: center;
`

const BookAppointmentContainer = styled.div`
    width: 900px;
    height: 650px;
    border-radius: 5px;
    box-shadow: 2px 3px 10px 2px rgba(0,0,0,0.47);
    background: #FFF;
    .flex-row {
        display: flex;
    }
`

const NavigationContainerStyle = styled.div`
    height: 72px;
    display: flex;
    justify-content: space-between;
    margin: 0px 50px;
    button {
        background: #FFF;
        border: ${props => props.grey ? "1px solid #000" : "1px solid #B3B3B3"};
        border-radius: 2px;
        padding: 5px 40px;
        font-weight: bold; 
        font-size: 16px;
        margin: 20px 0;
        cursor: pointer;
    }
    button.continueBtn {
        background: ${props => props.grey ? "#000" : "#B3B3B3"};
        color: #FFF;
    }
`

const HeaderContainer = styled.div`
    height: 80px;
    position: relative;
    i {
        font-size: 30px;
        position: absolute;
        top: 0px;
        right: 0px;
        margin: 10px 15px;
        cursor: pointer;
    }
    .header {
        text-align: left;
        padding: 30px;
        font-size: 25px;
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
    .edit {
        font-size: 1rem;
        cursor: pointer;
        color: rgba(0,0,0,0.6);
    }
    .edit:hover {
        text-decoration: underline;
        color: #000;
    }
`

const ContentContainer = styled.div`
    flex-grow: 4;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
    height: 480px;
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
const ServiceSelected = ({appointment, setCurrentPage}) =>
    <li>
        <h5>Select service - <span class='edit' onClick={() => {setCurrentPage("service")}}>Edit</span></h5>
        <ServiceSelectedStyle>
            <p>
                <span>{appointment.title}</span>
                <br />
                {appointment.duration}
            </p>
        </ServiceSelectedStyle>     
    </li>

const StaffSelected = ({staff, setCurrentPage}) => 
    <li>
        <h5>Select service - <span class='edit' onClick={() => {setCurrentPage("staff")}}>Edit</span></h5>
        <ServiceSelectedStyle>
            <p>
                <span>{staff.first_name} {staff.last_name}</span>
            </p>
        </ServiceSelectedStyle>     
    </li> 


const BookAppointment = ({aptOverlay, setAptOverlay}) => {
    const [appointment, setAppointment] = useState({})
    const [currentPage, setCurrentPage] = useState("service")
    const nextPage = currentPage === "service" && appointment[currentPage] ? "staff" 
        : currentPage === "staff" && appointment[currentPage] ? "dateTime" 
        : currentPage === "dateTime" && appointment[currentPage] ? "customerDetails" 
        : currentPage 
    const backPage = currentPage === "customerDetails" ? "dateTime" 
        : currentPage === "dateTime" ? "staff" 
        : currentPage === "staff" ? "service" 
        : currentPage 
    
    const [services, setServices] = useState([])
    const [staff, setStaff] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const allServices = await getServices()
            setServices(allServices)
            const allStaff = await getStaff()
            setStaff(allStaff)
        }
        fetchData()
    }, [])

    const contentSwitch = (currentPage) => {
        switch (currentPage) {
            case "service":
                return services.map((details, i) => <ServiceCard appointment={appointment} setAppointment={setAppointment} appointmentDetails={details}/>)
            case "staff":
                return staff.map((details, i) => <StaffCard appointment={appointment} setAppointment={setAppointment} staffDetails={details}/>)
            case "dateTime":
                return <p>dateTime page</p>
            case "customerDetails":
                return <p>customerDetails page</p>
            default:
                break;
        }
    }

    return (
        <BookAppointmentBackground aptOverlay={aptOverlay}>
            <BookAppointmentContainer>
                <HeaderContainer>
                    <i className="fas fa-times" onClick={() => {setAptOverlay(false)}}></i>
                    <div className="header">
                        The Curly Sniffle
                    </div>
                </HeaderContainer>
                <div className='row flex-row'>
                    <AppointmentStepsContainer>
                        <ul>
                        {appointment.service ?
                            <ServiceSelected appointment={appointment.service} setCurrentPage={setCurrentPage} />
                        : (currentPage === "service") ? <li><h5 class="underline">Select service</h5></li>
                        : <li><h5>Select service</h5></li>}
                        {appointment.staff ?
                            <StaffSelected staff={appointment.staff} setCurrentPage={setCurrentPage} />
                        : <li><h5 style={{color: '#adb1b5'}}>Select staff</h5></li>}
                        {appointment.dateTime ?
                            <li>
                                <h5>Select date and time</h5>
                            </li>
                        : <li><h5 style={{color: '#adb1b5'}}>Select date and time</h5></li>}
                        {appointment.customerDetails ?
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
                <NavigationContainerStyle grey={appointment[currentPage] ? true : false} >
                        <button onClick={() => {setCurrentPage(backPage)}}>Back</button>
                        <button className="continueBtn" onClick={() => {setCurrentPage(nextPage)}}>Continue</button>
                </NavigationContainerStyle>
            </BookAppointmentContainer>
        </BookAppointmentBackground>
    )
}

export default BookAppointment