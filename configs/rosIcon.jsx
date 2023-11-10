import * as React from "react"
const RosIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" 
  // width={1024} 
  // height={1024} 
  width="18" // Set a standard width
  height="18" // Set a standard height
  viewBox="0 0 1024 1024" // Adjust viewBox to maintain the aspect ratio
  {...props}
>
    <circle
      cx={120}
      cy={120}
      r={116}
      style={{
        fill: "#000000",
      }}
    />
    <circle
      cx={512}
      cy={120}
      r={116}
      style={{
        fill: "#000000",
      }}
    />
    <circle
      cx={904}
      cy={120}
      r={116}
      style={{
        fill: "#000000",
      }}
    />
    <circle
      cx={120}
      cy={512}
      r={116}
      style={{
        fill: "#000000",
      }}
    />
    <circle
      cx={512}
      cy={512}
      r={116}
      style={{
        fill: "#000000",
      }}
    />
    <circle
      cx={904}
      cy={512}
      r={116}
      style={{
        fill: "#000000",
      }}
    />
    <circle
      cx={120}
      cy={904}
      r={116}
      style={{
        fill: "#000000",
      }}
    />
    <circle
      cx={512}
      cy={904}
      r={116}
      style={{
        fill: "#000000",
      }}
    />
    <circle
      cx={904}
      cy={904}
      r={116}
      style={{
        fill: "#000000",
      }}
    />
  </svg>
)
export default RosIcon
