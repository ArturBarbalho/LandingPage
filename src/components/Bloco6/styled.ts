import styled from 'styled-components'
import { css } from 'styled-components'
export const Div=styled.div`
background-color: purple;
display: flex;
margin: auto;
padding-left: 20px;
padding-right: 20px;
justify-content: center;
@media(max-width:930px){
    flex-direction: column;
    padding-left: 25%;
}
`
type props={marginTop:string}
export const Card=styled.div<props>`
${({marginTop})=>css`
color: white;

width: 60%;
max-width: 350px;
margin-left: 10px;
min-width: 250px;
margin-top: 40px;
@media(min-width: 930px){
margin-top: ${marginTop}; 
padding: 30px;
}
p{font-size: larger;}
img{width:100px;}
`}
`  

export const DownImg=styled.div`
margin-top: 450px;
img{
width:500px ;
@media(max-width:510px){
    width: 350px;
}
}

`

export const DownCard=styled.div`
margin-top: 600px;
width: 400px;
font-size: larger;
@media(max-width: 930px){
    margin-top:60px;
    margin-left:10px ;
    width: 330px;
}
p{
    margin-top: 50px;
}
`
export const DivDown=styled.div`
position: absolute;
display: flex;
width: 100%;
justify-content: space-around;

@media(max-width: 930px){
    margin-top:1700px;
    left: 0;
    flex-direction: column;
    align-items: center;
}
`
export const Button=styled.div`
border: solid 2px red;
width: 150px;
border-radius: 2px;
text-align: center;
height: 30px;
padding-top: 10px;
&&:hover{
    background-color: red;
    cursor: pointer;
}
`

export const Behind=styled.div`
background-color: red;
width: 200px;
height: 300px;
position: absolute;
z-index:-1;
margin-top: 500px;
margin-left: 350px;
@media(max-width:600px){
    margin-top:300px ;
    margin-left:155px ;
}
`