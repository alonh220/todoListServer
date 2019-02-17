import {Request, Response} from "express";
import {ListRoutes} from './ListRoutes';

export class Routes {  
    
    public list: ListRoutes = new ListRoutes();
   

    public routes(app): void {      
        this.list.router(app);    
    }   
}