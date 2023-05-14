"use client"

import { styled } from "styled-components";
import { SearchIcon } from "./search-icon";
import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    border: none;
    background-color: var(--bg-second-color);
    padding: 10px 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);
    width: 352px;
    border-radius: 8px;
    font-family: inherit;
`

const InputSearchContainer = styled.div`
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

export const PrimaryInputWSearch = (props: InputProps) => {
    return (
        <InputSearchContainer>
            <PrimaryInput {...props} />
            <SearchIcon/>
        </InputSearchContainer>
    )
}