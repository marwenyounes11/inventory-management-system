import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/header';
import React from 'react'
export default function Layout({children}) {
    return (
      <div className="flex">
      <Sidebar/>
      <main className=" ml-60 w-full min-h-screen bg-slate-100">
        <Header/>
        {children}
      </main>
      </div> 
    );
  }