import { useEffect, useState } from 'react';
import { Numbers } from './styles';
type props={
    valor:number
}
export default function Contador({valor}:props){
    const [number,setNumber]=useState(0)
    function count(){
    let lout = 30
    if(valor<50){lout = 200}
    if(valor>100){lout = 1}
    
    if(number<valor){
       setTimeout( ()=> setNumber(number+1),lout) 
    }
    else{
       setNumber(valor)
    }
    }
    useEffect(()=>{
        const elemento = document.getElementById('n')
        const observer= new IntersectionObserver(()=>count())
        if(elemento) observer.observe(elemento)
    })
    

return(
    <Numbers id='n' >{number}</Numbers>
)
}