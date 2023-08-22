# Comparaciones (Queries)

-  $eq (Igualdad)
-  $gt (Mayor que estricto)
-  $gte (Mayor o igual)
-  $in (Contiene)
-  $lt (Menor que estricto)
-  $lte (Menor o igual)
-  $ne (Diferente)
-  $nin (No contiene)

# Comparaciones con arrays

-  El atributo objetivo NO es un array:
   original_language: es, en, fr... -> SEA UNO DE ESTOS: ['es', 'fr']
   {
   original_language: { $in: ['es', 'fr'] }
   }

-  El atributo objetivo SI es un array:
   genres:

{
genres: {$in: [{
"id" : 16,
"name" : "Animation"
}, {
"id" : 12,
"name" : "Adventure"
}]}
}
