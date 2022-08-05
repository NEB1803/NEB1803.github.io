AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Junior Developer",
    cardImage: "assets/images/experience-page/BunCraft.png",
    place: "BunCraft",
    time: "(29/07/2021 - Present)",
    desp: "<li>After Leaving PixelHeim I did some free-lance work and then joined Buncraft as Junior Developer</li><li>I worked on the Custom Python Server Bot and in helping Server Development</li>",
  },
  {
    title: "Server Creation And Admin",
    cardImage: "assets/images/experience-page/PixelHeim.png",
    place: "PixelHeim",
    time: "(22/4/2021 - 28/5/2021)",
    desp: "<li>Worked In Server Creation and the Intial Server Creation</li> <li>Left the Server due to Some misunderstandings</li>",
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
    title: "Void Network",
    cardImage: "https://i.imgur.com/iNqDb1y.png",
    description:
      "This Server Is being created in 1.17.1 Platform on Paper Server as Requested By the Owner creeperquinn#6141",
  },
  {
    title: "Ursidae Network",
    cardImage: "https://i.imgur.com/CGrBRCF.png",
    description:
      "This is a Personal server hosted in Geode Host where other players can join https://ursi-dae.github.io/",
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


// Hackathon Section


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Empty",
    subtitle: "-",
    image: "assets/images/experience-page/empty.png",
    desp: "-",
  },
  
  

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
