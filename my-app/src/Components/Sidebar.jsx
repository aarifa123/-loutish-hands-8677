import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

export default function Sidebar() {
  return (
    <div>
      <button className="btn btn-light"  type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" ><MenuIcon
      style={{
        height:"70px",
        fontSize:"50px",
        color:"lightblack"
        
              }}
      /></button>
<img src="https://d1k0rbiro50qe0.cloudfront.net/logo-full.svg" alt="Brand logo" style={{
    marginLeft:"40px"
}} />
<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Offcanvas with body scrolling</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </div>
</div>
    </div>
  )
}
