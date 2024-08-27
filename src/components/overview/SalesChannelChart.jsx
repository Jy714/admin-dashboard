import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell } from "recharts";

const COLORS = ["#6366F1", "#8B5CF6", "#EC4899", "#10B981", "#F59E0B"];

const SALES_CHANNEL_DATA = [
	{ name: "Website", value: 45600 },
	{ name: "Mobile App", value: 38200 },
	{ name: "Marketplace", value: 29800 },
	{ name: "Social Media", value: 18700 },
];

const SalesChannelChart = () => {
  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border lg:col-span-2 border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{delay:0.3}}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales By Channel</h2>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <BarChart
            data={SALES_CHANNEL_DATA}
          >
            <XAxis stroke="#9ca3af" dataKey={"name"}  />
            <YAxis stroke="#9ca3af" dataKey={"value"} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31,41,55,0.8)",
                borderColor: "#4b5563"
              }}
              itemStyle={{ color: "#e5e7eb" }}
            />
            <Legend />
            <Bar
              dataKey={"value"}
              fill="#8884d8"
            >
              {SALES_CHANNEL_DATA.map((entry, index) => { 
                return (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                )
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

    </motion.div>
  )
}

export default SalesChannelChart
