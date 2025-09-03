const burger = document.querySelector(".burger");
const navUl = document.querySelector("nav ul");

burger.addEventListener("click", () => {
	navUl.classList.toggle("active");
});

function trackPage(pageName) {
	let visits = JSON.parse(localStorage.getItem("visits")) || {};
	visits[pageName] = (visits[pageName] || 0) + 1;
	localStorage.setItem("visits", JSON.stringify(visits));
}

function showVisits() {
	const visits = JSON.parse(localStorage.getItem("visits")) || {};
	const sorted = Object.entries(visits)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 3);

	const visitedList = document.getElementById("visitedList");
	if (visitedList) {
		visitedList.innerHTML = "";
		sorted.forEach(([page]) => {
			const li = document.createElement("li");
			const a = document.createElement("a");
			a.textContent = page;
			if (page !== "Pocetna") a.href = `../stranice/${page}.html`;
			else a.href = `../index.html`;
			visitedList.appendChild(li);
			li.appendChild(a);
		});
	}
}

document.addEventListener("DOMContentLoaded", function () {
	let pageName = document.title || "Nepoznata stranica";
	trackPage(pageName);
	showVisits();
});
