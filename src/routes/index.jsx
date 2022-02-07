import React from 'react';
import * as ReactRouter from "react-router-dom";
import Panel from '../pages/panel/panel';
import Test from '../pages/panel/test';

export default function Routes() {
    return (
        <ReactRouter.Routes>
            <ReactRouter.Route path="/" element={<Panel />} />
            <ReactRouter.Route path="/test" element={<Test />} />
        </ReactRouter.Routes>
    );
}