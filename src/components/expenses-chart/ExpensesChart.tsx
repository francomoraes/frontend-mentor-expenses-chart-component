import { useEffect, useState } from 'react';
import Logo from '../../assets/logo.svg';
import Barchart from '../Barchart/Barchart';
import {
    Card,
    CardBody,
    CardContainer,
    CardHeader,
    CardSummary,
    Chart,
    CustomHr,
    LastMonth,
    ThisMonth
} from './ExpensesChart.styles';

export default function ExpensesCard() {
    const [fetchedData, setFetchedData] = useState();
    useEffect(() => {
        fetch('./data.json').then((res: any) =>
            res.json().then((data: any) => setFetchedData(data))
        );
    }, []);

    return (
        <CardContainer>
            <Card>
                <CardHeader>
                    <div>
                        <p>My balance</p>
                        <p>$921.48</p>
                    </div>
                    <img src={Logo} alt="logo" />
                </CardHeader>
                <CardBody>
                    <h2>Spending - Last 7 days</h2>
                    <Chart>
                        {fetchedData && <Barchart reference={fetchedData} />}
                    </Chart>
                    <CustomHr />
                    <CardSummary>
                        <ThisMonth>
                            <p>Total this month</p>
                            <p>$478.33</p>
                        </ThisMonth>
                        <LastMonth>
                            <p>+2.4%</p>
                            <p>Total last month</p>
                        </LastMonth>
                    </CardSummary>
                </CardBody>
            </Card>
        </CardContainer>
    );
}
