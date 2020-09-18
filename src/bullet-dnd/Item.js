import React from "react";
import cancel from "./assets/cancel.png";

const Item = ({ item, style, onClick }) => {
    return <div
        onClick={e => onClick(e)}
        style={{ ...style, display: 'flex', flexDirection: 'row', margin: '5px', alignItems: 'center' }} draggable >
        <div style={{ display: 'inline' }} > {item} </div>
        <img src={cancel} alt="cancel widget" style={{ width: '10px', height: '10px', backgroundColor: '#DDDDDD', padding: '5dp', cursor: 'pointer', marginLeft: '10px' }} />
    </div>
}

export default Item; 
