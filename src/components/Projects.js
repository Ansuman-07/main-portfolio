import * as React from 'react';
import notes from './project-images/notesapp.png'
import weather from './project-images/weatherapp.png'
import news from './project-images/newsapp.png'
import chatbot from './project-images/chatbot.png'
import memegenerator from './project-images/memegenerator.png'

function Skills({ darkMode, setDarkMode }) {

  const projects = [
    {
      id: 0, name: "Notes App", image: notes, demo: "https://ansuman-07.github.io/easynotes.github.io/", sourcecode: "https://github.com/Ansuman-07/easynotes.github.io"
    },
    {
      id: 1, name: "News App", image: news, demo: "http://localhost:3001/", sourcecode: "https://github.com/Ansuman-07/"
    },
    {
      id: 2, name: "Weather App", image: weather, demo: "https://ansuman-07.github.io/weatherpro.github.io/", sourcecode: "https://github.com/Ansuman-07/weatherpro.github.io"
    },
    {
      id: 3, name: "Search Bot", image: chatbot, demo: "https://ansuman-07.github.io/chatbot.github.io/", sourcecode: "https://github.com/Ansuman-07/chatbot.github.io"
    },
    {
      id: 4, name: "MemeGenerator", image: memegenerator, demo: "https://ap-meme-generator.netlify.app/", sourcecode: "https://github.com/Ansuman-07/Meme-Generator"
    },
  ]


  return (
    <div className='min-h-screen h-[100%] mt-16 ml-16 p-4 flex flex-col justify-center items-center md:pl-8 lg:pl-8 relative' id='projects'>
      <div className="toptext flex flex-col ">
        <div className="title  text-xl lg:text-3xl md:text-2xl font-extrabold opacity-90">My Projects</div>
        <div className="bars bg-blue-500 w-[100%] h-1 mt-1" style={{ borderRadius:'5px' }}></div>
      </div>

      <div className="bellow flex md:flex-row flex-col mt-20 w-full ">

        <div className="skills grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3   gap-y-8 w-full">

          {projects.map(({ id, name, image, demo, sourcecode }) => {
            return <div key={id} className="card flex flex-col items-center md:w-[45%] lg:w-[55%] mx-auto ">
              <div className="title text:xl md:text-2xl">{name}</div>
              <div className="image w-full md:w-[90%] lg:w-[90%] md:h-[200px] overflow-hidden rounded-md relative group">
                <img src={image} alt="" className='w-full h-full rounded-md duration-300 group-hover:scale-105' />

                <div className="btns flex w-full absolute bottom-0 left-0 right-0 bg-gray-600 bg-opacity-60">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[50%] py-2 px-4 text-white font-semibold cursor-pointer rounded-l-md hover:scale-110  transition-transform text-center"
                >
                  View
                </a>
                <a
                  href={sourcecode}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[50%] py-2 px-4 text-white font-semibold cursor-pointer rounded-r-md hover:scale-110  transition-transform text-center"
                >
                  {'<Code>'}
                </a>
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