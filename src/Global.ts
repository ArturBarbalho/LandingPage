import { createGlobalStyle, css} from "styled-components";
type display={
    mostra:boolean
}
const Global = createGlobalStyle<display>`
${({mostra})=>css`
 .body{
 height: 100%;
 position: absolute;
 left: 0;
 width: 100%;
 overflow: ${mostra? 'hidden':'auto'};
 top: 0;
 overflow-x: hidden;
}
`}
 
`
export default Global