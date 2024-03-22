export function initialPageLoad() {
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to JDan's Restaurant and Lounge";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = "../src/assets/restaurant-image.jpg";
    topImage.alt = "image of restaurant";
    contentDiv.appendChild(topImage);

    const para1 = document.createElement("p")
    para1.classList.add("landing-page");
    para1.textContent = "This is a modern restaurant where you can find traditional food";
    contentDiv.appendChild(para1);

    const para2 = document.createElement("p");
    para2.classList.add("landing-page");
    para2.textContent = "We invite you to find the most traditional flavors";
    contentDiv.appendChild(para2);

    const para3 = document.createElement("p");
    para3.classList.add("landing-page");
    para3.textContent = "Enjoy! Management";
    contentDiv.appendChild(para3);
}