import React from 'react';

export default function Banner1() {
  return (
    <div style={{ position: 'relative' }}>
      <img src="https://prod.davidsbridal.com/content/dam/aem-integration/site-promos/3-28-celebrate-bm-hp/3.28_HP_BM_Celebrate_Desktop_1700.jpg" alt="" />
      <img style={{ position: 'absolute', top: '40%', left: '55%', transform: 'translate(-50%, -50%)' }} src="https://prod.davidsbridal.com/content/dam/aem-integration/site-promos/3-28-celebrate-bm-hp/3.28_HP_BM_Celebrate_Copy_Desktop.png" alt="" />

      <button style={{ position: 'absolute', top: '80%', left: '50%', transform: 'translate(-50%, -50%)',width:"400px" ,backgroundColor: 'transparent',
        height:"50px",
        marginLeft:"80px",
        backgroundColor: 'transparent',
        color: 'black',
        border: 'black 1px solid',
        outline: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out'
        
         }}onMouseEnter={(e) => { e.target.style.backgroundColor = 'black'; e.target.style.color = 'white'; }}
         onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'black'; }} >
            SHOP BRIDESMAID DRASSES UNDER $100
         </button>
      <button style={{ position: 'absolute', top: '90%', left: '50%', transform: 'translate(-50%, -50%)',width:"400px",backgroundColor: 'transparent',
        color: 'black',
        height:"50px",
        marginLeft:"80px",
        border: 'black 1px solid',
        outline: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease-in-out, color 0.2s ease-in-out' }} 
        onMouseEnter={(e) => { e.target.style.backgroundColor = 'black'; e.target.style.color = 'white'; }}
         onMouseLeave={(e) => { e.target.style.backgroundColor = 'transparent'; e.target.style.color = 'black'; }}  >SHOP ALL BRIDESMAID DRESSES</button>
     
    </div>
    
  );
}
{/* <button style={{ backgroundColor: 'transparent', color: 'black', border: '1px solid black' }} className="btn1">SHOP BRIDESMAID DRESSES UNDER $100</button> */}
{/* <button style={{ backgroundColor: 'transparent', color: 'black', border: '1px solid black' }} className="btn2">SHOP BRIDESMAID DRESSES UNDER $100</button> */}
