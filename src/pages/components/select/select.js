import React from 'react';
import { useState } from 'react';
import { SelectComponent, ContainerComponent } from './select-style';

export default function Select() {
    const [ state, setState ] = useState({
        X: true,
        O: false
    });
    const handleClick = (target) => {
        if(target === 'X') {
            setState({
                X: true,
                O: false
            })
        } else {
            setState({
                X: false,
                O: true
            })
        }
    };

    return (
        <ContainerComponent>
            <SelectComponent className={state.X ? 'selected':''} onClick={() => handleClick('X')}>
                <svg height="36" viewBox="0 0 46 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.28683 51C2.0352 51 1.08001 50.4768 0.421253 49.4308C-0.171622 48.3844 -0.138683 47.3056 0.520066 46.1943L12.3776 25.6961C12.6411 25.2384 12.6411 24.7808 12.3776 24.3231L1.01413 4.80577C0.35538 3.69423 0.322441 2.61539 0.915321 1.56923C1.57407 0.52308 2.52927 0 3.78089 0H9.70968C11.3565 0 12.9046 0.490386 14.3539 1.47116C15.8032 2.38654 16.8901 3.59616 17.6147 5.10002L23.1482 16.9673C23.1482 17.0327 23.1812 17.0654 23.247 17.0654C23.3129 17.0654 23.3458 17.0327 23.3458 16.9673L28.8794 5.10002C29.5382 3.59616 30.5922 2.38654 32.0414 1.47116C33.4907 0.490386 35.0716 0 36.7844 0H42.3179C43.5037 0 44.393 0.52308 44.9859 1.56923C45.6446 2.61539 45.6776 3.69423 45.0847 4.80577L33.7212 24.3231C33.3919 24.7808 33.3919 25.2384 33.7212 25.6961L45.5788 46.1943C46.1715 47.3056 46.1388 48.3844 45.48 49.4308C44.8871 50.4768 43.9978 51 42.812 51H36.8832C35.1705 51 33.5565 50.5425 32.0414 49.6272C30.5922 48.7118 29.5382 47.5019 28.8794 45.998L22.9506 33.2481C22.9506 33.1827 22.9177 33.15 22.8518 33.15C22.7859 33.15 22.753 33.1827 22.753 33.2481L16.8242 45.998C16.0996 47.5019 14.9797 48.7118 13.4646 49.6272C12.0153 50.5425 10.4672 51 8.82036 51H3.28683Z" fill="#F36868"/>
                </svg>
            </SelectComponent>
            <SelectComponent className={state.O ? 'selected':''} onClick={() => handleClick('O')}>
                <svg height="36" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M49.5 28.5C49.5 40.098 40.098 49.5 28.5 49.5C16.902 49.5 7.50002 40.098 7.50002 28.5C7.50002 16.902 16.902 7.5 28.5 7.5C40.098 7.5 49.5 16.902 49.5 28.5Z" stroke="#3BB4DA" stroke-width="15"/>
                </svg>
            </SelectComponent>
        </ContainerComponent>
    )
}