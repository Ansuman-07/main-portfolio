import React from 'react';
import Skeleton from '@mui/material/Skeleton';

const LoadingSkeleton = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center relative' >
      <Skeleton variant="circle" width={50} height={50} style={{position:'absolute',top:17 ,left:92 ,borderRadius:'50%'}}/>
      <Skeleton variant='box'   style={{position:'absolute',width:'10vh',height:'60vh', top:70,left:10 ,borderRadius:'20px'}} />
      <Skeleton variant="circle" style={{width:'20vw',height:'20vw',minWidth:'85px',minHeight:'85px',maxWidth:'200px',maxHeight:'200px', borderRadius:'50%',marginTop:'-5%',marginLeft:'5%'}}/>
      <Skeleton variant="text" sx={{ fontSize: '2rem',width:'40vw',marginTop:'20px',marginLeft:'5%'} } />
      <Skeleton variant="text" sx={{ fontSize: '1.3rem',width:'30vw',marginLeft:'5%'}} />
      
            <div className="link flex mt-4 " style={{marginLeft:'5%'}}>
            <Skeleton variant="circle" style={{width:'5vw',height:'5vw',minWidth:'25px',minHeight:'25px',maxWidth:'55px',maxHeight:'55px',borderRadius:'50%'}}/>
            <Skeleton variant="circle" style={{width:'5vw',height:'5vw',minWidth:'25px',minHeight:'25px',maxWidth:'55px',maxHeight:'55px',borderRadius:'50%',marginLeft:'10px'}}/>
            <Skeleton variant="circle" style={{width:'5vw',height:'5vw',minWidth:'25px',minHeight:'25px',maxWidth:'55px',maxHeight:'55px',borderRadius:'50%',marginLeft:'10px'}}/>
            <Skeleton variant="circle" style={{width:'5vw',height:'5vw',minWidth:'25px',minHeight:'25px',maxWidth:'55px',maxHeight:'55px',borderRadius:'50%',marginLeft:'10px'}}/>
            </div>

    </div>
  );
};

export default LoadingSkeleton;