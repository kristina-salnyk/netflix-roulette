import styled from 'styled-components'

export const LoaderStyled = styled.div`
    padding: calc(100px + ${({theme}) => theme.spacing[128]}) 0;
    display: flex;
    justify-content: center;
    align-items: center;
`
