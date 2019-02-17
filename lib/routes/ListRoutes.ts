import {Request, Response} from "express";
import { ListController } from "../features/listFeature/ListController";
export class ListRoutes{

    public listController: ListController = new ListController();

    public router(app): void{
        app.route('/')
        .get((req: Request, res: Response) => {            
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        });
        
        app.route('/list')
        .get(this.listController.getList); 

        app.route('/list')
        .post(this.listController.addList); 

        app.route('/list/:id')
        .get(this.listController.getById); 

        app.route('/list/search/:term')
        .get(this.listController.search); 

        app.route('/list/:id')
        .delete(this.listController.delete); 


    }
}