import * as S from './styleup';
import LoremIpsum from 'react-lorem-ipsum';
import * as C from './styledown';
export default function Bloco2(){

    return(
        <>
        <S.Container1>
        <h1>We create you landign page</h1>
        <div className='div'>
        <S.Traço/>
        <p>
        <LoremIpsum p={1} avgSentencesPerParagraph={20} avgWordsPerSentence={1} />
        </p>
        </div>
        </S.Container1>


        <C.Container2>
        <C.Div>
        <div className='ContQ' >  
        <div className='div' >   
        <C.Img src="img1.jpg" height='450px'  />
        <C.Img src="img2.jpg"  
        height='450px'  />
        </div> 

        <div className='div' >
        <C.Card heigth='300px' color='white' BgColor='red'>
            <h1 style={{marginTop:'30px'}} >LOREM IPSUM</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, beatae aliquid quasi dicta, facilis similique quae sit beatae aliquid quasi dicta, facilis similique quae sit beatae aliquid quasi dicta, facilis similique quae sit </p>
        </C.Card>
        <C.Img src="img3.jpg"  
        height='300px'  />
        </div>
        </div>  

        <div className='divdown' style={{width:'300px'}} >
            <C.Card heigth='760px'  BgColor='aliceblue' >
                <h1 style={{marginTop:'0',paddingTop:'50px'}}>LOREM IPSUM</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt amet sed reprehenderit est quidem consectetur, cumque minima Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ex sint doloribus architecto nisi blanditiis aspernatur maxime</p>
            </C.Card>
        </div>
        </C.Div>

        
        < C.Background />
        <C.DivBehind>
        <C.Cube width='300px' heigth='300px' color='gray' />

        <C.Cube color='black' marginTop='500px' width='300px' heigth='400px' />
         </C.DivBehind>
       </C.Container2>
        </>
    )
}