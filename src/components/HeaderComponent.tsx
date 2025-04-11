'use client'
import React, { useState } from 'react'

import { useRouter } from 'next/navigation';

const HeaderComponent = () => {
    const {push}=useRouter();

    const [company,setCompany]=useState('');
    const handleLink=(companyName:string)=>{
        setCompany(companyName);
        push(`./${company}`);
    }
  return (
//    <div className='w-20'>
      
       <div className='col-span-1 flex flex-col '>
    <p className="menuItem text-teal-500 menuItem" onClick={()=>handleLink("Cricut")}>Cricut</p>
    <p className="menuItem text-purple-500" onClick={()=>handleLink("Canva")}>Canva</p>
    <p className="menuItem text-red-500" onClick={()=>handleLink("Cvs_")}>CVS</p>
    <p className="menuItem text-blue-500" onClick={()=>handleLink("Microsoft")}>Microsoft</p>
    <p className="menuItem text-pink-500" onClick={()=>handleLink("Airbnb")}>Airbnb</p>
  
</div>
// </div>
  )
}

export default HeaderComponent