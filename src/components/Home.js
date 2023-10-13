import React from 'react'
import myimage from './myimage.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

function Home() {
  return (
    <div className='min-h-screen h-[100%] mt-16 ml-16 p-4 flex flex-col justify-center items-center' id='home'>
        <div className="image  md:w-[20%] sm:w-[50%] w-[85%]  -mt-32 items-center justify-center" >
            <img src={myimage} alt='myimage' className='w-full min-w-[150px] min-h-[150px] border-8 border-gray-500' style={{borderRadius:'50%',borderTopRightRadius:"50%",borderTopLeftRadius:"50%"}} />
        </div>
        <div className="bottom flex flex-col mt-2 justify-center items-center">
            <div className="name md:text-3xl sm:text-[1.3rem] text-[1.1rem] font-bold">Ansuman Panigrahi</div>
            <div className="tag md:text-xl sm:text-[1.1rem] text-[0.9rem] text-center">Web Developer Enthusiast</div>
            <div className="links flex justify-center items-center mt-4">
              <a href='https://www.linkedin.com/in/ansuman-panigrahi-54890b244/' target='_blank' rel="noreferrer" className="mr-3"><LinkedInIcon fontSize='large'/></a>
              <a href='https://github.com/Ansuman-07' target='_blank' rel="noreferrer" className="mr-3"><GitHubIcon fontSize='large'/></a>
              <a href='https://www.instagram.com/_mr.ansuman_/' target='_blank' rel="noreferrer" className="mr-3"><InstagramIcon fontSize='large'/></a>
              <a href='mailto:ansumanpanigrahi00p@gmail.com' target='_blank' rel="noreferrer" className="mr-3"><EmailIcon fontSize='large'/></a>
            </div>
        </div>
        
    </div>
  )
}

export default Home