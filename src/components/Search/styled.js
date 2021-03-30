import styled from 'styled-components'

import { AiOutlineSearch } from 'react-icons/ai'
import { Center } from '../../styles/default'

export const Input = styled.input`
    line-height: 40px;
    width: 85%;
    background-color: transparent;
    border: none;
`

export const Container = styled(Center)`
    width: 350px;
    margin: 30px 0;
    background: ${props => props.theme.backgrounds.secondary};
    justify-content: space-around;
`

export const Icon = styled(AiOutlineSearch)`
    color: ${props => props.theme.colors.secondary};
    cursor: pointer;
`