import React from "react";
import { useContext } from "react";
import Avatar from "boring-avatars";
import { CardComponent } from "./card-style";
import { ThemeContext } from "styled-components";
import img from "../../assets/background-card.png";

export default function Card({ name }) {
    const themeContext = useContext(ThemeContext);

    return (
        <CardComponent>
            <Avatar
                size={45}
                name={name}
                variant="beam"
                colors={[
                    themeContext.blue,
                    themeContext.yellow,
                    themeContext.red,
                    themeContext.white,
                ]}
            />
            <p>{name}</p>
        </CardComponent>
    );
}
