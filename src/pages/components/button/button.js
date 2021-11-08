import React from 'react';
import { ButtonComponent } from './button-style';

export default function Button({ children }) {
    return (
        <ButtonComponent>
            {children}
        </ButtonComponent>
    )
}