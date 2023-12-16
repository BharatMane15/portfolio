import React, { useEffect, useState } from "react"

// Styles
import "./portfolio.css"

// components
import { Heading } from "components/Heading/Heading"

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt"
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare"
import { faUserLock } from "@fortawesome/free-solid-svg-icons/faUserLock"

import PortfolioItem from "./PortfolioItem/PortfolioItem"

import FoodieSearchThumbnail from '../../images/FoodieSearchAppThumbnail.png'
import userSearchThumbnail from '../../images/userSearchThumbnail.png'

const Projects = ({ projects }) => {
  const [selected, setSelected] = useState("featured")
  const [data, setData] = useState([])
  const [projectList, setProjectList] = useState([])

  useEffect(() => {
    let tempList = []
    projects.map(({ category }) => {
      if (!tempList.includes(category)) {
        tempList.push(category)
      }

      return null
    })
    setProjectList(tempList)
  }, [projects])

  useEffect(() => {
    projectList.map((list) => {
      if (selected === list) {
        setData(projects.filter((project) => project.category === list))
      }

      return null
    })
  }, [selected, projectList, projects])


   const ProjData = [
    {
    category: "frontend",
    liveUrl: "https://bharatmane15.github.io/github_user_search/",
    repositoryUrl: "https://github.com/BharatMane15/github_user_search",
    img: `${userSearchThumbnail}`,
    id: 19,
    title: "Github User Search",
    tagline: "Website"
},
{
  category: "frontend",
  liveUrl: "https://bharatmane15.github.io/Foodie-Search-App/",
  repositoryUrl: "https://github.com/BharatMane15/Foodie-Search-App",
  img: `${FoodieSearchThumbnail}`,
  id: 19,
  title: "Foodie Search",
  tagline: "Static Website"
}
]

  return (
    <section
      data-aos="fade-left"
      className="portfolio"
      name="projects"
      id="projects"
    >
      <Heading text="< Projects />" style={{ padding: "3rem" }} />
      {/* <div className="list">
        {projectList &&
          projectList.map((list) => (
            <PortfolioItem
              title={list}
              key={list}
              active={selected === list}
              setSelected={setSelected}
              id={list}
            />
          ))}
      </div> */}
      <div className="row">
        {ProjData.length &&
          ProjData.map((item, index) => (
            <div className="column" key={index}>
              <img src={item?.img} alt={item.title} />
              <div className="overlay">
                <div className="left">
                  <h3>{item.title}</h3>
                  {item.tagline && <p>{item.tagline}</p>}
                </div>
                <div className="right">
                  {item.repositoryUrl !== "private" ? (
                    <a href={item.repositoryUrl}>
                      <FontAwesomeIcon
                        icon={faGithubSquare}
                        size="2x"
                        className="icon"
                        style={{ marginRight: "0.3em" }}
                        title="Github Repo"
                      />
                    </a>
                  ) : (
                    <a href="#_">
                      <FontAwesomeIcon
                        icon={faUserLock}
                        size="2x"
                        className="icon"
                        style={{ marginRight: "0.3em" }}
                        title="Private Repo"
                      />
                    </a>
                  )}

                  {item.liveUrl !== "private" ? (
                    <a
                      href={item.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faExternalLinkSquareAlt}
                        size="2x"
                        className="icon"
                        title="Live view"
                      />{" "}
                    </a>
                  ) : (
                    <a href="#_" rel="noopener noreferrer">
                      <FontAwesomeIcon
                        icon={faUserLock}
                        size="2x"
                        className="icon"
                        title="Private Link"
                      />{" "}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

export default Projects
