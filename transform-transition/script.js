const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

console.log("section", section)

window.onscroll = () => {
  section.forEach(sec => {
    let myTop = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (myTop >= offset && myTop < (offset + height)) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
      })
    }
  })
}