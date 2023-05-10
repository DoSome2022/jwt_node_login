import express from 'express';
import { GetLogin , GetRegister , PostLogin , PostRegister } from "../Controller/Auth.js"
const Routes =express.Router();


Routes.route('/login').get(GetLogin).post(PostLogin)
Routes.route('/register').get(GetRegister).post(PostRegister)

export default Routes