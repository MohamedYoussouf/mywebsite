import React from 'react';
import {Link, StaticQuery, graphql} from 'gatsby';
import SocialLink from './socialLink'


const Footer = (props) => {
    const listSocialLinks = <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      data.site.siteMetadata.socialProfiles.map(profile=>{
          return (
              <SocialLink name={profile.name} url={profile.url}/>
          );
      })
    )}
  />
    return (
        <footer className=" py-20 text-center bg-gray-900 text-white">
            <div className="container-inner mx-auto">
                <div className="mb-5">
                    <Link className="px-2 text-gray-200" to="/">Link</Link>
                    <Link className="px-2 text-gray-200" to="/">Link</Link>
                    <Link className="px-2 text-gray-200" to="/">Link</Link>
                </div>
                <div className="mb-12">
                {listSocialLinks}
                </div>
                <p className="text-sm mb-0 text-gray-600">جميع الحقوق محفوظة 2020</p>
            </div>
        </footer>
    );
}

export default Footer;