import React from 'react'
import TopNav from '../Components/TopNav'
import Navbar from '../Components/Navbar'
import CategoryNav from '../Components/CategoryNav'
import Banner1 from '../Components/Banner1'
import Category from '../Components/Category'
import  MiniBanners from "../Components/MiniBanners"
export default function Home() {
  return (
    <div>
    <TopNav/>
    <Navbar/>
    <CategoryNav/>
    < Banner1 />
    <Category/>
    <MiniBanners/>
    </div>
  )
}
