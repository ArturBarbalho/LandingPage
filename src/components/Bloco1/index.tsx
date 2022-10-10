import * as S from './styles'
import { LoremIpsum } from 'react-lorem-ipsum';

export default function MainNav(){
    return(
        <>
        <S.Main>
        <h1>
            Desenvolvedor <br/>
             Front End
        </h1>
        <p>
        <LoremIpsum p={1} avgSentencesPerParagraph={3}/>
        </p>

        <S.CardCont >




      <S.Div >
        <S.Behind color='red' height='300px'  />
        <S.Card color='black'  >
           <h1>Product Design</h1> 
           <div></div>
           <p><LoremIpsum p={1} avgSentencesPerParagraph={3} /></p>
        </S.Card>
        </S.Div>

      <S.Div>
      
        <S.Card color='brown' >
           <h1>Future Vision</h1> 
           <div></div>
           <p><LoremIpsum p={1} avgSentencesPerParagraph={3} /></p>
        </S.Card>
         </S.Div>

       <S.Div>
       <S.Behind color='blue' height='300px' marginTop='230px'  />
        <S.Card color='gray' >
           <h1>Gabigol damasceno</h1>
           <div></div>
           <p>
           <LoremIpsum p={1} avgSentencesPerParagraph={3} />
           </p>
        </S.Card>
        </S.Div>


  


        </S.CardCont>

        <S.Traço/>

        </S.Main>
        </>
    )
}