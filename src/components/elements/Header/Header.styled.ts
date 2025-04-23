import styled from 'styled-components'
import {HEADER_HEIGHT} from '@constants'

export const HeaderStyled = styled.header`
    padding: ${({theme}) => theme.spacing[20]};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: ${HEADER_HEIGHT}px;
    display: flex;
    justify-content: space-between;
    z-index: 1;
`
export const SearchButton = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: opacity ${({theme}) => theme.animation.cubicBezier};

    &:hover {
        opacity: ${({theme}) => theme.animation.opacity};
    }
`
