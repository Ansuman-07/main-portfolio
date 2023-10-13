import * as React from 'react'
import { TypeAnimation } from 'react-type-animation';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Tooltip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DateRangeRoundedIcon from '@mui/icons-material/DateRangeRounded';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

// Define your themes for light and dark modes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));




function About({ darkMode, setDarkMode }) {

  const [expanded1, setExpanded1] = React.useState('panel');
  const [expanded2, setExpanded2] = React.useState('panel2');
  const [expanded3, setExpanded3] = React.useState('panel3');

  const scroll = document.getElementById('scroll')
  const cvFile = './resume.pdf';

  const handleChange1 = (panel) => (event, newExpanded1) => {
    setExpanded1(newExpanded1 ? panel : false);
    // setExpanded2(false)
    // setExpanded3(false)
  };

  const handleChange2 = (panel) => (event, newExpanded2) => {
    setExpanded2(newExpanded2 ? panel : false);
    // setExpanded1(false)
    if (newExpanded2) {
      setTimeout(() => {
        try {
          scroll.scrollIntoView({ behavior: "smooth", block: "end", inline: "start" });
        } catch (err) { }
      }, 300)
    }
  };
  const handleChange3 = (panel) => (event, newExpanded3) => {
    setExpanded3(newExpanded3 ? panel : false);
    // setExpanded1(false)
    if (newExpanded3) {
      setTimeout(() => {
        try {
          scroll.scrollIntoView({ behavior: "smooth", block: "end", inline: "start" });
        } catch (err) { }
      }, 200)
    }
  };

  const handleDownload = () => {
    // Create an anchor element and simulate a click to trigger the download
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'your-cv.pdf';
    link.click();
  };

  return (
    <div className='min-h-screen max-h-[100%] relative mt-16 ml-16 p-1 flex flex-col items-start md:pl-8 lg:pl-8 ' id='about' >
      <div className="toptext flex flex-col mb-5">
        <div className="title text-2xl md:text-3xl lg:text-3xl font-extrabold opacity-90">About Me </div>
        <div className="bars bg-blue-500 w-[60%] h-1" style={{ borderBottomRightRadius: '5px', borderTopRightRadius: '5px', borderTopLeftRadius: 'none', borderBottomLeftRadius: 'none' }}></div>
        <div className="bars bg-blue-500 w-[30%] h-1 mt-1" style={{ borderBottomRightRadius: '5px', borderTopRightRadius: '5px', borderTopLeftRadius: 'none', borderBottomLeftRadius: 'none' }}></div>

      </div>
      <div className="flex flex-col w-full md:w-[90%] ">
        <div className='text-xl'><div className='text-xl md:text-2xl lg:text-2xl font-bold opacity-90 '>
          <div className='h-6'>
        <TypeAnimation sequence={["Hi I'm Ansuman", 3000,"I'm a <coder>", 3000, "Welcome", 3000]} repeat={Infinity} cursor={false}/>
        </div>
          <div className='text-blue-600 mt-3 text-[1rem] md:text-xl lg:text-xl'> A passionate computer science student with a deep love for web development .</div>
          <hr className={`h-[0.5px] w-full ${darkMode ? 'border-gray-700 opacity-20' : 'border-gray-200'} `} />
        </div>
          <div className='mt-2  text-[1rem] md:text-xl lg:text-xl'><TypeAnimation sequence={["Proficient in Java, HTML, CSS, JavaScript, and React.js. Explore my portfolio to see how I've turned my passion into impactful web projects. Feel free to get in touch with me . Let's connect ! ", 3000]} repeat={Infinity} cursor={false}/>
          </div>
          <hr className={`h-[0.5px] w-full ${darkMode ? 'border-gray-700 opacity-20' : 'border-gray-200'} `} />
        </div>

      </div>

      <div className="info flex md:flex-row flex-col justify-between mt-4">
        <div className="left flex flex-col ">
          <span className='text-[1rem] md:text-xl lg:text-xl p-2 '><span className='font-bold'>Birthday : </span>15th Oct 2004</span>
          <hr className='opacity-70' />
          <span className='text-[1rem] md:text-xl lg:text-xl p-2 '><span className='font-bold'>Degree : </span>BSc CS</span>
          <hr className='opacity-70' />
        </div>
        <div className="right flex flex-col md:ml-10 mb-6">
          <span className='text-[1rem] md:text-xl lg:text-xl p-2 '><span className='font-bold'>City: </span> Bhubaneswar</span> <hr className='opacity-70' />
          <span className='text-[1rem] md:text-xl lg:text-xl p-2  font-bold'>Open To Work</span> <hr className='opacity-70' />
        </div>
      </div>

      <Tooltip title="Download" placement='right' arrow>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDownload}
          sx={{ marginBottom: '15px' }}
        >
          Resume <DownloadIcon />
        </Button></Tooltip>

      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Accordion expanded={expanded1 === 'panel1'} onChange={handleChange1('panel1')} sx={{ width: '100%' }} >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
            <Typography>More About</Typography>
          </AccordionSummary>
          <AccordionDetails>

            <div className='text-[0.75rem] md:text-xl lg:text-xl opacity-90 mt-2'>
              My journey into web development began with a curiosity to bring ideas to life in the digital world . While my formal work experience is limited due to my academic commitments, I've done web development projects that have enriched my practical knowledge . Make sure to check out them in Prject section . My goal is to continue expanding my skills, contribute to innovative projects, and make a meaningful impact in an MNC's dynamic team.
            </div>

          </AccordionDetails>
        </Accordion>
        <div className="acordition flex md:flex-row flex-col w-[100%]">
          <Accordion expanded={expanded2 === 'panel2'} onChange={handleChange2('panel2')} className='md:w-[50%] w-[100%] ' sx={{ borderBottom: 'none' }}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <Typography>Education</Typography>
            </AccordionSummary>
            <AccordionDetails>

              <div className='main-div flex flex-col relative'>
                <div className='edu-1 flex flex-col pb-3 pl-4 relative'>
                  <div className="top flex flex-col items-start relative">
                    <div className="blue-circle w-3 h-3 bg-blue-600 absolute z-15" style={{ borderRadius: '50%', top: '15px', left: '-20px' }}></div>
                    <div className="title text-[1rem] md:text-xl lg:text-xl font-semibold  mt-2">Self Taught</div>
                    <div className="date text-[1rem] md:text-xl lg:text-xl text-gray-500 md:mt-2"> <DateRangeRoundedIcon fontSize='small' className='-mt-1' /> 2022 - Present</div>
                  </div>

                  <div className="blue-line w-1 h-full bg-blue-600 absolute z-15" style={{ top: '15px', left: '0.3px' }}></div>

                  <div className={`desc ${darkMode ? 'text-gray-400' : 'text-gray-800'} mt-1 text-[0.8rem] md:text-xl lg:text-xl`}>Achieved proficiency in ReactJS, Tailwind CSS, and NodeJS through online tutorials and practical application.</div>
                </div>

                <div className='edu-1 flex flex-col pb-3 pl-4 relative'>
                  <div className="top flex flex-col items-start relative">
                    <div className="blue-circle w-3 h-3 bg-blue-600 absolute z-15" style={{ borderRadius: '50%', top: '15px', left: '-20px' }}></div>
                    <div className="title text-[1rem] md:text-xl lg:text-xl font-semibold  mt-2">Bachelor in Computer Science (BSC CS)</div>
                    <div className="date text-[1rem] md:text-xl lg:text-xl text-gray-500 md:mt-2"><DateRangeRoundedIcon fontSize='small' className='-mt-1' /> 2021 - Present</div>
                  </div>

                  <div className="blue-line w-1 h-full bg-blue-600 absolute z-15" style={{ top: '15px', left: '0.3px' }}></div>

                  <div className={`desc ${darkMode ? 'text-gray-400' : 'text-gray-800'} text-[0.8rem] md:text-xl lg:text-xl  mt-1`}>Lakshya Institute of Technology , Bhubaneswar</div>
                </div>

                <div className='edu-1 flex flex-col pb-3 pl-4 relative'>
                  <div className="top flex flex-col items-start relative">
                    <div className="blue-circle w-3 h-3 bg-blue-600 absolute z-15" style={{ borderRadius: '50%', top: '15px', left: '-20px' }}></div>
                    <div className="title text-[1rem] md:text-xl lg:text-xl font-semibold  mt-2">Higher Secondary Education (CHSE)</div>
                    <div className="date text-[1rem] md:text-xl lg:text-xl text-gray-500 md:mt-2"> <DateRangeRoundedIcon fontSize='small' className='-mt-1' /> 2019 - 2021</div>
                  </div>

                  <div className="blue-line w-1 h-full bg-blue-600 absolute z-15" style={{ top: '15px', left: '0.3px' }}></div>

                  <div className={`desc ${darkMode ? 'text-gray-400' : 'text-gray-800'} text-[0.8rem] md:text-xl lg:text-xl  mt-1`}>Navajyoti Higher Secondary School , bhubaneswar</div>
                </div>

                <div className='edu-1 flex flex-col pb-3 pl-4 relative'>
                  <div className="top flex flex-col items-start relative">
                    <div className="blue-circle w-3 h-3 bg-blue-600 absolute z-15" style={{ borderRadius: '50%', top: '15px', left: '-20px' }}></div>
                    <div className="title text-[1rem] md:text-xl lg:text-xl font-semibold  mt-2">Secondary Education (BSE)</div>
                    <div className="date text-[1rem] md:text-xl lg:text-xl text-gray-500 md:mt-2"> <DateRangeRoundedIcon fontSize='small' className='-mt-1' /> 2014 - 2019</div>
                  </div>

                  <div className={`desc ${darkMode ? 'text-gray-400' : 'text-gray-800'} text-[0.8rem] md:text-xl lg:text-xl  mt-1`}>B.M. High School , Bhubaneswar</div>
                </div>

              </div>

            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded3 === 'panel3'} onChange={handleChange3('panel3')} className='md:w-[50%] w-[100%] ' sx={{ borderBottom: 'none' }}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <Typography>Internships</Typography>
            </AccordionSummary>
            <AccordionDetails>

              <div className='main-div flex flex-col relative'>
                <div className='edu-1 flex flex-col pb-3 pl-4 relative'>
                  <div className="top flex flex-col items-start relative">
                    <div className="blue-circle w-3 h-3 bg-blue-600 absolute z-15" style={{ borderRadius: '50%', top: '15px', left: '-20px' }}></div>
                    <div className="title text-[1rem] md:text-xl lg:text-xl font-semibold  mt-2">Web Development Internship</div>
                    <div className="date text-[1rem] md:text-xl lg:text-xl text-gray-500 md:mt-2"> <DateRangeRoundedIcon fontSize='small' className='-mt-1' /> May 2023</div>
                  </div>

                  <div className="blue-line w-1 h-full bg-blue-600 absolute z-15" style={{ top: '15px', left: '0.3px' }}></div>

                  <div className={`desc ${darkMode ? 'text-gray-400' : 'text-gray-800'} text-[0.8rem] md:text-xl lg:text-xl  mt-1`}>Internship At CodeClause</div>
                </div>

                <div className='edu-1 flex flex-col pb-3 pl-4 relative'>
                  <div className="top flex flex-col items-start relative">
                    <div className="blue-circle w-3 h-3 bg-blue-600 absolute z-15" style={{ borderRadius: '50%', top: '15px', left: '-20px' }}></div>
                    <div className="title text-[1rem] md:text-xl lg:text-xl font-semibold  mt-2">Java Internship</div>
                    <div className="date text-[1rem] md:text-xl lg:text-xl text-gray-500 md:mt-2"> <DateRangeRoundedIcon fontSize='small' className='-mt-1' /> Nov 2023</div>
                  </div>

                  <div className={`desc ${darkMode ? 'text-gray-400' : 'text-gray-800'} text-[0.8rem] md:text-xl lg:text-xl  mt-1`}>Internship At InternPe</div>
                </div>

              </div>

            </AccordionDetails>
          </Accordion>
        </div>
        <hr className={`h-[0.5px] w-full ${darkMode ? 'border-gray-700 opacity-60' : 'border-gray-300'} `} />
        <div id='scroll' className='w-1 h-1 bg-transparent'></div>
      </ThemeProvider>

    </div>
  )
}

export default About