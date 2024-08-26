import React from 'react'

function Images(props) {
  return (
    <>
    <div className='border-2'>
      <img className='  shadow-white rounded' height={300} width={300} src={props.imgsrc} alt="" />
      <h2>BMW Gs 1250 R</h2>
    </div>
    </>
  )
}
export default Images