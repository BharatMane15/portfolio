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
import Ecom from '../../images/ECom.png'
import userSearchThumbnail from '../../images/userSearchThumbnail.png'

const Projects = ({  }) => {
  const [selected, setSelected] = useState("frontend")
  const [data, setData] = useState([])
  const [projectList, setProjectList] = useState([])


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
},
{
  category: "ECom",
  liveUrl: "private",
  repositoryUrl: "private",
  img: `${Ecom}`,
  id: 19,
  title: "Let’S Buy Shop",
  tagline: "Ecommerce Website"
},
// {
//   category: "Feature",
//   liveUrl: "private",
//   repositoryUrl: "private",
//   img: `${Ecom}`,
//   id: 19,
//   title: "Let’S Buy Shop",
//   tagline: "Ecommerce Website"
// }
]

  useEffect(() => {
    let tempList = ProjData.reduce((acc, { category }) => {
      if (!acc.includes(category)) {
        acc.push(category);
      }
      return acc;
    }, []);
    setProjectList(tempList);
  }, []);

  useEffect(() => {
    if (selected) {
      setData(ProjData.filter((project) => project.category === selected));
    } else {
      setData(ProjData); // Reset to show all projects if nothing is selected
    }
  }, [selected]);


  



console.log("projectList",projectList);
  return (
    <section
      data-aos="fade-left"
      className="portfolio"
      name="projects"
      id="projects"
    >
      <Heading text="< Projects />" style={{ padding: "3rem" }} />
      <div className="list">
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
      </div>
      <div className="row">
      {data.length &&
          data.map((item, index) => (
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
