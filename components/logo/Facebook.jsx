import * as React from "react"
import "./logo.css"

const Facebook = (props) => (
  <svg
    className="facebook icon"
    clipRule="evenodd"
    fillRule="evenodd"
    imageRendering="optimizeQuality"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    viewBox="0 0 7600 7600"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M6175 0H1425C638 0 0 638 0 1425v4750c0 787 638 1425 1425 1425h4750c787 0 1425-638 1425-1425V1425C7600 638 6962 0 6175 0zm-193 4093h-711v2632H4083V4093h-461v-887h461v-565c0-740 308-1180 1180-1180h884v883h-514c-340 0-362 127-362 363l-1 498h808l-97 887z" />
  </svg>
)

export default Facebook