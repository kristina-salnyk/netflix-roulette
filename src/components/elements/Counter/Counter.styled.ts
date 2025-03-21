import styled from 'styled-components'

export const CounterStyled = styled.div`
    padding: ${({theme}) => theme.spacing[16]};
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({theme}) => theme.spacing[16]};
    font-size: ${({theme}) => theme.typography.size[32]};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    color: ${({theme}) => theme.colors.accent};
`
