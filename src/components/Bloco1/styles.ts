import styled,{css} from 'styled-components'



export const Main = styled.main`
background-image: url("bg1.jpg") ;
color: aliceblue;
background-size: 1500px;
background-repeat: repeat-x;
h1{
    
    font-size: 90px;
    text-align: center;
    margin-top: 0px ;
    padding-top: 150px;
    text-shadow: 2px 2px black;
    @media (max-width:780px){
        font-size: 50px;
        padding-top: 70px;
    }
}
p{
    text-align: center;
    max-width: 900px;
    margin: auto;
    padding-left: 20px;
    padding-right: 20px;
    font-size: larger;
    text-shadow: 2px 2px 2px  black;
    padding-bottom: 100px;
    width: 90%;

}

`
type Color = {
    color:'brown'|'black'|'gray'
}
const cores = {
    brown:  'rgb(111,97,70)',
    black:'rgb(10,5,6)',
    gray:'rgb(105,105,105)'
}
export const Card = styled.div<Color>`
${({color})=> css`
h1{
    font-size: 40px;
    padding-top: 10px;
    text-shadow: none;
    text-align:left;
    margin-left: 25px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
p{
    padding-bottom:10px ;
    color: white;
    text-shadow:1px black;
    text-align: left;
    width: auto;
    padding-left:13px ;
    padding-right:13px;
    overflow: hidden;
    max-height: 200px;
    
}
width: 100%;
background-color: ${cores[color]} ;
padding: 10px;
min-width: 200px;
max-width: 350px;
border-radius: 10px;
min-height: 430px;


div{
    background-color: white;
    width: 50px;
    height: 2px;
    margin-bottom: 30px ;
    margin-left: 30px;
}

@media (max-width:780px){
    width:300px;
    margin-bottom: 20px;
}
z-index: 2;
margin-top: 30px;
`}
`

export const CardCont = styled.div`
display: flex;
justify-content: space-around;
max-width: 1300px;
margin: auto;
padding-bottom: 30px;
@media (max-width:780px){
    flex-direction: column;
    align-items:center;
}

`
export const Traço = styled.div`
width: 3px;
height: 90px;
background-color: brown;
margin: auto;
margin-bottom: 50px ;
margin-top: 20px;
`

type props = {
    color:'red'|'blue'|'gray'
    height:string
    marginTop?:string
}

export const Behind=styled.div<props>`
${({color,height,marginTop})=>css`
width: 32%;
height: ${height};
background-color: ${color};
position: absolute;
z-index: 1;
min-width: 250px;
max-width: 400px;
margin-left: 10px;
border-radius: 10px;
margin-top:${marginTop} ;

@media (max-width:780px) {
    width: 320px;
}
`} 
`

export const Div=styled.div`

display: flex;
width: 30%;
justify-content: center;
max-height: 500px;
@media (max-width:780px){
    width: 300px;
}
`