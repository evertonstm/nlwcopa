function creategame(player1, hour, player2) {
  return `
<li>
     <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
     <strong>${hour}</strong>
     <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">

 </li>                
  `
}
let delay = -0.4;
function createcard(date, day, games) {
  delay = delay + 0.4;
  return `        
 <div class="card" style=''animation-delay: ${delay}s>
     <h2>${date} <span>${day}</span></h2>
     <ul>
     ${games}
     </ul>
 </div>
  `
}

document.querySelector("#cards").innerHTML = 

createcard("20/11", "domingo", creategame("qatar", "12:00", "ecuador")) +

createcard("21/11", "segunda", creategame("england", "09:00", "iran") +
 creategame("senegal", "12:00", "netherlands") + creategame("united-states", "15:00", "wales")) +

createcard("22/11", "terça", creategame("argentina", "06:00", "saudi-arabia") +
 creategame("denmark", "09:00", "tunisia") + creategame("mexico", "12:00", "poland") + creategame("france", "12:00", "australia")) +

createcard("23/11", "quarta", creategame("morocco", "06:00", "croatia") +
 creategame("germany", "09:00", "japan") + creategame("spain", "12:00", "wales") + creategame("belgium", "12:00", "canada")) +

createcard("24/11", "quinta", creategame("switzerland", "06:00", "camaroon") +
 creategame("uruguay", "09:00", "south-korea") + creategame("portugal", "12:00", "ghana") + creategame("brazil", "12:00", "serbia")) +

createcard("25/11", "sexta", creategame("wales", "06:00", "iran") +
 creategame("qatar", "09:00", "senegel") + creategame("netherlands", "12:00", "ecuador") + creategame("england", "12:00", "united-states")) +

createcard("26/11", "sabado", creategame("tunisia", "06:00", "australia") +
 creategame("poland", "09:00", "saudi-arabia") + creategame("netherlands", "12:00", "ecuador") + creategame("england", "12:00", "united-states")) +

createcard("27/11", "domingo", creategame("japan", "06:00", "costa-rica") +
 creategame("belgium", "09:00", "morocco") + creategame("croatia", "12:00", "canada") + creategame("spain", "12:00", "germany")) +

createcard("28/11", "segunda", creategame("camaroon", "06:00", "serbia") +
 creategame("south-korea", "09:00", "ghana") + creategame("brazil", "12:00", "switzerland") + creategame("portugal", "12:00", "uruguay")) +

createcard("29/11", "terça", creategame("ecuador", "11:00", "senegal") +
 creategame("netherlands", "11:00", "qatar") + creategame("iran", "15:00", "united-states") + creategame("wales", "15:00", "england")) +

createcard("30/11", "quarta", creategame("tunisia", "11:00", "france") +
 creategame("australia", "11:00", "denmark") + creategame("poland", "15:00", "argentina") + creategame("saudi-arabia", "15:00", "mexico")) +

createcard("01/12", "quinta", creategame("croatia", "11:00", "belgium") +
 creategame("canada", "11:00", "morocco") + creategame("japan", "15:00", "spain") + creategame("costa-rica", "15:00", "germany")) +

createcard("02/12", "quinta", creategame("south-korea", "11:00", "portugal") + 
  creategame("ghana", "11:00", "uruguay") + creategame("serbia", "15:00", "switzerland") + creategame("camaroon", "15:00", "brazil")) 








