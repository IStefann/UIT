const form = document.getElementById("kontaktForm");
form.addEventListener("submit", function (e) {
	e.preventDefault();

	var mailWrong = document.getElementById("mailWrong");
	var passWrong = document.getElementById("passWrong");
	var confirmWrong = document.getElementById("confirmWrong");

	mailWrong.style.display = "none";
	passWrong.style.display = "none";
	confirmWrong.style.display = "none";

	let valid = true;

	const email = document.getElementById("email");

	const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	if (!emailRegex.test(email.value.trim())) {
		mailWrong.textContent = "Email adresa nije ispravna!";
		mailWrong.style.display = "block";
		valid = false;
	}

	const lozinka = document.getElementById("lozinka");
	const potvrda = document.getElementById("potvrda");

	const lozinkaRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
	if (!lozinkaRegex.test(lozinka.value)) {
		passWrong.textContent = "Lozinka nije ispravno uneta! - (bar 6 karaktera, jedno veliko slovo i jedna cifra)";
		passWrong.style.display = "block";
		valid = false;
	} else if (lozinka.value !== potvrda.value) {
		confirmWrong.textContent = "Lozinka i potvrda moraju biti iste!";
		confirmWrong.style.display = "block";
		valid = false;
	}

	if (valid) {
		alert("Forma je uspešno popunjena!");
		form.reset();
	}
});
