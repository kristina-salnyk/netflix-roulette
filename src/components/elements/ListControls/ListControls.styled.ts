import styled from 'styled-components'

export const ListControlsStyled = styled.div`
    margin: ${({theme}) => theme.spacing[32]} 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({theme}) => theme.spacing[64]};
    border-bottom: ${({theme}) => `${theme.shape.borderWidth.m} solid ${theme.colors.border}`};
`

