import styled from 'styled-components'
import {SEARCH_FORM_WIDTH} from '@constants'

export const SearchFormStyled = styled.form`
    margin: 0 auto;
    padding: ${({theme}) => theme.spacing[16]};
    display: flex;
    gap: ${({theme}) => theme.spacing[16]};
    max-width: ${SEARCH_FORM_WIDTH}px;
`
export const InputWrapper = styled.div`
    flex-grow: 1;
`
