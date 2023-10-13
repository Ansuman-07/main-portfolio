import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {ThemeProvider, createTheme } from '@mui/material/styles';


// Define your themes for light and dark modes
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007acc', // Replace with your dark blue color
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main:'#007acc', // Replace with your dark blue color
    },
  },

});

function Contact({ darkMode, setDarkMode }) {

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');


  const validateEmail = (inputEmail) => {
    setEmail(inputEmail); // Update the email state

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(inputEmail)) {
      setEmailError('Provide a valid email!');
    } else {
      setEmailError(''); // Clear the error if the email is valid
    }
  };



  return (
    <div className='min-h-screen h-[100%] mt-16 ml-16 p-4 flex flex-col items-center justify-center relative' id='contact'>
      <div className="toptext flex flex-col  ">
        <div className="title text-2xl md:text-3xl font-extrabold opacity-90">Contact Me</div>
        <div className="bars bg-blue-500 w-[100%] h-1 mt-1"  style={{ borderRadius:'5px' }}></div>
      </div>
      <div className="bellow flex md:flex-row flex-col mt-20 md:w-[60%] w-full">

        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
          <form className='w-full flex flex-col' method='POST' action='https://www.formbackend.com/f/ecc6c30cb9a41584' acceptCharset="UTF-8" target='_blank'>
            <div className="flex md:flex-row flex-col justify-between">
              <TextField
                label="Enter Your Name"
                name="name"
                variant="outlined"
                margin="normal"
                autoComplete="off"
                className='md:w-[47%]'
                required
              />
              <TextField
                label="Email"
                name="email"
                variant="outlined"
                margin="normal"
                autoComplete="off"
                value={email}
                id='email-valid'
                onChange={(e) => validateEmail(e.target.value)}
                required
                error={!!emailError}
                helperText={emailError}
                className='md:w-[47%]'
              />
            </div>
            <TextField
              fullWidth
              label="Message"
              name="message"
              variant="outlined"
              autoComplete="off"
              multiline
              rows={4}
              margin="normal"
              required
            />
            <div className='flex justify-center mt-3'>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                className='w-[20%]'
                
              >
                <p className='text-sm md:text-base'>Submit</p>
              </Button>
            </div>
          </form>

        </ThemeProvider>

      </div>
    </div>
  )
}

export default Contact;
