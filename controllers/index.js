//leer todos los modelos creados
const models = require("../database/models");

//creamos operacion POST para un usuario nuevo

const createUser = async (req,res) => {
  try {
    //genera una sentencia SQL tipo insert into ...
    const user = await models.User.create(req.body);
    
    // codigo 201 = insertado OK
    return res.status(201).json({
	user
    });
  
  }   catch (error){
      //codigo 500 error del lado del server
	return res.status(500).json({
	   error: error.message
	});
  }

};


const getAllUsers = async (req, res) => {
  console.log('getting users');
  try {
    const users = await models.User.findAll({
       include: [
     ]
   });
    return res.status(200).json({users});
  } catch(error){
    return res.status(500).json;
   }
}; 

module.exports = {
  createUser,
  getAllUsers
};
