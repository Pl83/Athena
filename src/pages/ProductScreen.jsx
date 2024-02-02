import React from "react";
import { useParams } from "react-router-dom";

export default function ProductScreen() {
    const { productId } = useParams();
    return (
        <div id="center">
            <h1>Product : {productId}</h1>
        </div>
    );
}