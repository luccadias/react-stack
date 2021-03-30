import styled from 'styled-components'

import { Center } from '../../styles/default'
import { Search } from '../../components'

export const Container = styled(Center)`
    width: 100%;
    height: 100%;
    flex-direction: column;
    background: ${props => props.theme.backgrounds.primary};
`
export const SearchInput = styled(Search)`
    margin: 50px 0 !important;
`

export const Block = styled.div`
    width: 350px;
    display: flex;
    flex-direction: row;
`
