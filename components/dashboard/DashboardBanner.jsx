"use client"
import { CreditCard, X } from 'lucide-react';
import React, { useState } from 'react'
export default function DashboardBanner() {
  const [hidden,setHidden]=useState(false)
    return (
      <div className={`${hidden?"hidden":"grid grid-cols-12 items-center px-16 py-6 bg-white gap-4 relative"}`}>
         {/* Icon */}
         <div className="col-span-2">
         <CreditCard className="w-16 h-16 text-slate-500"/>
         </div>
         {/* Text */}
         <div className="col-span-6">
         <h2 className="font-bold text-2xl">Start accepting online payements </h2>
         <p> buisenesses are moving towards online payements as they're easy, secure and fast. try them for your buiseness today. </p>   
         </div>
         {/* button */}
         <div className="col-span-3">
         <button className="py-2 px-8 uppercase bg-blue-500 text-white text-sm rounded-lg" >Enable</button>
         </div>
          {/* close Icon */}
          <button onClick={()=>setHidden(true)} className=" absolute top-4 right-16">
            <X  className=" text-slate-600"/>
          </button>
      </div>
        
    );
  }