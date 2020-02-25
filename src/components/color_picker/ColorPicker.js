import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

const ColorPicker = () => {

    const [color, setColor] = useState('#ff00ff');

    return ( 
        <div>
            <SketchPicker color={color} onChangeComplete={ (color) => setColor(color.hex)} />
            <div style={{
                backgroundColor: color,
                color: '#ffffff',
                height: 300,
                width: 300,
                transition: "ease all 500ms"
            }}>
                HELLO WORLD 
                COLOR : {color}
            </div>
        </div>
    );
}
 
export default ColorPicker;