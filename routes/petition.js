import express from 'express';
import {getPetition, createPetition, updatePetition, deletePetition} from '../controllers/petition.js'

const router = express.Router();


//Toutes les routes pour gerer les petitons sont repertoriées ici

//create
router.post('/petitions', createPetition);

//get, obtain
router.get('/petitions/:id', getPetition);

//update
router.put('/petitions/:id', updatePetition);

//delete
router.delete('/petition/:id', deletePetition);
