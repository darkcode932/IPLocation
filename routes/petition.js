import express from 'express';
import {getPetition, createPetition, updatePetition, deletePetition} from '../controllers/petition.js'

const router = express.Router();


//Toutes les routes pour gerer les petitons sont repertoriées ici

//create
router.post('/', createPetition);

//get, obtain
router.get('/:id', getPetition);

//update
router.put('/:id', updatePetition);

//delete
router.delete('/:id', deletePetition);
