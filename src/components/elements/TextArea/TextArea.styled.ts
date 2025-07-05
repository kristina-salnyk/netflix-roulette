import styled from 'styled-components'
import {transparentize} from 'polished'

export const TextAreaStyled = styled.textarea`
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
`

export const TextAreaLabel = styled.label`
    display: block;
    margin-bottom: ${({theme}) => theme.spacing[16]};
    font-size: ${({theme}) => theme.typography.size[16]};
    font-weight: ${({theme}) => theme.typography.weight.regular};
    color: ${({theme}) => theme.colors.accent};
    text-transform: uppercase;
`

export const TextAreaWrapper = styled.div`
    position: relative;
`

export const InputError = styled.span`
    margin-top: ${({theme}) => theme.spacing[4]};
    position: absolute;
    top: 100%;
    left: 0;
    font-size: ${({theme}) => theme.typography.size[14]};
    font-weight: ${({theme}) => theme.typography.weight.regular};
    color: ${({theme}) => theme.colors.accent};
`
