import React from 'react'
import '../css/CustomerSidePanel.css'
import DashboardImg from '../assets/img/dashboard.svg'
import CustomerImg from '../assets/img/customer.svg'

const CustomerSidePanel = () => {
  return (
    <>
      <div className='page'>
        <nav className='CustomerSideMenu' id='customer--side--menu'>
          <p className='CustomerBankName'>Lanchester Bank</p>

          <div className='CustomerSideMenuList'>

            <div className='CustomerSideMenuListDashboard'>
              <p className='CustomerSideMenuListDashboardtext'> <img src={DashboardImg} alt='Dashboard' className='customerSideMenuListDashboardImg' /> &nbsp;&nbsp; Dashboard</p>
            </div>

            <div className='CustomerSideMenuListCustomer'>
              <p className='CustomerSideMenuListCustomerText'> <img src={CustomerImg} alt='Customer' className='customerSideMenuListCustomerImg' /> &nbsp;&nbsp; Customer</p>
            </div>

          </div>
        </nav>
      </div>
    </>
  )
}

export default CustomerSidePanel