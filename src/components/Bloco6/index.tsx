import * as S from './styled'
export default function Bloco5(){
    return(
        <>
        <S.Div>
            <S.Card marginTop='20px' >
                <img src="front.png" alt="" />
                <h1>Front End</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aspernatur quis saepe doloremque tempora</p>
            </S.Card>
            <S.Card marginTop='100px' >
                <img src="servers.png" alt="" />
                <h1>Back End</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aspernatur quis saepe doloremque tempora</p>
            </S.Card>
            <S.Card marginTop='200px' >
                <img src="stack.png" alt="" />
                <h1>Full Stack</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis aspernatur quis saepe doloremque tempora</p>
            </S.Card>

            <S.DivDown>
            <S.DownImg>
            <S.Behind/>
            <img src="dogman.jpg" alt='pic' />
            </S.DownImg>

            <S.DownCard>
                <h1>DOGMAN</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsum provident maxime ipsam quaerat assumenda nobis. Facilis tempore, numquam molestiae atque, cum tempora expedita voluptatibus earum hic mollitia pariatur veritatis!</p>
                <S.Button>Read More</S.Button>
            </S.DownCard>
            </S.DivDown>
        </S.Div>
        </>
    )
}