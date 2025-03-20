import styled from 'styled-components'

export const SearchFormStyled = styled.form`
    margin: 0 auto;
    padding: ${({theme}) => theme.spacing[16]};
    display: flex;
    gap: ${({theme}) => theme.spacing[16]};
    max-width: 800px;
`
