import React from 'react';
import image from '../assets/image2.jpg'; // Ensure the path and file exist

function Previous() {
  return (
    <div style={{ color: 'white', backgroundColor: '#3670FF', width: '100%', height: '560px',display:'flex',justifyContent:'center' }}>
      <div style={{height: '550px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center' }}>
        <img 
          src={image} 
          alt="Descriptive text" 
          style={{ width: '100%', height: '400px',marginTop:'70px',borderRadius:'20px' }} 
        />
        <p style={{width:'100%',textAlign:'center',fontSize:'30px',color:'#FCD600',fontFamily:'Covered By Your Grace'}}>A glimpse from Previous edition</p>
      </div>
    </div>
  );
}

export default Previous;