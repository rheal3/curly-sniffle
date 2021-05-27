import './App.css';
import styled from 'styled-components'
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom'
import {useState} from 'react'
import HomePage from './Home/Page'
import Services from './Services/Page'
import BookAppointment from './BookAppointment/Page'
import FAQ from './FAQ/Page'

const NavItemStyle = styled.div`
    height: 100vh;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.color || "#000"};
    a {
        color: #FFF;
        text-decoration: none;
        font-size: 32px;
        font-family: 'Lucida Grande';
    }
`

const NavItem = ({path, title, color, overlay, setOverlay}) => {
    const toggleOverlay = () => {
        console.log('clicked')
        setOverlay(!overlay)
    }
    return (
        <NavItemStyle color={color}>
            <Link to={path} onClick={toggleOverlay}>{title}</Link>
        </NavItemStyle>
    )
}

const NavBarContainer = styled.div`
    display: ${props => props.overlay === true ? "flex" : "none"};
    height: 100vh;
    width: 100vw;
    z-index: 1;
    overflow: hidden;
    position: fixed;
    flex-direction: row;
`

const NavBar = ({overlay, setOverlay}) => 
    <NavBarContainer overlay={overlay} id='nav-container'>
        <NavItem path="/" title="Home" color="#B7094C" overlay={overlay} setOverlay={setOverlay}></NavItem>
        <NavItem path="/services" title="Services" color="#A01A58" overlay={overlay} setOverlay={setOverlay}></NavItem>
        <NavItem path="/faq" title="FAQ" color="#892B64" overlay={overlay} setOverlay={setOverlay}></NavItem>
    </NavBarContainer>

const NavOverlayContainer = styled.div`
    z-index: 2;
    position: fixed;
    align-self: flex-end;
    padding-top: 10px;
    display: flex;
    .menu-icon {
        font-size: 35px;
        padding-right: 30px;
        cursor: pointer;
    }
    button {
        border: 1px solid #000;
        border-radius: 2px;
        padding: 5px 10px;
        font-weight: bold; 
        font-size: 16px;
        /* margin: ${props => props.overlay === true ? "7px 15px 4px 0" : "10px 15px 4px 0"}; */
        margin: 10px 15px 4px 0;
        cursor: pointer;
        background: #000;
        color: #FFF;
        display: ${props => props.overlay === false ? "flex" : "none"};
    }

`

const ContentContainer = styled.div``

const Content = () =>
    <Switch>
        <ContentContainer>
            <Route exact path="/" component={HomePage} />
            <Route path="/services" component={Services} />
            <Route path="/faq" component={FAQ} />
        </ContentContainer>
    </Switch>

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

function App() {
    const [overlay, setOverlay] = useState(false)
    const [aptOverlay, setAptOverlay] = useState(false)

    return (
        <AppContainer className="App">
            <Router>
                <NavOverlayContainer overlay={overlay}>
                    <button onClick={() => {setAptOverlay(true)}}>book appointment</button>
                    {!overlay ? 
                        <span className="menu-icon" onClick={() => {setOverlay(!overlay)}}>&#9776;</span> : 
                        <span className="menu-icon" onClick={() => {setOverlay(!overlay)}}>&#x2715;</span>
                    }  
                </NavOverlayContainer>
                <NavBar overlay={overlay} setOverlay={setOverlay}/>
                <BookAppointment aptOverlay={aptOverlay} setAptOverlay={setAptOverlay}/>
                <Content />
            </Router>
        </AppContainer>
    );
}

export default App;
