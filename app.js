const header1 = document.createElement("header");
header1.innerHTML = "Freelancer Forum";
header1.style.textAlign = "center";
header1.style.fontSize = "60px";
header1.style.background = "gray";
document.body.appendChild(header1);
console.log();

const avg = document.createElement("p");
avg.innerHTML = "The average starting price is";
avg.style.textAlign = "center";
avg.style.fontSize = "40px";
document.body.appendChild(avg);

const avail = document.createElement("h2");
avail.innerHTML = "Available Free Lancers:";
avail.style.textAlign = "center";
avail.style.fontSize = "44px";
document.body.appendChild(avail);

const people = [
  { name: "Alice", occupation: "Writer", price: "30" },
  { name: "Bob", occupation: "Teacher", price: "50" },
  { name: "Carol", occupation: "Programmer", price: "70" },
  { name: "Dr. Slice", occupation: "gardener", price: 25 },
  { name: "Dr. Pressure", occupation: "programmer", price: 51 },
  { name: "Prof. Possibility", occupation: "teacher", price: 43 },
  { name: "Prof. Prism", occupation: "teacher", price: 81 },
  { name: "Dr. Impulse", occupation: "teacher", price: 43 },
  { name: "Prof. Spark", occupation: "programmer", price: 76 },
  { name: "Dr. Wire", occupation: "teacher", price: 47 },
  { name: "Prof. Goose", occupation: "driver", price: 72 },
];

const box = document.createElement("div");
box.style.display = "flex";
box.style.justifyContent = "space-evenly";

const names = document.createElement("h2");
names.innerHTML = "Name";

const startingPrices = document.createElement("h2");
startingPrices.innerHTML = "Starting Price";

const occupations = document.createElement("h2");
occupations.innerHTML = "Occupation";
box.appendChild(names);
box.appendChild(occupations);
box.appendChild(startingPrices);

document.body.appendChild(box);
