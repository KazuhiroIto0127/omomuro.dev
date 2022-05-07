import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AuthorIcon from "../components/author_icon"
import { AiOutlineTwitter } from "react-icons/ai";
import * as styles from '../styles/_about.module.scss'
import Fade from 'react-reveal/Fade';
import Wobble from 'react-reveal/Wobble';
import { DiSass, DiDatabase, DiMysql, DiSwift, DiCss3, DiReact, DiHtml5, DiJavascript1, DiRubyRough, DiRor } from "react-icons/di";
import { IoLogoVue } from "react-icons/io5";
import Omomuro from "../images/omomuro.svg";
import { StaticImage } from "gatsby-plugin-image"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const skillList = [];

  const skillArray = [
    { name: "Ruby", icon: <DiRubyRough />},
    { name: "Ruby on Rails", icon: <DiRor />},
    { name: "Javascript", icon: <DiJavascript1 />},
    { name: "Vue.js", icon: <IoLogoVue />},
    { name: "React.js", icon: <DiReact />},
    { name: "HTML", icon: <DiHtml5 />},
    { name: "CSS", icon: <DiCss3 />},
    { name: "Sass", icon: <DiSass />},
    { name: "SwiftUI", icon: <DiSwift />},
    { name: "MySql", icon: <DiMysql />},
    { name: "PL/SQL", icon: <DiDatabase />},
  ];
  for(var i in skillArray){
    skillList.push(
      <Fade bottom key={`${skillArray[i].name}`}>
        <li>
          {skillArray[i].icon}
          {skillArray[i].name}
        </li>
      </Fade>
    );
  }

  return (
    <Layout
      location={location}
      title={siteTitle}
      main={
        <React.Fragment>
          <Seo title="About" />
          <div className={styles.contentWrap}>
            <article className={styles.post}>
              <Wobble bottom cascade>
                <Omomuro className={styles.svg}/>
              </Wobble>
              <StaticImage
                  className={styles.avatar}
                  layout="fixed"
                  formats={["AUTO", "WEBP", "AVIF"]}
                  src="../images/ペンギン6.png"
                  width={100}
                  height={100}
                  quality={95}
                  alt="Profile picture"
                />
              <div>
                <p>おもむろにdevしたいということで、Kazuhiro Itoが日々の雑記や作ったものを紹介するためのサイトです。</p>
              </div>
              <h2>Author</h2>
              <section>
                <h3>Profile</h3>
                <Wobble bottom cascade>
                <div>
                  <AuthorIcon />
                  <p>Name: Kazuhiro Ito</p>
                  <p>Location: Tokyo, Japan</p>
                  <p>Birth: 1990/01/27</p>
                  <p>Like: Computer, Art, Design, Photo</p>
                </div>
                </Wobble>
              </section>
              <section>
                <h3>SNS</h3>
                <Fade bottom cascade>
                  <div>
                    <a href={`https://twitter.com/${social?.twitter || ``}`}>
                      <AiOutlineTwitter /> @{social?.twitter}
                    </a>
                  </div>
                </Fade>
              </section>
              <section>
                <h3>Skill Set</h3>
                <div>
                  <ul className={styles.skills}>
                    {skillList}
                  </ul>
                </div>
              </section>
            </article>
          </div>
        </React.Fragment>
      }
    >
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
          summary
        }
        social {
          twitter
        }
      }
    }
  }
`
