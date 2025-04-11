'use client'
import React, { useState } from 'react'
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut
    
  } from "@/components/ui/menubar"
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
    <h1 className="text-teal-500 menuItem" onClick={()=>handleLink("Cricut")}>Cricut</h1>
    <h1 className="menuItem">CVS</h1>
    <h1 className="menuItem">Microsoft</h1>
    <h1 className="menuItem">Canva</h1>
  
</div>
// </div>
  )
}

export default HeaderComponent