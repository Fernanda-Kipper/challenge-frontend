"use client"

import { styled } from "styled-components";

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

    &:after {
        content: "🦄"
    }
`