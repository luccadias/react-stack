import styled from 'styled-components'

export const TableStyled = styled.table`
    display: flex; 
    flex: 1;
    flex-direction: column;

    td{
        font-weight: bold;
        font-size: 13px;
        padding: 3px 12px;
    }

    th{
        padding: 0 10px;
        font-size: 13px;
        font-weight: lighter;
    }
    
`