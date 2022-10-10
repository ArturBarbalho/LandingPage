import styled from 'styled-components'

export const Div=styled.div`
height: 3000px;
@media(min-width: 1465px){
    height: 2000px;
}
@media(max-width:800px){
    height: 4600px;
    margin-top: 400px;
}
margin-top: 200px;

` 
export const Container = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
position: absolute;
z-index: 2;
@media(min-width:1100px){
margin-left:20%;
}

`
export const Img = styled.img`

width: 320px;
height: 400px;
margin: 20px;
`
export const Row = styled.div`
display: flex;
flex-wrap: wrap;
`

export const Card = styled.div`

width: 320px;
height: 400px;
margin: 20px;
p{
    font-size: larger;
    margin-top: 50px;
}
`
export const Traço=styled.div`
width: 70px;
background-color: black;
height: 3px;
`