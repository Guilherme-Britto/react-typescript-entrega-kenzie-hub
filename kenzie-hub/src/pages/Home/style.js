import styled from "styled-components";

export const HomeMain = styled.main`

    display: flex;
    flex-direction: column;
    align-items: center;

    header{
        display: flex;
        justify-content: center;
        align-items: center;

        height: auto;
        width: 100%;
        height: 72px;
        border-bottom: 1px solid var(--Grey3);
    }

    .headerDiv{
        display: flex;
        justify-content: space-between;
        text-align: center;

        width: 100%;
        max-width: 1100px;
        margin: 0 10px;
    }

    .headerButton{
        width: 80px;
        height: 40px;
        margin: 0;
        border-radius: 4px;

        font-size: .75rem;

        background-color: var(--Grey3);
    }

`

export const UserInfo = styled.section`


    display: flex;
    justify-content: center;
    align-items: center;

    height: auto;
    width: 100%;
    height: 131px;
    border-bottom: 1px solid var(--Grey3);

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;

        width: 100%;
        max-width: 1100px;
        margin: 0 10px;
    }

    h2{
        font-size: 1.1rem;
    }

    p{
        font-size: .75rem;
    }

    @media(min-width: 769px){

        height: 118px;

        div{
            align-items: flex-start;
            justify-content: space-between;
            flex-direction: row;
        }
    }
`

export const TechInfo = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;

    height: auto;
    width: 100%;
    margin-top: 37px;

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;

        width: 100%;
        max-width: 1100px;
        margin: 0 10px;
    }

    h2{
        font-size: 1.1rem;
    }

`
