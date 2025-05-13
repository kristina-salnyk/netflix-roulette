import styled from 'styled-components'
import {MOVIE_TILE_WIDTH} from '@constants'

export const MovieListStyled = styled.section`
    padding: ${({theme}) => theme.spacing[20]} 0 ${({theme}) => theme.spacing[48]};
    background-color: ${({theme}) => theme.colors.darkGray};
`

export const ListControls = styled.div`
    margin-bottom: ${({theme}) => theme.spacing[24]};
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({theme}) => theme.spacing[64]};
    border-bottom: ${({theme}) => `${theme.shape.borderWidth.m} solid ${theme.colors.border}`};
`

export const MovieListContent = styled.ul`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(${MOVIE_TILE_WIDTH}px, 1fr));
    max-width: calc(3 * ${MOVIE_TILE_WIDTH}px + 2 * ${({theme}) => theme.spacing[48]});
    gap: ${({theme}) => theme.spacing[48]};
    list-style: none;
`

export const ListItem = styled.li`
    display: flex;
    justify-content: center;
`
