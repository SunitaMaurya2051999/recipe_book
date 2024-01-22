const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const VerifyJwtToken = require("../helper/VerifyTokenJwt.js");
const db = require("../sequelize/models/index.js");

exports.registerUser = async ({ body: data }, res) => {
  try {
    const isUserRegistered = await db.entity.findOne({
      where: {
        email: {
          [Op.eq]: data.email,
        },
      },
    });
   
    if(!isUserRegistered){
      const response = await db.entity.create(data);
      res.send({ status: "success", data: response });
    }else{
      res.send({ status: "success", data: null,message:'User already registered' });
    }
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

    if (isUserRegistered) {
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

      if (response) {
        const user_data = { first_name: response.first_name, last_name: response.last_name, email: response.email, pass_word: response.pass_word };
        const token = jwt.sign(user_data, process.env.JWT_KEY, {
          expiresIn: process.env.JWT_EXP_TIME,
        });
        res.send({
          status: "success",
          data: {
            ...user_data,
            token,
          },
        });
      } else {
        res.send({ status: "error", message: "Password is Invalid" });
      }
    } else {
      res.send({ status: "error", message: "User Not Registered" });
    }
  } catch (error) {
    res.status(200).send({ status: "error", message: error });
  }
};

exports.getUserDetails = async ({ body: data }, res) => {
  try {
    const isTokenVerified = await VerifyJwtToken(data.token);
    if (isTokenVerified.status == 'success') {
      const response = await db.entity.findOne({
        where: {
          email: {
            [Op.eq]: data.email,
          },
        },
      });
      if (response) {
        res.send({ status: "success", data: response });
      } else {
        res.send({ status: "success", data: null });
      }
    } else {
      res.send({ status: "error", data: null, message: "token expired" });
    }
  } catch (error) {
    res.status(200).send({ status: "error", message: error });
  }
};

exports.updateLoginUserDetails = async ({ body: data }, res) => {
  try {
    const isTokenVerified = await VerifyJwtToken(data.token);
    if (isTokenVerified.status == 'success') {
      const response = await db.entity.update({
        first_name:data.first_name,
        last_name:data.last_name,
        caption:data.caption
      },{
        where: {
          email: {
            [Op.eq]: data.email,
          },
        },
      });
      if (response) {
        const result = await db.entity.findOne({
          where: {
            email: {
              [Op.eq]: data.email,
            },
          },
        });
        if(result){

          res.send({ status: "success", data: {
            ...result,
            token:data.token,
          } });
        }else{

          res.send({ status: "success", data: null });
        }
      } else {
        res.send({ status: "success", data: null });
      }
    } else {
      res.send({ status: "error", data: null, message: "token expired" });
    }
  } catch (error) {
    res.status(200).send({ status: "error", message: error });
  }
};
