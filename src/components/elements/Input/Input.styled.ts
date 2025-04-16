import styled from 'styled-components'
import {transparentize} from 'polished'

export const InputStyled = styled.input`
    padding: ${({theme}) => theme.spacing[16]};
    font-family: ${({theme}) => theme.typography.font.primary};
    font-size: ${({theme}) => theme.typography.size[20]};
    font-weight: ${({theme}) => theme.typography.weight.regular};
    background-color: ${({theme}) => transparentize(0.2, theme.colors.control)};
    color: ${({theme}) => theme.colors.white};
    border-radius: ${({theme}) => theme.shape.borderRadius.s};
    border: ${({theme}) => `${theme.shape.borderWidth.m} solid transparent`};
    width: 100%;
    outline: none;
    transition: border-color ${({theme}) => theme.animation.cubicBezier};

    &:focus {
        border-color: ${({theme}) => theme.colors.accent};
    }

    &::-webkit-calendar-picker-indicator {
        display: none;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    &[type=number] {
        -moz-appearance: textfield;
    }
`

export const InputLabel = styled.label`
    margin-bottom: ${({theme}) => theme.spacing[16]};
    display: block;
    font-size: ${({theme}) => theme.typography.size[16]};
    font-weight: ${({theme}) => theme.typography.weight.regular};
    color: ${({theme}) => theme.colors.accent};
    text-transform: uppercase;
`

export const InputWrapper = styled.div`
    position: relative;
`

export const InputButton = styled.span`
    padding: 0;
    position: absolute;
    top: 0;
    right: ${({theme}) => theme.spacing[16]};
    height: 100%;
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
`
