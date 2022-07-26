import "./chart.scss"
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {name: 'January', uv: 4000, pv: 2400, amt: 2400,},
  {name: 'February', uv: 3000, pv: 1398, amt: 2210,},
  {name: 'March', uv: 2000, pv: 9800, amt: 2002,},
  {name: 'April', uv: 2780, pv: 4014, amt: 4310,},
  {name: 'May', uv: 1890, pv: 4900, amt: 2110,},
  {name: 'June', uv: 2400, pv: 3402, amt: 7510,},
];

export const Chart = () => {
  return (
    <div className="chart">
      <div className="title">Last 6 month revenue</div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
      <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="coloramt" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#ba82ca" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#ba82ca" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
  <Area type="monotone" dataKey="amt" stroke="#ba82ca" fillOpacity={1} fill="url(#coloramt)" />
</AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart
