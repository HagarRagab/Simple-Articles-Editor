let families = ["Arial", "sans-serif", "Helvetica", "Times", "cursive", "Courier", "fantasy"];
let fonFamily = document.getElementById("families");
let bold = document.querySelector(".font-weight");
let decrease = document.querySelector(".decrease");
let increase = document.querySelector(".increase");
let fonSize = document.querySelector(".font-size");
let fonColor = document.querySelector(".font-color");
let invertColor = document.querySelector(".invert-color");
let text = document.querySelector(".text");

families.forEach(fam => {
    let familyName = document.createElement("option");
    familyName.textContent = fam;
    fonFamily.appendChild(familyName);
});
fonFamily.onchange = () => {
    text.style.fontFamily = `"${fonFamily.value}"`;
};
bold.onclick = () => {
    if (bold.classList.contains("active") && text.classList.contains("active")) {
        bold.classList.remove("active");
        text.classList.remove("active");
    } else {
        bold.classList.add("active");
        text.classList.add("active");
    };
};
decrease.onclick = () => {
    fonSize.value--;
    text.style.fontSize = `${fonSize.value}px`;
};
increase.onclick = () => {
    fonSize.value++;
    text.style.fontSize = `${fonSize.value}px`;
};
fonSize.onchange = () => {
    text.style.fontSize = `${fonSize.value}px`;
}
fonColor.onchange = () => {
    text.style.color = `${fonColor.value}`;
}
let work = false;
invertColor.onclick = (e) => {
    if (work === true) {
        text.style.backgroundColor = "white";
        text.style.color = `${fonColor.value}`;
        e.target.style.cssText = "background-color: white; color: black";
        work = false;
    } else {
        text.style.backgroundColor = `${fonColor.value}`;
        text.style.color = "white";
        e.target.style.cssText = "background-color: #ccc; color: white";
        work = true;
    }

};