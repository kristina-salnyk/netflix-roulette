import styled from 'styled-components'
import {MOVIE_FORM_LEFT_COLUMN_WIDTH, MOVIE_FORM_RIGHT_COLUMN_WIDTH} from '@constants'

export const FormStyled = styled.form`
    overflow-y: auto;
`

export const FormColumns = styled.div`
    margin-bottom: ${({theme}) => theme.spacing[32]};
    display: flex;
    gap: ${({theme}) => theme.spacing[32]};
`

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing[32]};
    min-width: ${MOVIE_FORM_LEFT_COLUMN_WIDTH}px;
    flex-grow: 1;
`

export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacing[32]};
    min-width: ${MOVIE_FORM_RIGHT_COLUMN_WIDTH}px;
`

export const FormControls = styled.div`
    margin-top: ${({theme}) => theme.spacing[64]};
    float: right;
    display: flex;
    gap: ${({theme}) => theme.spacing[16]};
`
