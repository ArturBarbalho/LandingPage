import  * as S  from "./styles"
export type props={
    mostra:boolean,
    setMostra:(newState:boolean)=>void
 }
export default function Header({mostra, setMostra}:props){

 

    return(
        <>
        <S.NavBar display={mostra} >
            <h2>Hernane Brocador </h2>
            <h2>Hernane Brocador </h2>
            <h2>Hernane Brocador </h2>
            <h2>Hernane Brocador </h2>
            <h2>Hernane Brocador </h2>
            
        </S.NavBar>
        <S.BlackDiv display={mostra} onClick={()=> setMostra(!mostra)} ></S.BlackDiv>
        <S.Header>
        <S.Div>
        <h1>DEV</h1>
        <S.Menu src="menu-aberto.png" alt="menu" onClick={()=>{setMostra(!mostra)}} />
        </S.Div>
        </S.Header>


        
        </>
    )
}

