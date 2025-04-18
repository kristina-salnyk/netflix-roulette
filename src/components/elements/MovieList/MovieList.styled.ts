import styled from 'styled-components'
import {MOVIE_TILE_WIDTH} from '@constants'
import {Button} from '@components/elements/Button'

export const ListControls = styled.div`
    margin: ${({theme}) => theme.spacing[32]} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({theme}) => theme.spacing[64]};
    border-bottom: ${({theme}) => `${theme.shape.borderWidth.m} solid ${theme.colors.border}`};
`

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
export const DialogTextContent = styled.p`
    font-size: ${({theme}) => theme.typography.size[20]};
    font-weight: ${({theme}) => theme.typography.weight.light};
    color: ${({theme}) => theme.colors.white};
`

export const DialogButton = styled(Button)`
    margin-top: ${({theme}) => theme.spacing[48]};
    float: right;
`
