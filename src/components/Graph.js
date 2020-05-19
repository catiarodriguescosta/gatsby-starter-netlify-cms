import React from "react"
import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceLine, Tooltip, Legend} from 'recharts';

const data = [
    {name: '28-01-2020', week: 'W0' ,  lb:  0,    lbw:  0   },
    {name: '04-02-2020', week: 'W1' ,  lb: -2.5,  lbw: -2.5 },
    {name: '11-02-2020', week: 'W2' ,  lb: -2.5,  lbw:  0   },
    {name: '18-02-2020', week: 'W3' ,  lb: -3,    lbw: -0.5 },
    {name: '25-02-2020', week: 'W4' ,  lb: -5.5,  lbw: -2.5 },
    {name: '03-03-2020', week: 'W5' ,  lb: -6.5,  lbw: -1   },
    {name: '10-03-2020', week: 'W6' ,  lb: -8,    lbw: -1.5 },
    {name: '17-03-2020', week: 'W7' ,  lb: -8,    lbw:  0   },
    {name: '24-03-2020', week: 'W8' ,  lb: -9,    lbw: -1   },
    {name: '31-03-2020', week: 'W9' ,  lb: -10.5, lbw: -1.5 },
    {name: '07-04-2020', week: 'W10' ,  lb: -10.5, lbw:  0.5 },
    {name: '14-04-2020', week: 'W11' ,  lb: -10,   lbw: -2   },
    {name: '21-04-2020', week: 'W12' ,  lb: -12,   lbw: -1.0 },
    {name: '28-04-2020', week: 'W13' ,  lb: -13,   lbw:  0   },
    {name: '05-05-2020', week: 'W14' ,  lb: -14.5, lbw: -1.5 },
    {name: '12-05-2020', week: 'W15' ,  lb: -15.5, lbw: -1   },
    {name: '19-05-2020', week: 'W16'  },
];

const tooltip_style = {
    fontSize: '14px', 
    fontFamily: "Barlow Semi Condensed", 
    fontWeight: "500"
}
const tooltip_content_style = {
    fontSize: '16px', 
    fontFamily: "Barlow Semi Condensed", 
    fontWeight: "700"
}

const Graph = () => (

    <ResponsiveContainer height={500} >
        <LineChart data={data} margin={{top: 20, right: 20, bottom: 20, left: 0}}>
            <CartesianGrid stroke='#eee'  strokeDasharray="2 2"/>
            <XAxis dataKey="week"  orientation="top"/>
            <YAxis domain={[-30, 'dataMax + 4.5']} />
            <Tooltip itemStyle={tooltip_style} contentStyle={tooltip_content_style}/>
            <Legend margin={{ top: 10, left: 0, right: 0, bottom: 0 }}/>
            <ReferenceLine y={0} stroke="#ccc" strokeDasharray="1 1" />
            <ReferenceLine y={-26} stroke="green" strokeDasharray="1 1" label="" />
            <ReferenceLine y={-37} stroke="blue" strokeDasharray="1 1" label="" />
            <Line name="Weight Loss per week (lb)" type='linear' dataKey='lbw' stroke='#413ea0' />
            <Line name="Total Weight Loss (lb)" type='monotone' dataKey='lb' stroke='#ff7300' />
        </LineChart>
    </ResponsiveContainer>
);

export default Graph;