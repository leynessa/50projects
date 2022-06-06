const panels = document.querySelectorAll('.panel') //this puts all the panels into an array/node list

panels.forEach(panel =>{
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  } )
});

function removeActiveClasses(){
  panels.forEach(panel =>{
    panel.classList.remove('active')
  });
}
