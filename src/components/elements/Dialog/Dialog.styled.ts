import styled from 'styled-components'
import {transparentize} from 'polished'
import {DIALOG_WIDTH} from '@constants'

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => transparentize(0.2, theme.colors.background)};
    z-index: 1200;
    overflow: auto;
`

export const DialogStyled = styled.div`
    background-color: ${({theme}) => theme.colors.background};
    box-shadow: ${({theme}) => theme.shape.boxShadow};
    min-width: ${DIALOG_WIDTH}px;
    position: relative;
`
export const DialogWrapper = styled.div`
    padding: ${({theme}) => `${theme.spacing[64]} ${theme.spacing[48]} ${theme.spacing[48]}`};
    max-height: calc(100vh - 2 * ${({theme}) => theme.spacing[64]});
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
        display: none;
    }
`
export const DialogTitle = styled.h2`
    margin-bottom: ${({theme}) => theme.spacing[32]};
    font-size: ${({theme}) => theme.typography.size[40]};
    font-weight: ${({theme}) => theme.typography.weight.light};
    color: ${({theme}) => theme.colors.white};
    text-transform: uppercase;
`
export const DialogCloseButton = styled.button`
    padding: 0;
    position: absolute;
    top: ${({theme}) => theme.spacing[24]};
    right: ${({theme}) => theme.spacing[24]};
    background-color: transparent;
    border: none;
    cursor: pointer;
`
