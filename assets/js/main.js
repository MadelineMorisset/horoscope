const drawButton = document.getElementById("drawButton");
const loader = document.getElementById("loader");
const oracleCards = document.getElementById("oracleCards");
const errorContainer = document.getElementById("errorContainer");

drawButton.addEventListener("click", async () => {
  // Réinitialisation de l'affichage
  loader.classList.remove("hidden");
  oracleCards.innerHTML = "";
  errorContainer.classList.add("hidden");

  try {
    const response = await fetch(
      "https://oracles-api.sidathsoeun.fr/oracle_api.php",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key:
            "SI_DART_Sun_api_keys_!598254741369!excalibure!paramKeysOracle!887782secretNum&5882!",
        }),
      }
    );

    if (!response.ok) throw new Error("Erreur lors de la récupération.");

    const data = await response.json();
    const horoscope = data.horoscope;

    for (let sign in horoscope) {
      const signSlug = sign
        .normalize(
          "NFD"
        ) /* sépare les lettres de leur accent (ex. é devient e + [accent]) */
        .replace(
          /[\u0300-\u036f]/g,
          ""
        ) /* supprime l'accent que l'on a séparé de sa lettre juste avant */
        .toLowerCase();
      const imagePath = `assets/images/signes/${signSlug}.webp`;

      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <h2 class="card_title text_shadow">${sign}</h2>
        <div class="card_image_container">
          <img src="${imagePath}" alt="${sign}" class="card_image" />
        </div>
        <p class="card_p">${horoscope[sign]}</p>
      `;

      oracleCards.appendChild(card);
    }
  } catch (error) {
    errorContainer.textContent =
      "❌ Une erreur est survenue, veuillez réessayer.";
    errorContainer.classList.remove("hidden");
  } finally {
    loader.classList.add("hidden");
  }
});
