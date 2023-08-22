# Películas largas y populares

-  Encontrar las películas que duran 1 hora y media (90 minutos) o más y tienen una puntuación mayor o igual a 8.
-  Los atributos son: runtime y vote_average

# Solución

{
runtime: {
$gte: 90
},
vote_average: {
$gte: 8
}
}
