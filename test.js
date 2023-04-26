//exo
//t3: nombre paire et impaire t2
console.log("voici les nombres paires");
let tableau = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let index = 0; index < tableau.length; index++) {
  if (tableau[index] % 2 === 0 ) { console.log(tableau [index]);
  } 
}

console.log("voici les nombres impaires");
let tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let index = 0; index < tab.length; index++) {
    if (tab [index] % 2 != 0) {
    console.log(tab[index]);
    }
    
}

//t5: nombre le plus haut
let board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var plusGrandNombre = 10;
for (let index = 0; index < board.length; index++) {
 if (board[index] > plusGrandNombre) {
     plusGrandNombre = board[index]
     
 }  
}
console.log("le plus grand nombre est : " + plusGrandNombre);

//function:fullname(nom, prenom)
console.log("nom et prenom");
let nom = "elyse"
   let prenom = "jedica"
  let nom_c = ` ${nom } ${prenom }`
  console.log(nom_c);

  
  




