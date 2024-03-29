import {Response, Request} from "express"

import { userServices } from "../services";
import { User } from "../constant";

let useServ = new userServices();

const createUser = async (req: {body: User}, res: Response) => {
  console.log("createuser controller");
  try {
    let data = await useServ.createUser(req.body);
    return res.status(200).json({
      data: data,
      success: true,
      message: "user created succesfully",
      err: {},
    });
  } catch (err) {
    console.log("something went wrong with createuser controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "createuser unsuccesfully",
      err: err,
    });
  }
};

const getUserById = async (req: {params: {userId: string}}, res: Response) => {
  console.log("getUserById controller");
  try {
    let data = await useServ.getUserById(req.params.userId);
    return res.status(200).json({
      data: data,
      success: true,
      message: "user found succesfully",
      err: {},
    });
  } catch (err) {
    console.log("something went wrong with getUserbyId controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "getuserbyId unsuccesfully",
      err: err,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  console.log("getAllUser controller");
  try {
    let data = await useServ.getAllUser();
    return res.status(200).json({
      data: data,
      success: true,
      message: "all users found succesfully",
      err: {},
    });
  } catch (err) {
    console.log("something went wrong with getAllUser controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "getAllUser unsuccesfully",
      err: err,
    });
  }
};

const deleteUser = async (req: {params: {userId: string}}, res: Response) => {
  console.log("deleteUser controller");

  try {
    let data = await useServ.deleteUser(req.params.userId);
    return res.status(200).json({
      data: data,
      success: true,
      message: "user deleted succesfully",
      err: {},
    });
  } catch (err) {
    console.log("something went wrong with deleteUser controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "deleteUser unsuccesfully",
      err: err,
    });
  }
};

const updateUser = async (req: {params: {userId: string}, body: User}, res: Response) => {
  try {
    let data = await useServ.updateUser(req.params.userId, req.body);
    return res.status(200).json({
      data: data,
      success: true,
      message: "user updated succesfully",
      err: {},
    });
  } catch (err) {
    console.log("something went wrong with updateUser controller");
    return res.status(500).json({
      data: {},
      success: false,
      message: "updateUser unsuccesfully",
      err: err,
    });
  }
};


export {
    createUser,
    getUserById,
    getAllUser,
    deleteUser,
    updateUser
}