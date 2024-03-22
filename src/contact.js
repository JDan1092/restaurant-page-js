import phoneImage1 from './assets/phone.jpg';
import emailImage from './assets/email.jpg';
import mailImage from './assets/mail.jpg';

export function contact() {
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to JDan's Restaurant and Lounge";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const phoneImage = document.createElement("img")
    phoneImage.classList.add("image");
    phoneImage.src = phoneImage1;
    phoneImage.alt = "image of phone";
    contentDiv.appendChild(phoneImage);

    const paraPhoneImage = document.createElement("p")
    paraPhoneImage.classList.add("contact-copy");
    paraPhoneImage.textContent = "Contact us at: 555-555-555";
    contentDiv.appendChild(paraPhoneImage);

    const email = document.createElement("img");
    email.classList.add("image");
    email.src = emailImage;
    email.alt =  "image of email";
    contentDiv.appendChild(email);

    const paraEmailImage = document.createElement("p");
    paraEmailImage.classList.add("contact-copy");
    paraEmailImage.textContent = "Email us at nonreply@fakeemail.com";
    contentDiv.appendChild(paraEmailImage);

    const topImage = document.createElement("img");
    topImage.classList.add("image");
    topImage.src = mailImage;
    topImage.alt = "image of mailing address";
    contentDiv.appendChild(topImage);

    const paraAddressImage = document.createElement("p");
    paraAddressImage.classList.add("contact-copy");
    paraAddressImage.textContent = "Our address is 123 fake av, fake town, 54321. We hope to see you soon!";
    contentDiv.appendChild(paraAddressImage);
}