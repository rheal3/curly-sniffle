import './App.css';
import styled from 'styled-components'
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom'
import HomePage from './Home/Page'
import {useState} from 'react'

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

const NavItem = ({path, title, color}) => 
    <NavItemStyle color={color}>
        <Link to={path}>{title}</Link>
    </NavItemStyle>


const NavBarContainer = styled.div`
    display: ${props => props.overlay === true ? "flex" : "none"};
    height: 100vh;
    width: 100vw;
    z-index: 1;
    overflow: hidden;
    position: fixed;
    flex-direction: row;
`

const NavBar = ({overlay}) => 
    <NavBarContainer overlay={overlay} id='nav-container'>
        <NavItem path="/" title="Home" color="#B7094C"></NavItem>
        <NavItem path="/services" title="Services" color="#A01A58"></NavItem>
        <NavItem path="/faq" title="FAQ" color="#892B64"></NavItem>
    </NavBarContainer>

const NavOverlayContainer = styled.div`
    z-index: 2;
    position: absolute;
    align-self: flex-end;

    .menu-icon {
        font-size: 30px;
        padding: 28px 35px 0px 0px;
        cursor: pointer;
    }
`

const ContentContainer = styled.div``

const Content = () =>
    <Switch>
        <ContentContainer>
            <Route path="/services" component={HomePage} />
            <Route path="/faq" component={HomePage} />
            <Route exact path="/" component={HomePage} />
        </ContentContainer>
    </Switch>

const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

function App() {
    const [overlay, setOverlay] = useState(false)

    return (
        <AppContainer className="App">
            <Router>
                <NavOverlayContainer>
                    <span className="menu-icon" onClick={() => {setOverlay(!overlay)}}>&#9776;</span>
                </NavOverlayContainer>
                <NavBar overlay={overlay}/>
                <Content />
            </Router>
        </AppContainer>
    );
}

// function App() {
//     return (
//         <AppContainer className="App">
//             <Router>
//                 <div className="menu-btn">
//                     <span className="menu-icon">&#9776;</span>
//                 </div>
//                 <div className="links">
//                     <Link path="/">First link</Link>
//                     <Link path="/">First link</Link>
//                 </div>
//                 {/* <NavBar /> */}
//                 <Content />
//             </Router>
//         </AppContainer>
//     );
// }

export default App;
