"use client"

import { styled } from "styled-components"
import { CartIcon } from "./cart-icon"

interface CartButtonProps {

}

const CartAnchor = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

`

export function CartButton(props : CartButtonProps){
    return(
        <CartAnchor>
            <CartIcon/>
        </CartAnchor>
    )
}