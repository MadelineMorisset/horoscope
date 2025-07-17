// Liaison avec l'api horoscope
fetch("https://oracles-api.sidathsoeun.fr/oracle_api.php", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    api_key:
      "SI_DART_Sun_api_keys_!598254741369!excalibure!paramKeysOracle!887782secretNum&5882!",
  }),
})
  .then((res) => {
    if (!res.ok) throw new Error("Erreur lors de la récupération.");
    return res.json();
  })
  .then((data) => {
    console.log("Données reçues :", data);
  })
  .catch((error) => {
    console.log("Erreur : ", error.message);
  });
const drawButton = document.getElementById("drawButton");
const loader = document.getElementById("loader");
const oracleCards = document.getElementById("oracleCards");
const errorContainer = document.getElementById("error");
