import styled from 'styled-components'
import {transparentize} from 'polished'
import {MOVIE_TILE_HEIGHT, MOVIE_TILE_WIDTH} from '@constants'

export const MovieTileStyled = styled.div`
    position: relative;
    width: ${MOVIE_TILE_WIDTH}px;
    cursor: pointer;

    &:hover {
        .menu {
            display: block;
        }
    }
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
export const TileMenu = styled.div`
    display: none;
    position: absolute;
    top: ${({theme}) => theme.spacing[16]};
    right: ${({theme}) => theme.spacing[16]};
`

export const MenuButton = styled.button`
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: opacity ${({theme}) => theme.animation.cubicBezier};

    &:hover {
        opacity: ${({theme}) => theme.animation.opacity};
    }
`

export const MenuOptions = styled.ul`
    padding: ${({theme}) => theme.spacing[8]};
    position: absolute;
    right: 0;
    top: 0;
    width: 120px;
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
    transition: opacity ${({theme}) => theme.animation.cubicBezier};

    &:hover {
        opacity: ${({theme}) => theme.animation.opacity};
    }
`
