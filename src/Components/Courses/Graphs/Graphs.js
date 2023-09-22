import React from 'react'
import { BarChart, Bar, AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "../Graphs/Graphs.css"

const data = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
        number: 0,
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
        number: 0,
    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
        number: 10,
    },
    {
        name: 'Apr',
        uv: 2780,
        pv: 3908,
        amt: 2000,
        number: 20,
    },
    {
        name: 'May',
        uv: 1890,
        pv: 4800,
        amt: 2181,
        number: 30,
    },
    {
        name: 'Jun',
        uv: 2390,
        pv: 3800,
        amt: 2500,
        number: 40,
    },
    {
        name: 'jul',
        uv: 3490,
        pv: 4300,
        amt: 2100,
        number: 50,
    },
    {
        name: 'Aug',
        uv: 3490,
        pv: 4300,
        amt: 1100,
        number: 60,
    },
    {
        name: 'sep',
        uv: 3490,
        pv: 2300,
        amt: 3100,
        number: 70,
    },
    {
        name: 'Oct',
        uv: 3490,
        pv: 1300,
        amt: 4100,
        number: 80,
    },
    {
        name: 'Nov',
        uv: 3490,
        pv: 2300,
        amt: 3100,
        number: 90,
    },
    {
        name: 'Dec',
        uv: 3490,
        pv: 3300,
        amt: 2100,
        number: 100,
    },
];




const Graphs = () => {
    return (
        <>
            <div className="graphs">
                <div className="graphs1">
                    <div className="student">
                        <div className="student1">
                            <h3>Students Performance</h3>
                            <div className="para1">
                                <p id='term'>Monthly</p>
                                <p>weekly</p>
                            </div>
                        </div>
                        <ResponsiveContainer width="95%" height="85%">
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                {/* <Legend /> */}
                                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>

                    </div>
                    <div className="academic">
                        <div className="student1">
                            <h3>Academic Performance</h3>
                            <div className="para1">
                                <p id='term'>Monthly</p>
                                <p>weekly</p>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart width={150} height={40} data={data}>
                                <Bar dataKey="uv" fill="#8884d8" />
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="graphs2">
                    <div className="csepgraph">
                        <div className="student1">
                            <h3>CSEP</h3>
                            <div className="para1">
                                <p id='term'>Monthly</p>
                                <p>weekly</p>
                            </div>
                        </div>
                        <div className="item3">
                                <p>Design</p>
                                <p>Development</p>
                                <p>Testing</p>
                            </div>
                        <ResponsiveContainer width="95%" height="85%">
                            <LineChart
                                layout="vertical"
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" />
                                <Tooltip />
                                <Line dataKey="pv" stroke="#8884d8" />
                                <Line dataKey="uv" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="csapgraph">
                        <div className="student1">
                            <h3>CSAP</h3>
                            <div className="para1">
                                <p id='term'>Monthly</p>
                                <p>weekly</p>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                width={500}
                                height={400}
                                data={data}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <defs>
                                    {/* <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset={off} stopColor="green" stopOpacity={1} />
                                        <stop offset={off} stopColor="red" stopOpacity={1} />
                                    </linearGradient> */}
                                </defs>
                                <Area type="monotone" dataKey="uv" stroke="#000" fill="url(#splitColor)" />
                            </AreaChart>
                        </ResponsiveContainer>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Graphs