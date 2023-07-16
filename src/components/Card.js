import React from 'react'
import styled from 'styled-components';

const StyledCard = styled.div
`
    border: solid 1px gray;
    margin: 1rem;
    padding: 1rem;
`
const StyledImg = styled.img
`
    width: 20rem;
    height: 15rem

`

const Card = ({name, calorie, macro, image}) => {
    return (
        <>
            <StyledCard>
                <StyledImg src={image} alt={name} />
                <h3>{name}</h3>
                <p>Calorie: {calorie}</p>
                <p>Macro: P {macro['p']} F {macro['f']} C {macro['c']}</p>
            </StyledCard>    
        </>
    )
}

export default Card