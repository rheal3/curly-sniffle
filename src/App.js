import './App.css';
import styled from 'styled-components'
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom'
import HomePage from './Home/Page'

const NavItemStyle = styled.div``

const NavBarContainer = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background: rgba(0, 0, 0, .8);
    overflow: hidden;
    position: fixed;
    top: 0px;
    left: 0px;
`

const NavItem = ({path, title}) => 
    <NavItemStyle>
        <Link to={path}>{title}</Link>
    </NavItemStyle>

const NavBar = () => 
    <NavBarContainer>
        <NavItem path="/" title="Home"></NavItem>
        <NavItem path="/services" title="Services"></NavItem>
        <NavItem path="/faq" title="FAQ"></NavItem>
    </NavBarContainer>

const NavOverlayContainer = styled.div`
    position: absolute;
    align-self: flex-end;
    z-index: 1;
    .menu-icon {
        font-size: 30px;
        padding: 28px 35px 0px 0px;
        cursor: pointer;
    }
`

const NavOverlay = () => 
    <NavOverlayContainer>
        <span className="menu-icon">&#9776;</span>
    </NavOverlayContainer>

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
    return (
        <AppContainer className="App">
            <Router>
                <NavOverlay />
                <NavBar />
                <Content />
            </Router>
        </AppContainer>
    );
}

export default App;
