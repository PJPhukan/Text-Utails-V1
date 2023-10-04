import React from 'react'

function Alart(props) {

  const capitalize = (word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + word.slice(1)
  }
  return (
    <div style={{ height: "30px" }}>
    {  props.alart && <div className={`alert alert-${props.alart.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alart.type)}</strong> :{props.alart.msg}
      </div>}
      {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>

  )
}

export default Alart
