"use client"

import { styled } from "styled-components"

interface NavItemProps {
    selected: boolean;
}

const NavItem = styled.li<NavItemProps>`
    font-family: inherit;
    color: var(--text-dark);
    font-size: 16px;
    line-height: 22px;
    text-transform: uppercase;
    cursor: pointer;

    font-weight: ${props => props.selected ? '600' : '400'};
    border-bottom: ${props => props.selected ? '4px solid var(--orange-low)' : ''}
`

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        list-style: none;
    }
`

const FilterContainer = styled.div`
    display: flex;
    align-items: start;
    width: 100%;
`

export function FilterBar(){
    return(
        <FilterContainer>
            <Nav> 
                <ul>
                    <NavItem selected>Todos os produtos</NavItem>
                    <NavItem selected={false}>Camisetas</NavItem>
                    <NavItem selected={false}>Canecas</NavItem>
                </ul> 
                
            </Nav>
        </FilterContainer>
    )
}