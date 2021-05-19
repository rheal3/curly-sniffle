import './App.css';
import styled from 'styled-components'
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom'
import HomePage from './Home/Page'
import {useState} from 'react'

const NavItemStyle = styled.div``

const NavBarContainer = styled.div`
    display: ${props => props.overlay === true ? "block" : "none"};
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background: rgba(0, 0, 0, .5);
    overflow: hidden;
    position: fixed;
    top: 0px;
    left: 0px;
`

const NavItem = ({path, title}) => 
    <NavItemStyle>
        <Link to={path}>{title}</Link>
    </NavItemStyle>

// NavItem.propTypes = {
//     path: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
// }

const NavBar = ({overlay}) => 
    <NavBarContainer overlay={overlay}>
        <NavItem path="/" title="Home"></NavItem>
        <NavItem path="/services" title="Services"></NavItem>
        <NavItem path="/faq" title="FAQ"></NavItem>
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
    /* background-color: rgba(0,0,0,0.5); Black background with opacity */
`

// const toggleOverlay = (overlay) => setOverlay(!overlay)

// const NavOverlay = ({overlay}) => 
//     <NavOverlayContainer>
//         <span className="menu-icon" onClick={() => {
//             setOverlay(!overlay)
//             console.log(overlay)
//         }}>&#9776;</span>
//     </NavOverlayContainer>

const ContentContainer = styled.div``

const Content = () =>
    <Switch>
        <ContentContainer>
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
