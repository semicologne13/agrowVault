import SectionHeading from '@/components/sectionheading';
import { benefits, portfolios, skills } from '@/constants';
import { ArrowRight, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import PortfolioItem from '@/components/portfolioitem'
import TestimonialSection from '@/components/testimonial';
import FAQSection from '@/components/faq';

const page = () => {
  return (
    <>
      <section className='flex items-center max-width flex-col-reverse tablet:flex-row mb-10'>
        <div className='tablet:w-2/3 mt-10 tablet:mt-10'>
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p className='px-4 py-2 bg-peach-500 text-grey-600 w-max rounded'>Hello There!</p>
            <h1 className='text-grey'>agrowVault welcomes you!!</h1>
            <p className='text-grey-600'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ullam labore voluptatibus, aspernatur facere at commodi corporis ipsam consectetur eaque, velit exercitationem! Quidem id similique dolores doloribus ad molestiae asperiores.
            </p>
          </div>
          <div className='flex gap-5 mt-10 justify-center tablet:justify-start'>
            <Link 
              href={"/contact"}
              className='btn btn-primary'
            >
              <Phone />
              Contact Now
            </Link>
            <Link 
              href={"/contact"}
              className='btn'
            >
              View Store
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className='bg-peach-400 w-full py-8 px-10 rounded-l-lg mt-16 flex-wrap gap-12 hidden tablet:flex'>
            <div className='text-grey-700'>
              <h3>55<span className='text-purple'>+</span></h3>
              <p className='text-grey-600'>Projects Completed</p>
            </div>
            <div className='text-grey-700'>
              <h3>55<span className='text-purple'>+</span></h3>
              <p className='text-grey-600'>Happy Farmers</p>
            </div>
            <div className='text-grey-700'>
              <h3>5<span className='text-purple'>+</span></h3>
              <p className='text-grey-600'>Years of Experience</p>
            </div>
          </div>
          <div className='mt-16 grid grid-cols-2 gap-3 tablet:hidden'>
            <div className='px-10 py-8 rounded-lg bg-peach-400 text-center col-span-2'>
              <h3>55<span className='text-purple'>+</span></h3>
              <p className='text-grey-600'>Projects Completed</p>
            </div>
            <div className='px-10 py-8 rounded-lg bg-peach-400 text-center col-span-2'>
              <h3>55<span className='text-purple'>+</span></h3>
              <p className='text-grey-600'>Happy Farmers</p>
            </div>
            <div className='px-10 py-8 rounded-lg bg-peach-400 text-center col-span-2'>
              <h3>5<span className='text-purple'>+</span></h3>
              <p className='text-grey-600'>Years of Experience</p>
            </div>
          </div>
        </div>
        <div className='relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px] rounded-b-2xl overflow-hidden'>
          <Image 
            src="/images/hero.png" 
            alt='' 
            className='object-cover'
            fill
          />
        </div>
      </section>
      <section className='max-width section-padding'>
        <SectionHeading 
          title="Blockchain Services In Agriculture"
          subtitle=""
        />
        <div className='grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6'>
          {
            skills.map((skill,index) => (
              <div key={index} className='box flex flex-col items-center gap-5'>
                <div className='w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2'>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    height={35}
                    width={35}
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-grey-700 mb-2">{skill.name}</h4>
                  <p className="text-grey-600">{skill.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
      

      <TestimonialSection />
      <FAQSection />
    </>
  )
}
export default page;