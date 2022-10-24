import { Col } from "react-bootstrap";
import {  } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, linkUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <button onClick={() => linkUrl}> access the website </button>
          
        </div>
      </div>
    </Col>
  )
}