import styled from 'styled-components'
import {Button} from '../Button/Button'

export const SquareButtonStyled = styled(Button)`
    padding: ${({theme}) => theme.spacing[8]} ${({theme}) => theme.spacing[16]};
    font-size: ${({theme}) => theme.typography.size[32]};
`
