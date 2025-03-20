import styled from 'styled-components'
import {Button} from '../Button/Button'
import {TabButtonProps} from './TabButton'

export const TabButtonStyled = styled(Button)<TabButtonProps>`
    padding: ${({theme}) => theme.spacing[8]} ${({theme}) => theme.spacing[16]};
    font-size: ${({theme}) => theme.typography.size[16]};
    border-color: transparent;
    border-bottom: ${({theme, selected}) => `${theme.shape.borderWidth} solid ${selected ?
    theme.colors.accent : 'transparent'}`};
    color: ${({theme}) => theme.colors.white};
`
