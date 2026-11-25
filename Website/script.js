const bestell = document.getElementById("bestelldatum");       //looks for our Bestelldatum
const liefer = document.getElementById("wunschlieferdatum");   //same for the Lieferdatum

const heute = new Date().toLocaleDateString("sv-SE");          // sets date in swedish format JJJJ/MM/TT
bestell.value = heute;                                         // uses todays date
bestell.min = heute;                                           //Bestelldatum cant be set to past/ must be min todays date
liefer.min = heute;                                            //same thing as Bestelldatum

bestell.addEventListener("change", () => {                     //if Bestelldatum changes
    liefer.min = bestell.value;                                //Bestelldatum is min
    
});

liefer.addEventListener("change", () => {                      //if Lieferdatum changes
    bestell.max = liefer.value;                                //Bestelldatum cant be after Lieferdatum
});