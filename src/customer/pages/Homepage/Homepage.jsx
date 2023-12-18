import React from 'react'
import MainCarausel from '../../components/homecarausel/MainCarausel'
import HomeSectionCarausel from '../../components/HomeSectionCarausel/HomeSectionCarausel'
import { mens_kurta } from '../../../Data/Mens_kurta'
import{kurtaPage1} from '../../../Data/Kurta/kurta'
import { mensPantsPage1 } from '../../../Data/pants/men_page1'

const Homepage = () => {
  return (
    <div>
        <MainCarausel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Men's Kurta"}/>
           <HomeSectionCarausel data={mensPantsPage1} sectionName={"Men's Pants"}/>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Men's Shirt"}/>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Men's Pant"}/>
           <HomeSectionCarausel data={mens_kurta} sectionName={"Women's Saree"}/>
        </div>
    </div>
  )
}

export default Homepage