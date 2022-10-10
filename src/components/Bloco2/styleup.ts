import styled from 'styled-components'

export const Container1 = styled.div`
h1{
    text-align: center;
    font-size: 50px ;
    margin-left: 20px;
    margin-right: 20px;
    @media(max-width:780px){
        font-size: 35px;
    }
}
p{
    width: 90%;
    font-size: larger;
    max-height: 200px;
    padding-bottom: 20px;
    @media (max-width:780px){
        margin-left:20px;
    }

}
.div{
    display: flex;
    justify-content: space-evenly;
    max-width: 1200px;
    margin: auto;
    padding-left:150px;
    @media (max-width:780px){
        padding-left: 0;
        flex-direction: column;
        align-items:center;
    }
}

`
export const Traço=styled.div`
width: 150px;
height: 4px;
background-color: brown;
margin-top: 50px;
margin-right: 50px;
`