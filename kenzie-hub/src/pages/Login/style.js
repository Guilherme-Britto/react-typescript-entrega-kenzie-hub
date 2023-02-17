import styled from "styled-components"

export const LoginMain = styled.main`

display: flex;
flex-direction: column;
align-items: center;
margin: 0 10px;

@media(max-width: 390px){

    align-items: center;

}

    header{
        margin-top: 80px;
        text-align: center;
    }

    section{
        background-color: var(--Grey3);
        margin-top: 20px;
        padding: 35px 0;
        border-radius: 3.25px;

        width: -webkit-fill-available;
        max-width: 369px;
    }

    h2{
        text-align: center;
        font-size: 1.15rem;
    }

    form{
        display: flex;
        flex-direction: column;

    }

    .input__container{
        display: flex;
        flex-direction: column;
        margin: 0 14px;
        margin-top: 22px;
    }

    button{
        margin: 0 14px;
        margin-top: 22px;
    }

    label{
        font-size: .6rem;
    }

    p{
        font-size: .75rem;
        text-align: center;

        margin-top: 34px;
    }

    a{
        display: block;
        line-height: 48px;
        width: -webkit-fill-available;
        border-radius: 3.25px;
        margin: 0 14px;
        margin-top: 14px;
        text-align: center;

        color: var(--WhiteFixed); 
    }
`
