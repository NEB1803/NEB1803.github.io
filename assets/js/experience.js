AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Server Creator And Admin",
    cardImage: "assets/images/experience-page/PixelHeim.png",
    place: "PixelHeim",
    time: "(22/4/2021 - 28/5/2021)",
    desp: "<li>Worked In Server Creation and the Intial Server Creation</li> <li>Left the Server due to Some misunderstandings</li>",
  },
  {
    title: "Junior Developer",
    cardImage: "assets/images/experience-page/BunCraft.png",
    place: "BunCraft",
    time: "(29/07/2021 - 14/06/2022)",
    desp: "<li>After Leaving PixelHeim I did some free-lance work and then joined Buncraft as Junior Developer</li><li>I worked on the Custom Python Server Bot and in helping Server Development</li>",
  },
  {
    title: "Developer",
    cardImage: "https://imgur.com/a/hIHUUMi",
    place: "EliteFantasy",
    time: "(08/09/2022 - Present)",
    desp: "<li>After Buncraft ended and moved to HirayaCraft I took a break for my studies </li><li>When i was back i had this great offer from Masaki so i joined EliteFantasy Staff Team</li>",
  },
  {
    title: "Developer",
    cardImage: "https://imgur.com/a/hIHUUMi",
    place: "EliteFantasy",
    time: "(08/09/2022 - Present)",
    desp: "<li>After Buncraft ended and moved to HirayaCraft I took a break for my studies </li><li>When i was back i had this great offer from Masaki so i joined EliteFantasy Staff Team</li>",
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
    title: "Harmonia Nerwork",
    cardImage: "https://imgur.com/a/fe7FfKv",
    description:
      "A Minecraft server accessible for diverse users, themed over harmony the server intends to provide diverse game modes for players to enjoy.",
  },
  {
    title: "Ursidae Network",
    cardImage: "https://i.imgur.com/CGrBRCF.png",
    description:
      "This is a Personal server hosted where other players can join https://ursi-dae.github.io/",
  },
  {
    title: "Elite Fantasy",
    cardImage: "https://imgur.com/a/hIHUUMi",
    description:
      "Its a whole new experience of minecraft with custom and cool resources that feels surreal :)",
  },
  
  {
    title: "Empty",
    cardImage: "assets/images/experience-page/empty.png",
    description:
      "...",
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
    title: "Stock_#1891",
    subtitle: "Owner-Harmonia Network",
    image: "https://cdn.discordapp.com/avatars/772850997915025448/c8ae9ed59eb3b027c67095ead9e6743c.png",
    desp: "A really great developer, especially when it comes to being creative and cooperative at all times. Deep understanding of his work, makes him the perfect developer you'll need for your work. I highly recommend hiring him.",
  },
  {
    title: "Masaki#3660",
    subtitle: "Owner-EliteFantasy",
    image: "https://cdn.discordapp.com/avatars/957047264826781736/ed4607454fc251b0a3340bc9795102d9.png?size=2048",
    desp: "10/10 service from Neb, active in what is asked and pleasant",
  },
  {
    title: "Empty",
    subtitle: "...",
    image: "assets/images/experience-page/empty.png",
    desp: "...",
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
