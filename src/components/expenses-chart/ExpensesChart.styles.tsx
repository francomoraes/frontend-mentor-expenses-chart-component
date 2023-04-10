import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: hsl(27, 66%, 92%);
    color: hsl(27, 66%, 92%);
    padding: 20px;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 400px;
`;

export const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: hsl(10, 79%, 65%);
    width: 100%;
    border-radius: 10px;
    min-height: 90px;
    padding: 10px 20px;
    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        > p:first-child {
            font-size: 0.8rem;
            line-height: 0.8rem;
            margin: 0;
        }
        > p:last-child {
            font-size: 1.2rem;
            line-height: 1.2rem;
            font-weight: 700;
            margin: 0;
            margin-top: 7px;
        }
    }
`;

export const CardBody = styled.div`
    background-color: hsl(33, 100%, 98%);
    width: 100%;
    padding: 10px 20px;
    margin-top: 15px;
    border-radius: 10px;
    > h2 {
        color: hsl(25, 47%, 15%);
        font-size: 1.2rem;
        line-height: 1.2rem;
        font-weight: 700;
        text-align: left;
    }
`;

export const Chart = styled.div`
    width: 100%;
    height: 200px;
    margin: 20px 0;
`;

export const CustomHr = styled.hr`
    background-color: hsl(27, 66%, 92%);
    border: none;
    height: 3px;
    border-radius: 50%;
`;

export const CardSummary = styled.div`
    display: flex;
    justify-content: space-between;
    color: hsl(25, 47%, 15%);
    min-height: 60px;
`;

export const ThisMonth = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    > p:first-child {
        font-size: 0.8rem;
        line-height: 0.8rem;
        font-weight: 700;
        margin: 0;
        color: hsl(28, 10%, 53%);
        text-align: left;
    }
    > p:last-child {
        font-size: 2.2rem;
        line-height: 2.2rem;
        font-weight: 700;
        margin: 0;
        margin-top: 7px;
        text-align: left;
        @media (max-width: 768px) {
            font-size: 1.6rem;
        }
    }
`;

export const LastMonth = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    > p:first-child {
        font-size: 0.8rem;
        line-height: 0.8rem;
        font-weight: 700;
        margin: 0;
        margin-top: 7px;
        text-align: right;
    }
    > p:last-child {
        font-size: 0.8rem;
        line-height: 0.8rem;
        font-weight: 700;
        margin: 0;
        color: hsl(28, 10%, 53%);
        text-align: right;
    }
`;
