import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import SocialLink from '../components/socialLink'


const ContactPage = (props) => (
  <Layout>
    <div className="container-inner flex flex-row py-16">
      <div className="flex flex-col">
        <div className="w-4/6">
          <h1 className="text-3xl">تواصل معي</h1>
          <p>إذا كان عندك مشروع وتريد من يساعدك به، أو تريد فقط القاء التحية فيمكنك تواصل معي عبر النموذج التواصل التالي أو عبر البريد الإلكتروني</p>
        </div>
        <div className="flex flex-col md:flex-row mt-8">
          <div className="w-auto md:w-4/6 pl-5 mb-16">
            <form className="flex flex-col">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mx-3 mb-8">
                  <label className="block font-display font-bold text-black mb-5">الاسم الكامل</label>
                  <input 
                    className="py-3 px-5 bg-gray-200 border-gray-300 border-2 focus:shadow-outline rounded-md w-full" 
                    type="text" 
                    placeholder="أدخل اسمك الكامل"/>
                </div>
                <div className="md:w-1/2 mx-3 mb-8">
                  <label className="block font-display font-bold text-black mb-5">البريد الإلكتروني</label>
                  <input 
                    className="py-3 px-5 bg-gray-200 border-gray-300 border-2 focus:shadow-outline rounded-md w-full" 
                    type="email" 
                    placeholder="أدخل بريدك الإلكتروني"/>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-full mx-3 mb-8">
                  <label className="block font-display font-bold text-black mb-5">العنوان</label>
                  <input 
                    className="py-3 px-5 bg-gray-200 border-gray-300 border-2 focus:shadow-outline rounded-md w-full" 
                    type="text" 
                    placeholder="أدخل عنوان الرسالة"/>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="w-full mx-3 mb-8">
                  <label className="block font-display font-bold text-black mb-5">الرسالة</label>
                  <textarea 
                    className="py-3 px-5 bg-gray-200 border-gray-300 border-2 focus:shadow-outline rounded-md w-full" 
                    rows="8"
                    placeholder="أكتب مضمون الرسالة..."></textarea>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="mx-3">
                  <button 
                    className="px-5 py-2 bg-primary text-white rounded font-display font-bold shadow-lg"
                    type="submit">
                      <i class="fas fa-paper-plane"></i> أرسل
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-auto md:w-2/6">
            <div className="mb-16">
              <label className="block font-display font-bold text-black mb-5">البريد الالكتروني</label>
              <a href="mailto:">demo@email.com</a>
            </div>
            <div className="mb-16">
              <label className="block font-display font-bold text-black mb-5">تواصل معي على</label>
              {
                // console.log(props.data.site.siteMetadata,'pooooooooo');
                props.data.site.siteMetadata.socialProfiles.map(profile=>{
                  return (
                    <a className="text-2xl ml-6"
                      href={profile.url}>
                      <i className={`fab fa-${profile.name}`}/>
                    </a>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  {
    site {
      siteMetadata {
        socialProfiles {
          name
          url
        }
      }
    }
  }
`

export default ContactPage