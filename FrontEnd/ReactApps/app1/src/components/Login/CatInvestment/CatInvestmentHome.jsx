import React from 'react'
import InvestmentTable from './InvestmentTable'
import { Link } from 'react-router-dom'

const CatInvestmentHome = () => {
  return (
    <div>
        <Link to="/addInvestment">
             Add Investment
        </Link>
        <InvestmentTable/>
    </div>
  )
}

export default CatInvestmentHome
