import React from "react";
import { MaskComponent, ModalComponent } from "./modal-style";

export default function Modal({ children, winnerColor }) {
    return (
        <>
            <MaskComponent winnerColor={winnerColor} />
            <ModalComponent>
                <div className="padding">{children}</div>
            </ModalComponent>
        </>
    );
}
