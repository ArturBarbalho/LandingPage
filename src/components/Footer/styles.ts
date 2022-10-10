import styled from 'styled-components'
export const Footer=styled.div`
background-color: purple;
margin-top: 800px ;
color: white;
height: 200px;
display: flex;
align-items: center;
justify-content: space-around;

@media(max-width:930px){
    margin-top: 1300px;

}
@media(max-width:600px){
   flex-direction: column;
    padding-top: 50px;
   
}
`
export const Button=styled.button`
border: solid red 2px;
width: 150px;
height: 50px;
border-radius: 3px;
background-color: purple;
color: white;
&&:hover{
    background-color: red;
    cursor: pointer;
}
`
export const Pics=styled.div`
display: flex;
justify-content: space-between;
width: 200px;

`
export const Img=styled.img`
    width:40px;
    &&:hover{cursor: pointer;}

`