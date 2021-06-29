import styled from 'styled-components'

const HomePageContainer = styled.div`
    h1 {
        margin-top: 56px;
        margin-bottom: 0px;
    }
`

const HomePage = () => 
    <HomePageContainer>
        <h1>Home</h1>
        <h2>Details that are important</h2>
    </HomePageContainer>

export default HomePage