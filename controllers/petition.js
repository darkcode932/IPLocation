const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const uri =
  "mongodb+srv://<okok>:<password>@cluster0.mongodb.net/Apption?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect((err) => {
  // gestion des erreurs
  const collection = client.db("Apption").collection("petitions");
  // travaillez avec votre collection
  client.close();
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//creer une petition
export const createPetition = (res, req) => {
  const petition = req.body;
  collection.insertOne(petition, (err, result) => {
    // gestion des erreurs
    res.send(result.ops[0]);
  });
};

//obternir une petition
export const getPetition = (res, req) => {
  const id = req.params.id;
  collection.findOne({ _id: ObjectID(id) }, (err, result) => {
    // gestion des erreurs
    res.send(result);
  });
};

//modifier une petiton
export const updatePetition = (res, req) => {
  const id = req.params.id;
  const petition = req.body;
  collection.updateOne(
    { _id: ObjectID(id) },
    { $set: petition },
    (err, result) => {
      // gestion des erreurs
      res.send(result);
    }
  );
};

//supprimer petition
export const deletePetition = (res, req) => {
  const id = req.params.id;
  const petition = req.body;
  collection.deleteOne(
    { _id: ObjectID(id) },
    { $set: petition },
    (err, result) => {
      // gestion des erreurs
      res.send(result);
    }
  );
};
