import styled from 'styled-components'

export const LogoStyled = styled.a`
    font-size: ${({theme}) => theme.typography.size[20]};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    color: ${({theme}) => theme.colors.accent};
    transition: opacity ${({theme}) => theme.animation.cubicBezier};
    display: flex;
    align-items: center;

    &:hover {
        opacity: ${({theme}) => theme.animation.opacity};
    }
`
export const LogoAccented = styled.span`
    font-weight: ${({theme}) => theme.typography.weight.black};
`
