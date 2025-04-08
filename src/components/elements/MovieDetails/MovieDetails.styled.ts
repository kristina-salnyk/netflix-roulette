import styled from 'styled-components'
import {transparentize} from 'polished'
import {MOVIE_IMAGE_HEIGHT, MOVIE_IMAGE_WIDTH, RATING_ICON_HEIGHT, RATING_ICON_WIDTH} from '@constants'

export const MovieDetailsStyled = styled.div`
    padding: ${({theme}) => theme.spacing[32]};
    display: flex;
    gap: ${({theme}) => theme.spacing[32]};
`

export const MovieImage = styled.img`
    width: ${MOVIE_IMAGE_WIDTH}px;
    height: ${MOVIE_IMAGE_HEIGHT}px;
    object-fit: cover;
`
export const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
`

export const MovieHeading = styled.div`
    color: ${({theme}) => theme.colors.white};
    display: flex;
    align-items: center;
`

export const MovieTitle = styled.h2`
    font-size: ${({theme}) => theme.typography.size[40]};
    font-weight: ${({theme}) => theme.typography.weight.light};
    text-transform: uppercase;
`

export const MovieRating = styled.span`
    margin-left: ${({theme}) => theme.spacing[32]};
    min-width: ${RATING_ICON_WIDTH}px;
    min-height: ${RATING_ICON_HEIGHT}px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({theme}) => theme.typography.size[20]};
    font-weight: ${({theme}) => theme.typography.weight.light};
    border-radius: ${({theme}) => theme.shape.borderRadius.xl};
    border: ${({theme}) => `${theme.shape.borderWidth.s} solid ${theme.colors.white}`};
`

export const MovieMeta = styled.div`
    margin-top: ${({theme}) => theme.spacing[16]};
    font-size: ${({theme}) => theme.typography.size[24]};
    font-weight: ${({theme}) => theme.typography.weight.light};
    color: ${({theme}) => theme.colors.accent};
    display: flex;
    gap: ${({theme}) => theme.spacing[48]};
`

export const MovieDescription = styled.p`
    margin-top: ${({theme}) => theme.spacing[16]};
    font-size: ${({theme}) => theme.typography.size[20]};
    font-weight: ${({theme}) => theme.typography.weight.light};
    color: ${({theme}) => transparentize(0.5, theme.colors.white)};
`

export const MovieGenres = styled.p`
    margin-top: ${({theme}) => theme.spacing[8]};
    font-size: ${({theme}) => theme.typography.size[14]};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    color: ${({theme}) => transparentize(0.5, theme.colors.white)};
`
