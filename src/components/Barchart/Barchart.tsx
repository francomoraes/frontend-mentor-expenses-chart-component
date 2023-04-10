import ReactEcharts from 'echarts-for-react';
import { useEffect, useState } from 'react';

export default function Barchart({ reference }: any) {
    const [option, setOption] = useState<any>();

    useEffect(() => {
        const amounts = reference.map((item: any) => item.amount);

        const tempData = amounts.map((item: any) => {
            return { value: item };
        });

        const index = new Date().getDay();

        tempData[index].itemStyle = {
            color: 'hsl(186, 34%, 60%)',
            emphasis: {
                color: '#B4DFE5'
            }
        };

        setOption({
            tooltip: {
                position: 'top',
                backgroundColor: 'hsl(25, 47%, 15%)',
                borderColor: 'hsl(25, 47%, 15%)',
                textStyle: {
                    color: 'hsl(0, 0%, 100%)'
                },
                formatter: (params: any) => {
                    return (
                        '<span style="color:hsl(0, 0%, 100%)">' +
                        '<strong>' +
                        '$' +
                        params.value +
                        '</strong>' +
                        '</span>'
                    );
                }
            },
            xAxis: {
                type: 'category',
                data: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                }
            },
            series: [
                {
                    data: tempData || [],
                    type: 'bar',
                    itemStyle: {
                        borderRadius: 4,
                        color: 'hsl(10, 79%, 65%)',
                        emphasis: {
                            color: '#FF9B87'
                        }
                    }
                }
            ],
            grid: {
                top: 0,
                left: 0,
                right: 0,
                bottom: 20
            }
        });
    }, [reference]);
    if (!option) return <div>Loading...</div>;

    return (
        <>
            <ReactEcharts
                option={option}
                style={{ height: '100%', width: '100%' }}
            />
        </>
    );
}
