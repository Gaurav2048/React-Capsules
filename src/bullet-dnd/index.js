import React from 'react'
import Item from "./Item";
import TextInput from "./TextInput";

const ReactBulletDnd = ({ children, style }) => {
    const onClick = (e) => {
        console.log('this is a click event of ', e.target);

    }
    return <div style={{ ...style }} >
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}  >

            {React.Children.map(children, child => {
                return React.cloneElement(child, {
                    onClick: onClick
                })
            })}

        </div>
    </div>
}

ReactBulletDnd.Item = Item;
ReactBulletDnd.TextInput = TextInput;

export default ReactBulletDnd; 
