const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content";

container.appendChild(content);

const paragraphNode = document.createElement("p");
paragraphNode.textContent = "Hey I'm red!";
paragraphNode.style.color = "red";

container.appendChild(paragraphNode);

const hThreeNode = document.createElement("h3");
hThreeNode.textContent = "I'm a blue h3!";
hThreeNode.style.color = "blue";

container.appendChild(hThreeNode);

const divNode = document.createElement("div");
divNode.style.borderColor = "black";
divNode.style.backgroundColor = "pink";

const anotherHeading = document.createElement("h1");
anotherHeading.textContent = "I'm in a div";

const anotherParagraph = document.createElement("p");
anotherParagraph.textContent = "ME TOO!";
divNode.appendChild(anotherHeading);
divNode.appendChild(anotherParagraph);

container.appendChild(divNode);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("HelloWorld");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (e) => {
//   alert("Hello World");
  console.log(e.target);
   const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    // e.target.style.background = rndCol;

    document.body.style.backgroundColor = rndCol;
});