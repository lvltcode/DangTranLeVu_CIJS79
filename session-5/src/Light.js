import React from 'react'

function Light(props) {
  return (
    <div
      style={{
        backgroundColor: props.lightOn && props.color
      }}
      className="m-2 w-12 h-12 rounded-full border-4">
    </div>
  )
}

export default Light;
