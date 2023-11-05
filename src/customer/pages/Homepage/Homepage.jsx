import React from 'react'
import MainCarausel from '../../components/homecarausel/MainCarausel'
import HomeSectionCarausel from '../../components/HomeSectionCarausel/HomeSectionCarausel'
import { mens_kurta } from '../../../Data/Mens_kurta'

const Homepage = () => {
  return (
    <div>
        <MainCarausel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Men's Kurta"}/>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Men's Shoes"}/>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Men's Shirt"}/>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Men's Pant"}/>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Women's Saree"}/>
        </div>
    </div>
  )
}

export default Homepage