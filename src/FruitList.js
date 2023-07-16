import React from 'react'
import Card from './components/Card'
import { useState } from 'react'
import styled from 'styled-components';

const StyledDflex = styled.div
`
    display: flex;
    flex-wrap: wrap;
`
const StyledH1 = styled.h1
`
    text-align: center;
    text-decoration:underline;
`
const FruitList = () => {
    const fruitList = [
        {
            name: "Orange",
            calorie: 46,
            macro: {
                p: 11.8,
                f: 0.1,
                c: 0.9
            },
            image: 'images/orange.jpg'
        },
        {
            name: "Apple",
            calorie: 57,
            macro: {
                p: 15.5,
                f: 0.2,
                c: 0.1
            },
            image: 'images/apple.jpg'
        },
        {
            name: "Kiwi fruit",
            calorie: 53,
            macro: {
                p: 13.5,
                f: 0.1,
                c: 1.0
            },
            image: 'images/kiwi.jpg'
        },
        {
            name: "Peach",
            calorie: 40,
            macro: {
                p: 10.2,
                f: 0.1,
                c: 0.6
            },
            image: 'images/peach.jpg'
        },

    ]
    const [fruits, setFruits] = useState(fruitList);
    return (
        <>
            <StyledH1>Fruit List</StyledH1>
            <StyledDflex>
                {fruits.map(fruit=>{
                    return (
                        <Card {...fruit}/>
                    )
                })}
            </StyledDflex>
        </>
    )
}

export default FruitList