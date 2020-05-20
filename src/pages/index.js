import React, { Component } from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout'
import Navbar from '../components/navbar';
import ServiceCard from '../components/service'

import headerImage from '../images/img2.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <header className="py-20">
        <div className="container-inner mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="self-center w-auto text-center md:w-1/2 md:text-right">
              <h1 className="text-2xl md:text-4xl pl-6 mb-8">مرحباً أنا  محمد يوسف مصمم واجهات ومطور مستقل</h1>
              <a href="#work" className="text-primary font-display font-bold">شاهد أعمالي <i class="fas fa-arrow-left    "></i></a>
            </div>
            <img src={headerImage} className="w-auto mt-5 md:w-1/2 md:mx-0 " />
          </div>
        </div>
      </header>
      <section className=" py-6 md:py-16">
        <div className="container-inner">
          <h3 className="text-center text-3xl mb-16">خدماتي</h3>
          <div className="flex flex-col md:flex-row">
            <ServiceCard/>
            <ServiceCard/>
            <ServiceCard/>
          </div>
        </div>
      </section>
      <section className="py-32" id="work">
        <div className="container-inner">
          <h3 className="text-center text-3xl mb-16">أعمالي</h3>
          <div className="flex flex-col">
            <a href="#" className="work">
              <img src="https://via.placeholder.com/800x500"/>
              <div className="info">
                <h4>موقع Djibuy</h4>
              </div>
            </a>
            <div className=" mt-20 text-center">
              <a href="https://dribbble.com/MohamedMYA" className="px-5 py-3 bg-gray-900 text-white rounded shadow-lg no-underline font-display font-bold transition-colors duration-500 hover:bg-gray-800">شاهد المزيد على Dribbble <i className="fab fa-dribbble    "></i></a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-primary">
        <div className="container-inner">
          <h3 className="text-center text-3xl text-white mb-16">لذيك مشروع مثير للاهتمام؟</h3>
          <div className="flex justify-center">
            <Link className="mr-5 px-6 py-4 bg-gray-900 text-white font-display font-bold no-underline rounded shadow-lg">تواصل معي</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage