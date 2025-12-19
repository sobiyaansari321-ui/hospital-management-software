import React from 'react'
import SideNav from './SideNav'
import Header from './Header'

const Layout = ({children,title}) => {
  return (
    <div className='d-flex' style={{width:'100%',height:'100%'}}> 

        <div className='' style={{height:'100%',width:'10%'}}>
            <SideNav />
        </div>

        <div className='' style={{width:'83%', marginLeft:'auto'}}>

            <div className='' style={{}}>
                <Header title={title}/>
            </div>
            <div className=''>
                {children}
            </div>

        </div>
    </div>
  )
}

export default Layout
