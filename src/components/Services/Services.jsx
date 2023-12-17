import React from "react";

// Styles
import "./services.css";

// Card
import { ServicesCard } from "components/Services/ServicesCard/ServicesCard";
import { Heading } from "components/Heading/Heading";
import servicesData from '../../data'

const Services = () => {
  let tempServices = []
servicesData.map((doc) => {
    
    return   tempServices.push(doc)
  
   })
  return (
    <section
      data-aos="fade-right"
      className="services-container"
      name="workedOn"
       id="services"
    >
      <Heading text="< Worked On />" />
      <div className="services-cards">
        {tempServices &&
          tempServices?.map(({ title, icon, tags }, index) => (
            <ServicesCard
              key={index}
              image={icon.asset.url}
              title={title}
              tags={tags}
            />
          ))}
      </div>
    </section>
  );
};

export default Services;
