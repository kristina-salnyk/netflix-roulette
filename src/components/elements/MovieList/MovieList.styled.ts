import styled from 'styled-components'
import {MOVIE_TILE_WIDTH} from '@constants'

export const MovieListStyled = styled.ul`
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
