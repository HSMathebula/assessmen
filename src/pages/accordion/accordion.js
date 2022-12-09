import React, { useState } from 'react'
import uuid from 'react-uuid';
import { FaArrowCircleRight, FaChevronDown, FaAngleUp } from "react-icons/fa";
import { animate, transform } from 'framer-motion';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

const items = [
  {
    uuid: uuid(),
    id: 'img1',
    heading: 'Lender',
    paragraph1: 'Simplify the mortgage process with a powerful pair of products: our award-winning eClose platform and best-in-class eVault.',
    paragraph2: 'Get valuable industry guidance from eMortgage experts with decades of experience in eNote adoption, change management, onboarding, and implementation support. ',
    image: 'https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Lender-Accordion-eVault.png'
  },
  {
    uuid: uuid(),
    id: 'img2',
    heading: 'Title & Escrow',
    paragraph1: '',
    paragraph2: 'Accelerate every mortgage closing and connect instantly with over 140,000 notary signing agents & attorneys for mobile & RON eClosings.',
    image: 'https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Title-Escrow.png'
  },
  {
    uuid: uuid(),
    id: 'img3',
    heading: 'Signing Service',
    paragraph1: '',
    paragraph2: 'Instantly source, vet, schedule, and pay for a qualified notary anywhere in the country.',
    image: 'https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Scheduling.png'
  },
  {
    uuid: uuid(),
    id: 'img4',
    heading: 'Lender',
    paragraph1: '',
    paragraph2: 'Access over 250,000 mobile and RON loan signing opportunities each month, gain exposure to 100+ hiring companies, and efficiently manage your business online.',
    image: 'https://www.snapdocs.com/hubfs/Web%20Pages%20-%20Home/Notary-signing-Agents.png'
  }
]

export const AccordionSection = () => {
  return (
    <div className='accordion-body container'>
      <Accordion className='all-items container'
      allowZeroExpanded>
        {items.map((item) => (
          <AccordionItem className='accordion-item' key={ item.uuid }>
            <div className='item-text'>
              <AccordionItemHeading>
                <AccordionItemButton className='heading' id={item.id}>
                  <h3 className='heading-span'>{ item.heading }</h3>
                  <FaChevronDown className='heading-arrow' />
                </AccordionItemButton>
              </AccordionItemHeading>

              <AccordionItemPanel className='item-panel-container'>
                <p className='paragraph1'>{ item.paragraph1 }</p>
                <p className='paragraph2'>{ item.paragraph2 }</p>

                <div className='cta'>
                  <a href="https://www.snapdocs.com/digital-mortgage-closing-platform">
                    <p className='cta1'>Expore the eSuite</p>
                  </a>
                  <a href="https://www.snapdocs.com/digital-mortgage-closing-platform">
                    <p className='cta2'>Request a demo</p>
                  </a>
                </div>

                <a href="https://www.snapdocs.com/digital-mortgage-closing-platform">
                  <p className='learn-more'>Leaen more<span><FaArrowCircleRight className='learn-icon' /></span></p>
                </a>
              </AccordionItemPanel>
            </div>

            <div className='accordion-img' id={item.id}>
              <AccordionItemPanel className='accordion-accord'>
                <img src={ item.image } className='img' alt=''/>
              </AccordionItemPanel>
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
