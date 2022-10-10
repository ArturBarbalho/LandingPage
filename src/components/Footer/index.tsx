import * as S from './styles'
export default function Footer(){
    return(
        <>
        <S.Footer>
        <S.Pics>
            <S.Img src="linkedin.png" alt="" />
            <S.Img src="github.png" alt="" />
            <S.Img src="whatsapp.png" alt="" />
            <S.Img src="curriculo.png" alt="" />
        </S.Pics>
        <h1>LETS TALK</h1>
        <S.Button>Contact me</S.Button>
        </S.Footer>
        </>
    )
}