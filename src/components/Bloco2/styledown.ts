import styled,{css} from 'styled-components'

export const Container2=styled.div`
margin-top: 100px;
width: 100%;
height: 1100px;
@media(max-width:700px){
   height: 1700px; 
}
.ContQ{
    width:700px;
    @media(max-width:700px){
        width: 300px;
    }
}
` 
type props={
heigth?:string
marginTop?:string
color?:string
width?:string
}
export const Cube=styled.div<props>`
${({heigth, marginTop, color, width})=>css`

width: ${width};
height: ${heigth};
background-color: ${color};
z-index: 1;
margin-top: ${marginTop};
`}`
export const DivBehind=styled.div`
display: flex;
position: absolute;
justify-content: space-between;
width: 80%;
margin-left:10% ;
max-width: 1200px;
@media(min-width: 1800px){
    margin-left: 20%;
}

`
export const Div=styled.div`
position: absolute;
z-index:2;
margin-top: 30px;
max-width: 1200px;
margin-left: 5% ;
display: flex;
@media(max-width: 400px){
    margin-left:0;
    
}


@media(min-width: 1800px){
    margin-left: 25%;
    width: 80%;

}
@media(max-width:1130px){
  flex-direction: column;
}
.div{
    display: flex;
    @media(max-width:700px){
        flex-direction: column;
        //margin-left: 30px;
        
    }
}
.divdown{
    
    @media(max-width:700px){
        //margin-left: 30px; 
        div{
            height: 300px;
            
        }
    }
    @media(min-width:700px) and (max-width:1150px){
        div{
            height: 300px;
            width: 330px;
        }
    }

}
`
type sizes={
    width?:string
    heigth?:string
    BgColor?:string
}
export const Img=styled.img<sizes>`
${({width,heigth})=>css`
width: 350px;
height: ${heigth};
margin: 5px;
`
}
` 

export const Card=styled.div<sizes>`
${({heigth,color,BgColor})=>css`
background-color: ${BgColor};
width: 350px;
height: ${heigth};
margin-top: 5px;
margin-left:5px;
margin-right: 5px;
color: ${color};
text-align: center;
p{
    font-size: larger;
}
`}
`

export const Background=styled.div`
background-color: purple;
width: 100%;
height:900px;
position: absolute;
margin-top: 200px;
@media(max-width:700px){
    height: 1500px;
}
`