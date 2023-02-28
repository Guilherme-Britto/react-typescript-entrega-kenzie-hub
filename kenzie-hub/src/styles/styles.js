import styled from "styled-components"

export const SubmitButton = styled.button`

    color: var(--WhiteFixed);
    background-color: var(--Color-primary);

    height: 48px;
    width: -webkit-fill-available;
    border-radius: 3.25px;

    cursor: pointer;
`


export const InputForm = styled.input`

    border-radius: 3.25px;
    padding-left: 15px;
    margin-top: 6px;
    border: 1px solid transparent ;

    background-color: var(--Grey2);
    color: var(--Grey0);

    height: 40px;

    &:hover{
        border: 1px solid var(--Grey0) ;
        color: var(--Grey0);
    }
`
