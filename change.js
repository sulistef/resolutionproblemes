// créer une fonction permettant de calculer la manière de rendre une somme d'argent en utilisant uniquement des billets de 10, de 5 et de 2. De plus la fonction doit utiliser le moins de billets possible. Il est considéré que le nombre de billets est illimité.


const change = (somme) => {
	
	if (somme === 1 || somme === 3) return 0;
	
	var nb10 = Math.trunc(somme/10);
	const reste10 = somme % 10;
	
	switch(reste10) {
		
		case 9:
			return buildSortie(nb10, 1, 2);
		
		case 8:
			return buildSortie(nb10, 0, 4);
			
		case 7:
			return buildSortie(nb10, 1, 1);
		
		case 6:
			return buildSortie(nb10, 0, 3);
			
		case 5:
			return buildSortie(nb10, 1, 0);
			
		case 4:
			return buildSortie(nb10, 0, 2);
			
		case 3:
			if (nb10 > 0) {
				return buildSortie(nb10 - 1, 1, 4);
			} else {
				return 0;
			}
			
		case 2:
			return buildSortie(nb10, 0, 1);
		
		case 1:
			if (nb10 > 0) {
				return buildSortie(nb10 - 1, 1, 3);
			} else {
				return 0;
			}
		
		case 0:
			return buildSortie(nb10, 0, 0);
			
	}
};

const buildSortie = (nb10, nb5, nb2) => ({
	nb10,
	nb5,
	nb2
});

console.log("52", change(52));
console.log("21", change(21));
console.log("2", change(2));
console.log("16545", change(16545));