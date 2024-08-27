import React from 'react'
import Header from '../components/common/Header'
import { motion } from 'framer-motion'
import StatCard from '../components/common/StatCard'
import { AlertTriangle, DollarSign, Package, TrendingUp } from 'lucide-react'
import ProductTable from '../components/products/ProductTable'
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart'
import SalesTrendChart from '../components/products/SalesTrendChart'

const ProductsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
      <Header title="Products" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8 xl:px-12">
       {/* STATS */}
        <motion.div
         className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{duration:1}}
        >
         <StatCard name="Total Products" value={1234} icon={Package} color="#6366f1" />
         <StatCard name="Top Selling" value={89} icon={TrendingUp} color="#10b981" />
         <StatCard name="Low Stock" value={23} icon={AlertTriangle} color="#f59e0b" />
         <StatCard name="Total Revenue" value={"$543,210"} icon={DollarSign} color="#ef4444" />
        </motion.div>

        <ProductTable />

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
        
      </main>

    </div>
  )
}

export default ProductsPage
