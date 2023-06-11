// Styles
import "./style.scss";

// Constants
const NAME = "Mohsen Shafiei";
const ROLE = "Frontend Software Engineer";
const PHONE_NUMBER = "+6584358541";
const EMAIL = "mohsenshafieitafreshi@gmail.com";
const LINES = 20;

const appElement = document.querySelector<HTMLDivElement>("#app");
if (appElement) {
	const lines = [];
	for (let i = 1; i <= LINES; i++) {
		lines.push(`<div id="lineh${i}"></div>`);
	}

	for (let i = 1; i <= LINES; i++) {
		lines.push(`<div id="lineb${i}"></div>`);
	}

	const content = `
    <div class="wrapper">
      ${lines.join("")}
      <div class="container">
        <div class="left">
          <h1 class="name">${NAME}</h1>
          <h2 class="role">${ROLE}</h2>
          <div class="card">
            <p class="text">
              Welcome to my personal website! I am a passionate frontend software engineer with over 6 years of experience in building web applications and developing UI kits. Throughout my career, I have had the privilege of working at esteemed companies such as <span class="company">Apple</span>, <span class="company">Shopee</span>, <span class="company">Snapp</span>, and more. As a dedicated professional, I have led a team of 5 talented engineers, collaborating closely to deliver high-quality projects. I thrive on challenges and enjoy finding innovative solutions to complex problems. With a strong focus on user experience and cutting-edge technologies, I am committed to creating seamless and visually stunning interfaces.
            </p>
          </div>
          <div class="card">
            <p class="text">
              Feel free to get in touch if you'd like to collaborate or have any questions.
            </p>
          </div>
          <div class="card">
            <div class="links">
              <a class="link" href="/resume.pdf" target="_blank" rel="noopener">
                Resume
              </a>
              <a class="link" href="https://github.com/mohsenshafiei" target="_blank" rel="noopener">
                Github
              </a>
              <a class="link" href="https://www.linkedin.com/in/mohsen-shafiei-tafreshi-7250847b/" target="_blank" rel="noopener">
                LinkedIn
              </a>
              <a class="link" href="mailto:${EMAIL}">Email me</a>
              <a class="link" href="tel:${PHONE_NUMBER}">Call me</a>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="image-container">
            <img id="image1" class="img-profile hello fade-image" src="hello.png" alt="Image 1"/>
            <img id="image2" class="img-profile call fade-image" src="call.png" alt="Image 2" style="opacity: 0"/>
          </div>
          <div class="txt-container">
            <p id="txt1" class="text fade-txt">Thanks for visiting my page!</p>
            <p id="txt2" class="text fade-txt" style="opacity: 0">Let's get in touch!</p>
          </div>
        </>
      </div>
    </div>

  `;

	appElement.innerHTML = content;

	const image1: HTMLImageElement = document.querySelector(
		"#image1",
	) as HTMLImageElement;
	const image2: HTMLImageElement = document.querySelector(
		"#image2",
	) as HTMLImageElement;
	const txt1: HTMLParagraphElement = document.querySelector(
		"#txt1",
	) as HTMLParagraphElement;
	const txt2: HTMLParagraphElement = document.querySelector(
		"#txt2",
	) as HTMLParagraphElement;
	const imageContainer: HTMLElement = document.querySelector(
		".image-container",
	) as HTMLElement;

	imageContainer.addEventListener("mouseover", function () {
		image1.style.opacity = "0";
		image2.style.opacity = "1";
		txt1.style.opacity = "0";
		txt2.style.opacity = "1";
	});

	imageContainer.addEventListener("mouseout", function () {
		image1.style.opacity = "1";
		image2.style.opacity = "0";
		txt1.style.opacity = "1";
		txt2.style.opacity = "0";
	});
}
