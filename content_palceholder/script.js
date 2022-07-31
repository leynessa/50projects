const header =  document.getElementById('header')
const title =  document.getElementById('title')
const excerpt =  document.getElementById('excerpt')
const profile_img =  document.getElementById('profile_img')
const author_name=  document.getElementById('author_name')
const date=  document.getElementById('date')

const animated_bgs = document.querySelectorAll('.anminated-bg')
const animated_bg_texts = document.querySelectorAll('.anminated-bg-text')
setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YW1zdGVyZGFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="travel img">'
  title.innerHTML = 'Lorem ipsum dolor sit amet.'
  excerpt.innerHTML = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium, in.'
  profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/17.jpg" alt="">'
  author_name.innerHTML = 'Mary lin'
  date.innerHTML = 'June 25, 2022'
}

animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-text'))
