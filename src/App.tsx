import Global from './Global';
import Header from './components/Header';
import MainNav from './components/Bloco1';
import {useState} from 'react'
import Bloco2 from './components/Bloco2';
import Bloco3 from './components/Bloco3';
import Bloco4 from './components/Bloco4'
import Bloco5 from './components/Bloco5';
import Bloco6 from './components/Bloco6';
import Footer from './components/Footer';
function App() {
  const [mostra,setMostra]=useState(false)
  return (
    <>
    <Global mostra={mostra} />
    
    <div className='body' >
    <Header mostra={mostra} setMostra={setMostra} />
    <MainNav/>
    <Bloco2/>
    <Bloco3/>
    <Bloco4/>
    <Bloco5/>
    <Bloco6/>
    <Footer/>
    </div>
    
    </>
  );
}

export default App;
