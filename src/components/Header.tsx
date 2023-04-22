import styled from 'styled-components'

export const Header = () => {
    return (
        <Container>
            <div>Panic Scheduler</div>
        </Container>
    )
}

const Container = styled.div`
    font-size: 2rem;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid white;
`
