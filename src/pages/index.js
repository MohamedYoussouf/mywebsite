import React, { Component } from 'react';
import Link from 'gatsby-link';
import Layout from '../components/layout'
import Navbar from '../components/navbar';

const IndexPage = () => {
  return (
    <div className="container mx-auto px-4">
      <Navbar/>
      <button class="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Button
      </button>
    </div>
  )
}

export default IndexPage