# Documentos?
Documentos en formato similar a JSON (BSON, Binary JSON)
- Fechas
- ObjectID (identificadores unicos)
- Int, Float

# Collecciones?
Conjuntos de documentos
- No tienen porque tener todos el mismo esquema!

Collection Students:
{name: 'Octavio'}
{name: 'Juan', apellido: 'Ramirez'}

Bienvenido al curso, Juan

# Ejemplo de BSON:

{"hello": "world"} →

\x16\x00\x00\x00           // total document size
\x02                       // 0x02 = type String
hello\x00                  // field name
\x06\x00\x00\x00world\x00  // field value
\x00                       // 0x00 = type EOO ('end of object')