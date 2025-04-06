import styled from 'styled-components'

export const ButtonStyled = styled.button<{ mode: 'filled' | 'outlined' }>`
    padding: ${({theme}) => theme.spacing[16]} ${({theme}) => theme.spacing[48]};
    font-size: ${({theme}) => theme.typography.size[20]};
    font-weight: ${({theme}) => theme.typography.weight.medium};
    background-color: ${({theme, mode}) => (mode === 'filled') ? theme.colors.accent : 'transparent'};
    color: ${({theme, mode}) => (mode === 'filled') ? theme.colors.white : theme.colors.accent};
    border-radius: ${({theme}) => theme.shape.borderRadius.s};
    border: ${({theme}) => `${theme.shape.borderWidth.m} solid ${theme.colors.accent}`};
    text-transform: uppercase;
    cursor: ${({disabled}) => `${disabled ? 'auto' : 'pointer'}`};
    transition: opacity ${({theme}) => theme.animation.cubicBezier};

    &:hover {
        opacity: ${({theme}) => theme.animation.opacity};
    }
`
