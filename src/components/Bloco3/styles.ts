import styled from 'styled-components'
export const Behind = styled.div`
position: absolute;
background-color: red;
margin-top: 500px;
width: 70%;
height: 1000px;
margin-left:30%;
z-index: 1;
`
export const Container=styled.div`
display: flex;
width: 90% ;
justify-content: space-between;
z-index:2;
position: absolute;
background-color: white;
max-width: 1200px;
margin-left: 5%;

@media(min-width:1500px){
   margin-left: 20% ; 
}
@media(max-width:700px){
    flex-direction:column;
    width:300px;
    margin-left:10px ;
    margin-top: 200px;
}
`
export const Right=styled.img`
width: 370px;
height: 570px;
@media (min-width:1200px) {
    width: 450px;
    margin-left: 100px;
    height: 670px;
}
`
export const Icon=styled.img`
width: 30px;
height: 30px;
margin-top: 20px;
`
export const Card=styled.div`
display: flex;

@media(max-width:700px){
 width: 300px;  
}

div{
    margin-left: 10px;
}
`
export const Div=styled.div`
height: 600px;
@media(max-width:700px){
    height: 1100px;
}
h2{
    font-size: 30px;
}
p{
    font-size:larger ;
}
` 