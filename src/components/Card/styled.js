import styled from 'styled-components'

import { AiOutlineClose, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'

export const Container = styled.div`
    background: #FFF3E4;
    width: 350px;
    margin-top: 20px;
    padding: 15px;
    box-sizing: border-box;
`
export const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Icon = styled(AiOutlineClose)`
    color: ${props => props.theme.colors.secondary};
    cursor: pointer;
`

export const ArrowUp = styled(AiOutlineArrowUp)`
    color: ${props => props.theme.colors.secondary};
`
export const ArrowDown = styled(AiOutlineArrowDown)`
    color: ${props => props.theme.colors.secondary};
`

export const Text = styled.p`
    font-size: ${props => props.size}px;
    font-weight: bold;
    color: ${props => props.color || "#505050"};
`

export const Body = styled.div`
    margin: 10px 0;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: ${props => props.margin || '0px'}
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`