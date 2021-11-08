import React from 'react';
import { CardComponent } from './card-style';

export default function Card({children}) {
    return (
        <CardComponent>
            <p>{children}</p>
        </CardComponent>
    )
}