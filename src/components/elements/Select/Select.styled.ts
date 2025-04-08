import styled from 'styled-components'
import {transparentize} from 'polished'

export const SelectStyled = styled.div`
    position: relative;
`

export const SelectButton = styled.button`
    padding: ${({theme}) => theme.spacing[16]};
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing[8]};
    font-size: ${({theme}) => theme.typography.size[16]};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    color: ${({theme}) => theme.colors.white};
    background-color: transparent;
    text-transform: uppercase;
    border: none;
    cursor: pointer;

    &:hover {
        opacity: ${({theme}) => theme.animation.opacity};
    }
`

export const SelectIcon = styled.span`
    font-size: ${({theme}) => theme.typography.size[16]};
    color: ${({theme}) => theme.colors.accent};
`

export const SelectOptions = styled.ul`
    padding: ${({theme}) => theme.spacing[8]};
    position: absolute;
    right: 0;
    top: calc(100% + ${({theme}) => theme.spacing[8]});
    width: 200px;
    background-color: ${({theme}) => theme.colors.control};
    border-radius: ${({theme}) => theme.shape.borderRadius.s};
    z-index: 1;
`

export const Option = styled.div`
    padding: ${({theme}) => theme.spacing[8]} ${({theme}) => theme.spacing[16]};
    font-size: ${({theme}) => theme.typography.size[16]};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    color: ${({theme}) => transparentize(0.4, theme.colors.white)};
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        opacity: ${({theme}) => theme.animation.opacity};
    }
`
