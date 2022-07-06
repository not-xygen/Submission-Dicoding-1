// Tombol Hamburger
const hamburgerButton = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburgerButton.addEventListener("click", () => {
	hamburgerButton.classList.toggle("active")
	navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach((n) =>
	n.addEventListener("click", () => {
		hamburgerButton.classList.remove("active")
		navMenu.classList.remove("active")
	})
)

// Remind Alert

const remindButton = document.querySelector(".remind-button")

remindButton.addEventListener("click", () => {
	alert("Anda akan diberitahukan")
})

// Memberikan data kepada elemen artikel
const articles = [
	{
		id: 1,
		title: "Starship-Super Heavy telah disusun di Starbase, Texas",
		content:
			"Untuk pertama kalinya, Starship diangkat menggunakan 'Mechazilla', untuk menaruhnya diatas SuperHeavy yang sudah ada di Tempat Peluncuran...",
		img: "assets/images/starship_stacked.jpg",
	},
	{
		id: 2,
		title: "Starship 24 telah keluar dari Highbay menuju OLM",
		content:
			"Starship 24 menuju OLM untuk pertama kalinya yang menandakan seri tes untuk Starship 24 seperti Pressure Test untuk mencoba tekanan Starship dan juga...",
		img: "assets/images/starship_rolling.jpg",
	},
	{
		id: 3,
		title: "Falcon 9 telah mendarat 120 kali",
		content:
			"Roket yang menggemparkan pernebangan antariksa, dimana Falcon 9 berhasil men-demonstrasikan bahwa Roket bisa dipakai ulang selayaknya menggunakan pesawat...",
		img: "assets/images/falcon9_landing.webp",
	},
]

const articleContent = document.querySelector(".articles")

const showArticles = articles
	.map((article, index) => {
		return `<article class="article-card">
        <div class="img-card">
            <img
                src=${article.img}
				loading="lazy"
            />
        </div>
        <div class="article-content">
            <h1>
                ${article.title}
            </h1>
            <p>
                ${article.content}
            </p>
            <div class="readmore-container">
                <button class="readmore-button">
                    Baca lebih >
                </button>
            </div>
        </div>
    </article>`
	})
	.join("")

articleContent.innerHTML = showArticles
