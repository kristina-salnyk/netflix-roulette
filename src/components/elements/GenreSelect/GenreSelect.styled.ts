import styled from 'styled-components'

export const GenreSelectStyled = styled.ul`
    padding: ${({theme}) => theme.spacing[16]};
    display: flex;
    flex-wrap: wrap;
    gap: ${({theme}) => theme.spacing[30]};
    width: 100%;
`
