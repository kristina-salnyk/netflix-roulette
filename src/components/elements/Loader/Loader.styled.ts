import styled from 'styled-components'
import {transparentize} from 'polished'

export const LoaderStyled = styled.div`
    padding: calc(100px + ${({theme}) => theme.spacing[128]}) 0;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => transparentize(0.4, theme.colors.background)};
    z-index: 1250;
    overflow: auto;
`
