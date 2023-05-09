import express from 'express';
const Routes = express();
import { GetHome } from '../Controller/Home.js';

Routes.route('/').get(GetHome);


export default Routes