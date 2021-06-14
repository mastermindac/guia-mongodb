# ReplicaSet

           +-----------------+
           |CLIENTE/PROGRAMA |
           +--+-----+--------+
              |     |
    ESCRIBE   v     v LEE
            +---------+
            | PRIMARY |
            +----+-+--+
                 | |
       REPLICA   | | REPLICA
+---------+      | |     +---------+
|SECONDARY|<-----+ +---->|SECONDARY|
+---------+              +---------+

# Configurando un replicaset en local
docker run --name curso-mongo0 -d -p 27018:27017 mongo:latest --replSet rs0
docker run --name curso-mongo1 -d -p 27019:27017 mongo:latest --replSet rs0
docker run --name curso-mongo2 -d -p 27020:27017 mongo:latest --replSet rs0

rsconf = {
  _id: "rs0",
  members: [
    {
     _id: 0,
     host: "localhost:27018"
    },
    {
     _id: 1,
     host: "localhost:27019"
    },
    {
     _id: 2,
     host: "localhost:27020"
    }
   ]
}

rs.initiate( rsconf )

rs.status()