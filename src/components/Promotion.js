import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{data.promotionHeading}</h1>
          </Fade>
          {/* <p>{data.promotionPara}</p> */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
              /* contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} */
              date="2017 - 2021"
            />
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h4 className="vertical-timeline-element-subtitle">Computer Science</h4>
            <p>
              MEA Engineering College, Perinthelmanna
            </p>
            <VerticalTimelineElement />
          </VerticalTimeline>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
              /* contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} */
              date="2016 - 2017"
            />
            <h3 className="vertical-timeline-element-title">11th & 12th</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              Spring Valley School, NIT, Calicut
            </p>
            <VerticalTimelineElement />
          </VerticalTimeline>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(33, 150, 243)', color: 'black' }}
              /* contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }} */
              date="2015"
            />
            <h3 className="vertical-timeline-element-title">10th</h3>
            {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              International Indian School, Riyadh
            </p>
            <VerticalTimelineElement />
          </VerticalTimeline>
        </div>
      </div>
    </div>
  )
}

export default Promotion
