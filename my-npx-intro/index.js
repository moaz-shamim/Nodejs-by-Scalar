#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
    const message = "Hey there! I'm Moaz Shamim, a Developer Proficient in MERN Stack!";
    const githubLink = "https://github.com/moaz-shamim";
    const linkedinLink = "https://www.linkedin.com/in/md-moaz-shamim-241672211/";
    const wesbiteLink = "https://catalyst-blog.vercel.app/";
  
    // Create a colorful box using ANSI escape codes
    const colorfulBox = `  \x1b[38;5;51m+---------------------------------------------------------------------------+
    |   \x1b[38;5;105m${message}\x1b[38;5;51m   |
    +-----------------------------------------------------------------------+
    | \x1b[38;5;93mGithub:\x1b[0m \x1b[38;5;39m${githubLink}                                \x1b[38;5;51m|
    | \x1b[38;5;93mLinkedIn:\x1b[0m \x1b[38;5;39m${linkedinLink}       \x1b[38;5;51m|
    | \x1b[38;5;93mPortfolio:\x1b[0m  \x1b[38;5;39m${wesbiteLink}                         \x1b[38;5;51m|
    +-----------------------------------------------------------------------+\x1b[0m`;
  
    // Log the colorful box in the terminal
    console.log(colorfulBox);
  }
  // Call the function to log your details
  logDetails();

  const github = 'https://github.com/moaz-shamim';
const linkedinUrl = 'https://www.linkedin.com/in/md-moaz-shamim-241672211/';
const portfolioUrl = 'https://catalyst-blog.vercel.app/';