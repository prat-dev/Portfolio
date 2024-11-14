document.addEventListener('DOMContentLoaded', () =>{
const downloadButton = document.getElementById('download-resume');
downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'resume.pdf';
    link.download = 'resume.pdf';
    link.click();
  
})
  
  const githubbtn = document.getElementById('github-link');
    const githubUrl = ("https://github.com/prat-dev")
    githubbtn.addEventListener('click', () => {
       window.open(githubUrl,'_blank');
    })

   const pro = document.getElementById('pro'){
      document.getElementById('iframe-container').style.display = 'block';
    }
    
    
})