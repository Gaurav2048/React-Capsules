import React, {useEffect} from "react";

const TextInput = ({style}) =>{
    return <div style={style} >
        <input placeholder = "Enter text here" style={{width: '100%', outline:'none', border:'0px', marginTop:'8px', marginBottom:'8px'}} />
    </div>
}

export default TextInput; 
