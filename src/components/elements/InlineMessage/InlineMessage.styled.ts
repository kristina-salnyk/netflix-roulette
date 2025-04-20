import styled from 'styled-components'

export const InlineMessageStyled = styled.div`
    padding: ${({theme}) => theme.spacing[32]} 0;
    text-align: center;
`

export const InlineMessageText = styled.p`
    font-size: ${({theme}) => theme.typography.size[24]};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    color: ${({theme}) => theme.colors.accent};
`
