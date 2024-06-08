
import { BaggageClaim, BarChart4, Cable, ChevronLeft, File, Home, Search, ShoppingBag, ShoppingBasket, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import SubscriptionCard from './SubscriptionCard';
export default function Sidebar() {
    return (
        <div className="w-60 min-h-screen bg-slate-800  text-slate-50  fixed">
           {/* Top Part*/}
           <div className="flex flex-col">
             {/* Logo */}
             <Link href="#" className=" bg-slate-950 flex space-x-2 items-center py-3 px-2">
                <ShoppingCart/>
                <span className="text-xl font-semibold">Inventory</span>
             </Link>
             {/* Links */}
             <nav className="flex flex-col gap-3 px-3 py-6">
              <Link className=" flex space-x-2 items-center bg-blue-600 text-slate-50 py-2 px-2 rounded-md" href="#">
                <Home className="w-4 h-4"/>
                <span>Home</span>
              </Link>
              <button className=" p-2 flex space-x-2 items-center " >
                <BaggageClaim className="w-4 h-4"/>
                <span>Inventory</span>
              </button>
              <button className="p-2 flex space-x-2 items-center " >
                <ShoppingBasket className="w-4 h-4"/>
                <span>Sales</span>
              </button>
              <button className=" p-2 flex space-x-2 items-center " >
                <ShoppingBag className="w-4 h-4"/>
                <span>Purchases</span>
              </button>
              <Link className="  p-2 flex space-x-2 items-center " href="">
                <Cable className="w-4 h-4"/>
                <span>Integrations</span>
              </Link>
              <Link className=" p-2 flex space-x-2 items-center " href="">
                <BarChart4 className="w-4 h-4"/>
                <span>Reports</span>
              </Link>
              <Link className="p-2 flex space-x-2 items-center " href="">
                <File className="w-4 h-4"/>
                <span>Documents</span>
              </Link>
             </nav>
             <SubscriptionCard/>
           </div>
           {/* Bottom */}
           <div className="flex flex-col ">
           <button className=" bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2">
                <ChevronLeft/>
             </button>
           </div>
           {/* Subscription card */}
           {/* Footer Icon */}
      </div>
    );
  }