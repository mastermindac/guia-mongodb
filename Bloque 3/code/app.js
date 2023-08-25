// Importa la biblioteca 'mongodb'
const mongodb = require('mongodb');

// Extrae el constructor MongoClient de la biblioteca mongodb
const MongoClient = mongodb.MongoClient;

// Define la URL de conexión a la base de datos MongoDB
const url = 'mongodb://localhost:27017';

// Crea una función autoinvocada asincronía (async IIFE)
(async () => {
   try
   {
      // Intenta establecer la conexión con la base de datos
      const client = await MongoClient.connect(url);

      // Obtiene una referencia a la base de datos 'movie-dataset'
      const db = client.db('movie-dataset');

      // Obtiene una referencia a la colección 'movies_metadata'
      const collection = db.collection('movies_metadata');

      // Insertar un documento en la colección 'movies_metadata'
      // await collection.insertOne({
      //    original_title: 'Mastermind',
      //    genre: 'Curso MongoDB'
      // });

      // Define un objeto de consulta para buscar películas con título 'Toy Story'
      const query = {
         original_title: 'Toy Story'
      };

      // Define un objeto de consulta proyecciones.
      const projection = {
         original_title: 1,
         original_language: 1
      };

      // Ejecuta la consulta y obtiene un cursor para los resultados
      const cursor = collection.find(query).project(projection);

      // Convierte el cursor en un array de documentos
      const documents = await cursor.toArray();

      // Utiliza un bucle for...of para iterar sobre los documentos y los imprime
      for (const doc of documents)
         console.log(doc);

      // Cierra la conexión con la base de datos
      client.close();
   } catch (err)
   {
      // Si se produce un error en cualquier parte del bloque try, se captura aquí
      console.error('Error:',err);
   }
})();
