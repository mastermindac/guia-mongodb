# Ejercicio

Películas que han sido producidas o bien por Warner Bros o bien por 20th Century Fox:
Warner Bros:
{
"name" : "Warner Bros.",
"id" : 6194
}

20th Century Fox:
{  
 "name" : "Twentieth Century Fox Film Corporation",  
 "id" : 306  
}

# Ejercicio 2

De las películas del ejercicio 1, las que tengan una puntuación mayor a 8 (vote_average).

# Solucion

{
production_companies: {
$in: [
{
 "name" : "Twentieth Century Fox Film Corporation",
 "id" : 306
 },
{
 "name" : "Warner Bros.",
 "id" : 6194
 }
]
},
vote_average: {
$gt: 8
}
}
