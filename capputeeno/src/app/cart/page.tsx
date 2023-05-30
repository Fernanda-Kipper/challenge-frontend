"use client"

import { BackBtn } from "@/components/back-button";
import { CartItem } from "@/components/cart/cart-item";
import { DefaultPageLayout } from "@/components/default-page-layout";
import { Divider } from "@/components/divider";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ProductInCart } from "@/types/product";
import { formatPrice } from "@/utils/format-price";
import { styled } from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 32px;

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        flex-direction: row;
    }
`

const CartListContainer = styled.div`
    h3 {
        font-size: 24px;
        font-weight: 500;
        line-height: 150%;
        text-transform: uppercase;
        color: var(--text-dark-2);
        margin-top: 24px;
    }

    p {
        font-weight: 300;
        font-size: 16px;
        line-height: 150%;
        color: var(--text-dark-2);

        span {
            font-weight: 600;
        }
    }
`

const CartList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
    margin-top: 24px;
`

const CartResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    min-width: 352px;
    padding: 16px 24px;

    background: white;

    h3 {
        font-weight: 600;
        font-size: 20px;
        color: var(--text-dark-2);
        text-transform: uppercase;
        margin-bottom: 30px;
    }
`

const TotalItem = styled.div<{ isBold: boolean}>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    font-weight: ${props => props.isBold ? '600' : '400'};
    font-size: 16px;
    line-height: 150%;

    margin-bottom: 12px;
`

const ShopBtn = styled.button`
    color: white;
    border-radius: 4px;
    background: var(--success-color);
    padding: 12px;
    width: 100%;
    border: none;
    margin-top: 40px;
    cursor: pointer;
`

export default function CartPage(){
    const { value, updateLocalStorage } = useLocalStorage<ProductInCart[]>("cart-items", [])

    const calculateTotal = (value: ProductInCart[]) => {
       return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
    }

    const cartTotal = formatPrice(calculateTotal(value))
    const deliveryFee = 4000;
    const cartTotalWithDelivery = formatPrice(calculateTotal(value) + deliveryFee)

    const handleUpdateQuantity = (id: string, quantity: number) => {
        const newValue = value.map(item => {
            if(item.id !== id) return item
            return {...item, quantity: quantity }
        })
        updateLocalStorage(newValue)
    }

    const handleDeleteItem = (id: string) => {
        const newValue = value.filter(item => {
            if(item.id !== id) return item
        })
        updateLocalStorage(newValue)
    }

    return(
        <DefaultPageLayout>
            <Container>
                <CartListContainer>
                    <BackBtn navigate="/"/>
                   <h3>Seu carrinho</h3>
                   <p>
                    Total {value.length} produtos
                    <span>{cartTotal}</span>
                   </p>
                   <CartList>
                        {value.map(item => 
                        <CartItem 
                            product={item}
                            key={item.id}
                            handleDelete={handleDeleteItem}
                            handleUpdateQuantity={handleUpdateQuantity}
                        />)}
                   </CartList>
                </CartListContainer>
                <CartResultContainer>
                    <h3>Resumo do Pedido</h3>
                    <TotalItem isBold={false}>
                        <p>Subtotal de produtos</p>
                        <p>{cartTotal}</p>
                    </TotalItem>
                    <TotalItem isBold={false}>
                        <p>Entrega</p>
                        <p>{formatPrice(deliveryFee)}</p>
                    </TotalItem>
                    <Divider/>
                    <TotalItem isBold>
                        <p>Total</p>
                        <p>{cartTotalWithDelivery}</p>
                    </TotalItem>
                    <ShopBtn>FINALIZAR COMPRA</ShopBtn>
                </CartResultContainer>
            </Container>
        </DefaultPageLayout>
    )
}