import React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div className="container-inner text-center py-20">
      <h1>الصفحة المطلوبة غير موجودة!</h1>
      <p className="text-lg mb-12">لم يتم العثور على الصفحة المطلوبة. قد يكون الرابط خاطئ أو الصفحة حذفت.</p>
      <Link to="/" className="bg-primary px-5 py-2 text-white font-display font-bold rounded hover:no-underline focus:no-underline">عودة للصفحة الرئيسية</Link>
    </div>
  </Layout>
)

export default NotFoundPage
