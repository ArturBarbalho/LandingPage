import * as S from './styled'
import { Traço } from '../Bloco1/styles'
export default function Bloco4(){
    return(
    <S.Div>
    <S.Container>
    <S.Row>
    <S.Img src='card1.jpg' />
    <S.Img src='card2.jpg' />
    </S.Row>

    <S.Row>    
    <S.Img src='card3.jpg' />
    <S.Img src='card4.jpg'/>
    <S.Img src='card5.jpg'/>
    </S.Row>

    <S.Row>
    <S.Img src='card6.jpg'/>
    <S.Img src='card7.jpg'/>
    </S.Row>

    <S.Row>    
    <S.Card>
        <h1>WEB DEVELOPER</h1>
        <S.Traço/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero ipsum, totam qui quae corporis nihil Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero ipsum, totam qui quae corporis nihil  </p>
    </S.Card>
    <S.Img src='card8.jpg'/>
    <S.Img src='card3.jpg'/>
    </S.Row>
    <Traço />
    </S.Container>
    </S.Div>
    )
}