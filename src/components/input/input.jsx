import React from 'react';
import { LabelComponent, InputComponent } from './input-style';

export default function Input ({ label = '', placeholder = ''}) {
    return (
        <LabelComponent>
            <span>{label}</span>
            <InputComponent type="text" placeholder={placeholder} />
        </LabelComponent>
    )
}