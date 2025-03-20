import styled from 'styled-components'

export const InputStyled = styled.input`
    padding: ${({theme}) => theme.spacing[16]} ${({theme}) => theme.spacing[48]};
    font-size: ${({theme}) => theme.typography.size[20]};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    background-color: ${({theme}) => theme.colors.input};
    color: ${({theme}) => theme.colors.white};
    border-radius: ${({theme}) => theme.shape.borderRadius.s};
    border: ${({theme}) => `${theme.shape.borderWidth} solid transparent`};
    width: 100%;
    outline: none;
    transition: border-color ${({theme}) => theme.animation.cubicBezier};

    &:focus {
        border-color: ${({theme}) => theme.colors.accent};
    }
`
