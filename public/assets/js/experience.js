AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Web Designer/IT support",
    cardImage: "assets/images/deped.png",
    place: "(DepEd-Bayawan)",
    time: "(2017-2018)",
    desp: "<li>Designing engaging and responsive landing pages</li> <li>Graphic Design</li><li>Conducting website testing</li><li>Technical support</li><li>Information Technology</li>",
  },
  {
    title: "Post Splitter/Reviewer",
    cardImage: "assets/images/remotasks.png",
    place: "Remotasks.com",
    time: "(2018-2021)",
    desp: "It is a platform that buildsreal AI with the help of real people. Remotasks offers a variety of tasks like 2D and 3D Image Annotation and Categorization, all of which can help companies develop tech like new gadgets and self-driving cars.",
  },
  {
    title: "Labeler/Checker",
    cardImage: "assets/images/xfinite.png",
    place: "Xfinite.ph",
    time: "(2021-2022)",
    desp: "We are labeling all the roofs of the house in aerial view. It’s like google map building annotation but using ginger software.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Deped Bayawan",
    cardImage: "assets/images/deped.jpg",
    description:
      "Designing engaging and responsive landing pages, Graphic Design, Conducting website testing, Technical support, Information Technology",
  },
  {
    title: "Remotasks",
    cardImage: "assets/images/remo.jpg",
    description:
      "Remotasks offers a variety of tasks like 2D and 3D Image Annotation and Categorization, all of which can help companies develop tech like new gadgets and self-driving cars.",
  },
  {
    title: "Xfinite Labeler",
    cardImage: "assets/images/build.jpg",
    description:
      "We are labeling all the roofs of the house in aerial view. It’s like google map building annotation but using ginger software.",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
