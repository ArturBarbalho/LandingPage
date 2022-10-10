import * as S from './styles'
import Contador from './Contador'
export default function Bloco5() {

return(
<div>
<S.Tittle>NUMBERS</S.Tittle> 
 <S.Div >
  <S.Card>
  <Contador valor={15}/>
  <p className='text' >Lorem ipsum dolor</p>
  </S.Card>    
  <S.Card>
  <Contador valor={200}/>
  <p className='text' >Lorem ipsum dolor</p>
  </S.Card>    
  <S.Card>
  <Contador valor={350}/>
  <p className='text' >Lorem ipsum dolor</p>
  </S.Card>    
  <S.Card>
  <Contador valor={80}/>
  <p className='text' >Lorem ipsum dolor</p>
  </S.Card>      
 </S.Div>
 </div>
 )
}


