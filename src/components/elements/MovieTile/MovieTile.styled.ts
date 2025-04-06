import styled from 'styled-components'
import {transparentize} from 'polished'
import {MOVIE_TILE_HEIGHT, MOVIE_TILE_WIDTH} from '@constants'

export const MovieTileStyled = styled.div`
    width: ${MOVIE_TILE_WIDTH}px;
    cursor: pointer;
`

export const MovieImage = styled.img`
    width: 100%;
    height: ${MOVIE_TILE_HEIGHT}px;
    object-fit: cover;
`
export const MovieDescription = styled.div`
    margin-top: ${({theme}) => theme.spacing[16]};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const MovieTitle = styled.h3`
    font-size: ${({theme}) => theme.typography.size[18]};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    color: ${({theme}) => transparentize(0.3, theme.colors.white)};
`

export const MovieRelease = styled.span`
    padding: ${({theme}) => theme.spacing[4]} ${({theme}) => theme.spacing[8]};
    font-size: ${({theme}) => theme.typography.size[14]};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    color: ${({theme}) => transparentize(0.3, theme.colors.white)};
    border-radius: ${({theme}) => theme.shape.borderRadius.s};
    border: ${({theme}) => `${theme.shape.borderWidth.s} solid ${transparentize(0.3, theme.colors.border)}`};
`

export const MovieGenres = styled.p`
    margin-top: ${({theme}) => theme.spacing[8]};
    font-size: ${({theme}) => theme.typography.size[14]};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    color: ${({theme}) => transparentize(0.5, theme.colors.white)};
`
