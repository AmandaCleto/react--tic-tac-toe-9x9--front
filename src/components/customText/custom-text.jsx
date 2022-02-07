import React from "react";

export default function CustomText(props) {
    const CustomText = `h${props.priority}`;
    return <CustomText style={props.style}>{props.children}</CustomText>;
}
