import express  from "express";
import {home,logout,login} from '../Controllers/homeController.js'

const Homeroute=express.Router();
Homeroute.get("", home);
Homeroute.get('/logout', logout );
Homeroute.post("", login);


export default  Homeroute;
