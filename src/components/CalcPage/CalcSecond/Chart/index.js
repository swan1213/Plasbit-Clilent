import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Chart = ({ priceHistory }) => {

    return (
        <div style={{ width: '100%' }}>

            <ResponsiveContainer width="100%" height={500}>
                <AreaChart
                    width={500}
                    height={200}
                    data={priceHistory}
                    syncId="anyId"
                    margin={{
                        top: 30,
                        right: 5,
                        left: 10,
                        bottom: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis domain={'auto'} />
                    <Tooltip />
                    <Area type="monotone" dataKey="price" stroke="#082848" fill="#00abff" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}