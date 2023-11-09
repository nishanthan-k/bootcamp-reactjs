import React from 'react'
import '../css/CustomerBank.css'
import CustomerSidePanel from "./CustomerSidePanel"
import CustomerTable from "./CustomerTable"

const CustomerBank = () => {
  return (
    <>
      <div className='CustomerBank'>
        <div className='CustomerBankSideMenu'>
        <CustomerSidePanel />
        </div>
        <div className='CustomerBankTable'>
        <CustomerTable />
        </div>
      </div>
    </>
  )
}

export default CustomerBank