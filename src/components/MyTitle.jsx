import React from "react";
import styled from "styled-components";

export default function MyTitle({title, variant}) {
    return (
        <Title $variant={variant}>{title}</Title>
    );
}

const Title = styled.h1`
    color: ${(props) => {
        switch (props.$variant) {
            case "primary":
                return "blue";
            case "secondary":
                return "green";
            default:
                return "black";
        }
    }}
`;