import styled from "styled-components";

export const TableStyled = styled.table`
    width: 100%;
    border-collapse: collapse;
`

export const TableHead = styled.tr`
    background-color: #4cb050;
    color: #fff;

    th{
        padding: 5px;
    }
`

export const TableRow = styled.tr`
    text-align: left;

    &:nth-child(even){
        background-color: #f2f2f2;
    }
`

export const TableData = styled.td`
    padding: 5px;
`

export const actionStyled = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 3px;
    border: 1px solid #f2f2f2;
`

export const ButtonStyled = styled.button`
    background-color: white;
    border-radius: 5px;
    width: 100px;
    border: 1px solid black;
` 