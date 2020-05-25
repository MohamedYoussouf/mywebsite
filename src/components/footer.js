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
        <footer className="py-20 bg-gray-900">
            <div className="container-inner mx-auto">
              <div className="flex justify-between items-center mb-8">
                <div>
                    <Link className="px-2 text-gray-600" to="/">Link</Link>
                    <Link className="px-2 text-gray-600" to="/">Link</Link>
                    <Link className="px-2 text-gray-600" to="/">Link</Link>
                </div>
                <div>
                {listSocialLinks}
                </div>
              </div>
              <p className="text-sm mb-0 text-gray-600">جميع الحقوق محفوظة 2020</p>
            </div>
        </footer>
    );
}

export default Footer;