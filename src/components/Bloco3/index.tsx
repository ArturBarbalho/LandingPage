import * as S from './styles'
export default function Bloco3(){
    return(
        <S.Div>
        <S.Behind/>
        <S.Container>
            <div>
            <h1 style={{fontSize:'50px'}} >Technologies</h1>
                <S.Card>
                <S.Icon src='react.svg' />
                <div>
                <h2>React</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                </div>
                </S.Card>
                <S.Card>
                <S.Icon src='styled.png' />
                <div>
                <h2>Styled Components</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                </div>
                </S.Card>
                <S.Card>
                <S.Icon src='typescript.svg' />
                <div>
                <h2>Typescript</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                </div>
                </S.Card>
            </div>

            <S.Right src='right.jpg' />

            
        </S.Container>
        </S.Div>
    )
}