# Queries en JSON!

- En MongoDB, TODO es JSON :D

# Tu primera query!!

- Buscar la película cuyo título sea 'Die Hard'

{
original_title:'Die Hard'
}

# Ejemplo de queries:

# gte grater than or equal

# gt greater than

# lt lower than

# u can combine then in 1 json like { $gte: 'number', $lte: 'number'}

# and u can add two or more params that use the condition AND

{
budget: {
$gte: 28000000
},
revenue: {
$gte: 168840000
}
}
