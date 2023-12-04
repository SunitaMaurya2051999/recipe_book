const { Op } = require("sequelize");
const db = require("../sequelize/models");

exports.registerUser = async ({ body: data }, res) => {
  try {
    const response = await db.entity.create(data);
    res.send({ status: "success", data: response });
  } catch (error) {
    res.status(200).send({ status: "error", message: error });
  }
};

exports.loginUser = async ({ body: data }, res) => {
    try {
        const isUserRegistered = await db.entity.findOne({
            where: {
              email: {
                [Op.eq]: data.email,
              },
            },
          });
        if(isUserRegistered){
            const response = await db.entity.findOne({
                where: {
                  email: {
                    [Op.eq]: data.email,
                  },
                  pass_word: {
                    [Op.eq]: data.pass_word,
                  },
                },
              });
            
            if(response){
                res.send({ status: "success", data: response });
            }else{
                res.send({ status: "error", message: 'Password is Invalid' });
            }

        }else{
            res.send({ status: "error", message: 'User Not Registered' });
        }
   
    } catch (error) {
      res.status(200).send({ status: "error", message: error });
    }
  };
