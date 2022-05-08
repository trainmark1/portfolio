AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Emarkit Ecommerce",
    cardImage: "assets/images/ecomm.jpg",
    description: "Ecommerce Prototype using Adobe XD",
  },
  {
    title: "Facebook Prototype",
    cardImage: "assets/images/fb.jpg",
    description: "Facebook Prototype using Adobe XD",
  },
  {
    title: "Bayawan Sample Site",
    cardImage: "assets/images/b1.png",
    description: "Bayawan Website using boostrap",
  },
  {
    title: "Portfolio I",
    cardImage: "assets/images/por1.jpg",
    description: "Personal Portfolio using pantheon",
  },
  {
    title: "Portfolio II",
    cardImage: "assets/images/por2.jpg",
    description: "Personal Portfolio using javascript",
  },
  {
    title: "Logo Mockup",
    cardImage: "assets/images/mpf.jpg",
    description: "Logo Mockup using adobe photoshop",
  },

];
  
// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
