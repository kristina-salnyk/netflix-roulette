import styled from 'styled-components'
import {transparentize} from 'polished'

export const SortControlStyled = styled.div`
    display: flex;
    align-items: center;
    gap: ${({theme}) => theme.spacing[32]};
    flex-shrink: 0;
`

export const SortLabel = styled.span`
    font-size: ${({theme}) => theme.typography.size[16]};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    color: ${({theme}) => transparentize(0.4, theme.colors.white)};
    text-transform: uppercase;
`
