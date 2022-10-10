import styled,{css} from 'styled-components'

export const Header = styled.header`
margin: auto;
max-width: 1200px;
`
export const Div = styled.div`
color: black;
display: flex;
justify-content: space-between;
margin-left: 20px;
margin-right: 20px;
`
export const Menu = styled.img`
width:40px ;
height: 50px;
margin-top: 15px;
cursor: pointer;
`

type dsp={
    display:boolean
}
export const NavBar = styled.div<dsp>`
${({display})=>css`
position: absolute;
width: 300px;
background-color: black;
height: 100%;
display:${display ? 'block' : 'none' };
z-index:3;
@media (max-width:700px){
width: 50%;
}
color: aliceblue;
@keyframes fl{
0%{
    transform: translateX(-300px);
    
}

}
animation: fl 1s;

h2{
    padding-left: 40px;
}

`}`

export const BlackDiv=styled.div<dsp>`
${({display})=>css`
position: absolute;
width: 100%;
height: 100%;
background-color: rgb(10,10,10);
left: 300px;
display: ${display ? 'flex' : 'none'};
z-index: 3;
@media (max-width:780px){
    left: 50%;
}

@keyframes fly{
0%{
    transform: translateX(-300px);
    opacity: 0 ;
}
100%{
   
    opacity: 0.8;
}
}
animation: fly 1s;
animation-fill-mode: forwards;
`}`