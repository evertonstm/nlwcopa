function creategame(player1, hour, player2) {
  return `
<li>
     <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
     <strong>${hour}</strong>
     <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">

 </li>                
  `
}

function createcard(date, day, games) {
  return `        
 <div class="card">
     <h2>${date} <span>${day}</span></h2>
     <ul>
     ${games}
     </ul>
 </div>
  `
}

document.querySelector("#app").innerHTML = `
<header>
    <img src="./assets/logo.svg" alt="Logo da nlw">
</header>
<main id="cards">
${createcard(
  "24/11",
  "quinta",
  creategame("brazil", "16:00", "serbia")
)}
${createcard(
  "28/11",
  "segunda",
  creategame("swizerland", "13:00", "brazil") +
  creategame("portugal", "16:00", "uruguay")
)}
${createcard(
  "02/12",
  "sexta",
  creategame("brazil", "16:00", "camaroon")
)}
</main>
`