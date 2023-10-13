import * as React from 'react';
import tailwind from './skill-images/taiwlind-logo.jpg';
import htmlcssjs from './skill-images/html-css-js-logo.jpg'
import reactjs from './skill-images/reactjs-logo.jpg'
import nodejs from './skill-images/nodejs-logo.jpg'
import mongodb from './skill-images/mongodb-logo.jpg'
import java from './skill-images/java-logo.jpg'
import python from './skill-images/python-logo.jpg'
import ccpp from './skill-images/c-cpp-logo.jpg'
import dsa from './skill-images/dsa-logo.jpg'

import { Slider} from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';

function Skills({ darkMode, setDarkMode }) {

  const skillItem = [{ index: 0, src: htmlcssjs, bar:{text:'Intermediate',value:65} },
  { index: 1, src: reactjs,  bar:{text:'Intermediate',value:70} },
  { index: 2, src: tailwind,  bar:{text:'Advanced',value:80} },
  { index: 3, src: java, bar:{text:'Foundational',value:55} },
  { index: 4, src: python,  bar:{text:'Familiar',value:40} },
  { index: 5, src: nodejs,  bar:{text:'Basic',value:30} },
  { index: 6, src: mongodb,  bar:{text:'Basic',value:20} },
  { index: 7, src: ccpp,  bar:{text:' Fundamental',value:35} },
  { index: 8, src: dsa,  bar:{text:'Moderate',value:40} },


  ]

  return (
    <div className='min-h-screen h-[100%] mt-16 ml-16 p-4 flex flex-col justify-center items-center md:pl-8 lg:pl-8 relative' id='skills'>
      <div className="toptext flex flex-col  ">
        <div className="title text-2xl md:text-3xl font-extrabold opacity-90">My Skills</div>
        <div className="bars bg-blue-500 w-[100%] h-1 mt-1" style={{ borderRadius:'5px' }}></div>
      </div>

      <div className="bellow flex md:flex-row flex-col mt-20 w-full ">

        <div className="skills grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-y-8 w-full">
          {skillItem.map(({ index, src, bar }) => {
            return <div key={index} className="skill1 flex flex-col md:w-[50%] lg:w-[53%] sm:w-[80%] w-[95%] mx-auto ">
              <div className="top">
                <div className={`image  ring ${darkMode ? 'ring-gray-700' : 'ring-gray-200'} `}>
                  <img src={src} alt="src" />
                </div>

              </div>
              <div className={`bottom flex-col p-2  ring ${darkMode ? 'ring-gray-700' : 'ring-gray-200'} rounded-md`}>
                <div className="bar">
                  <div className='flex justify-between text-sm md:text-base lg:text-base'>
                  Proficiency: {bar.text} {(bar.value >= 55) && <StarsIcon className='mr-2'/>}
                  </div>
                  <Slider
                    value={bar.value}

                    // scale={calculateValue}
                    // getAriaValueText={valueLabelFormat}
                    // valueLabelFormat={valueLabelFormat}
                    aria-labelledby="non-linear-slider"
                  />

                </div>
              </div>
            </div>
          })}


        </div>

      </div>
    </div>
  )
}

export default Skills