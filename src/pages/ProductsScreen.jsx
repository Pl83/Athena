import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MyButton from "../components/MyButton";

export default function ProductsScreen() {
    const products = [
        {id: 1, name: "Product 1", price: 100}, 
        {id: 2, name: "Product 2", price: 200}, 
        {id: 3, name: "Product 3", price: 300}
    ];
        
    return (
        <div id="center">
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <Link to={`/products/${product.id}`}>{product.name}</Link>
                    </li>
                ))}
            </ul>
            <Container>
                <MyButton name="test" onClick={() => console.log("test")}/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quo, quia saepe nemo magnam natus debitis voluptatibus officiis esse numquam velit voluptatem, incidunt suscipit facere id eligendi corrupti quae! Reprehenderit.</p>  
            </Container>
        </div>
    );
}

const Container = styled.div`
    background-color: #f2f2f2;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;