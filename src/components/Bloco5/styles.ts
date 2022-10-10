import styled from 'styled-components'
export const Div = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
max-width: 1200px;
margin: auto;
@media(max-width:1200px){
    max-width: 800px;
}

.text{
font-size:25px;
}

`
export const Numbers=styled.h1`
text-align: center;
font-size: 80px;
color: red;
margin-bottom: 0;
`
export const Tittle=styled.h1`
text-align: center;
font-size: 50px;

`

export const Card=styled.div`
margin-left: 50px;
margin-right:50px;
`