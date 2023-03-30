import React from 'react'

export default function CategoryNav() {
  return (
    <div style={{
        margin:"0"
    }}>
        <hr style={{
        margin:"0"
    }} />
      <nav style={{
        display:"flex",
        gap:"30px",
        alignItems:"center",
        justifyContent:"center",
        margin:"0"
      }}>
      <p href="#"  style={{
        color:"#E30B5C"
    }}>🔥HOT DEALS</p>
<p href="#">BRIDES</p>
<p href="#">BRIDESMAIDS</p>
<p href="#">DRESSES</p>
<p href="#">PROM</p>

<p href="#">ACCESSORIES</p>
<p href="#">SHOES</p>
<p href="#">GIFTS&DECOR</p>
<p href="#" style={{
        color:"#E30B5C"
    }}>SALE</p>

      </nav>
      <hr style={{
        margin:"0"
    }}/>
    </div>
  )
}
