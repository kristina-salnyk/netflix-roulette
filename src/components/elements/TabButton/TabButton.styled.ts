import styled from 'styled-components'
import {Button} from '@components/elements/Button'

export const TabButtonStyled = styled(Button)`
    padding: ${({theme}) => theme.spacing[16]};
    font-size: ${({theme}) => theme.typography.size[16]};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    color: ${({theme}) => theme.colors.white};
    border: none;
    position: relative;

    &.selected::after {
        content: '';
        display: block;
        width: 100%;
        height: ${({theme}) => theme.shape.borderWidth.m};
        background-color: ${({theme}) => theme.colors.accent};
        position: absolute;
        bottom: -${({theme}) => theme.shape.borderWidth.m};
        left: 0;
    }
`
