import React from 'react';
import { LabelComponent, InputComponent } from './input-style';

export default function Input ({ label = '', placeholder = ''}) {
    return (
        <LabelComponent>
            <h3>{label}</h3>
            <InputComponent type="text" placeholder={placeholder} />
        </LabelComponent>
    )
}