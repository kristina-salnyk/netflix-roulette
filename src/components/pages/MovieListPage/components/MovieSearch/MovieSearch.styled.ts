import styled from 'styled-components'
import {transparentize} from 'polished'
import mainPageBackground from '@images/main-page-background.jpeg'
import {SEARCH_FORM_HEIGHT} from '@constants'

export const MovieSearchStyled = styled.section`
    padding: 100px 0 ${({theme}) => theme.spacing[20]};
    position: relative;
    height: ${SEARCH_FORM_HEIGHT}px;
    background-color: ${({theme}) => theme.colors.background};
    border-bottom: ${({theme}) => `${theme.shape.borderWidth.xxl} solid ${theme.colors.border}`};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
                to right,
                ${({theme}) => transparentize(0.4, theme.colors.black)},
                ${({theme}) => transparentize(0.4, theme.colors.black)}
        ),
        url(${mainPageBackground});
        background-repeat: no-repeat;
        background-position: top center;
        background-size: cover;
        filter: blur(4px);
        z-index: 0;
    }

    & > * {
        position: relative;
        z-index: 1;
    }
`

export const MovieSearchTitle = styled.h1`
    margin-bottom: ${({theme}) => theme.spacing[32]};
    font-size: ${({theme}) => theme.typography.size[48]};
    font-weight: ${({theme}) => theme.typography.weight.light};
    color: ${({theme}) => theme.colors.white};
    text-transform: uppercase;
`
export const MovieSearchContent = styled.div`
    margin: 0 auto;
    padding-top: ${({theme}) => theme.spacing[32]};
    max-width: 800px;
`
