import lasagnaImage from './assets/lasagna.jpg';
import guacamoleImage from './assets/guacamole.jpg';

export function menu() {
    const contentDiv = document.querySelector("#content");

    contentDiv.replaceChildren();

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to JDan's Restaurant and Lounge";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const lasagna = document.createElement("img");
    lasagna.classList.add("image");
    lasagna.src = lasagnaImage
    lasagna.alt = "image of lasagna";
    contentDiv.appendChild(lasagna);

    const paraLasagna = document.createElement("p");
    paraLasagna.classList.add("menu-copy");
    paraLasagna.textContent = "A traditional lasagna, with about half the time and effort! I always cook extra to have leftovers, but the more I cook, the more they eat!";
    contentDiv.appendChild(paraLasagna);

    const guacamole = document.createElement("img");
    guacamole.classList.add("image");
    guacamole.src = guacamoleImage;
    guacamole.alt = "image of guacamole";
    contentDiv.appendChild(guacamole);

    const paraGuacamole = document.createElement("p")
    paraGuacamole.classList.add("menu-copy");
    paraGuacamole.textContent = "This guacamole recipe is great! Whether or not you want it spicy, this guacamole is a dip to die for.";
    contentDiv.appendChild(paraGuacamole);
}