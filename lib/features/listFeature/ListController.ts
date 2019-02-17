import {Request, Response} from "express";
import LowdbProvider from "../LowdbProvider"
import {ListService} from "./ListService";

export class ListController {

    public name: String ;  
    private listService: ListService = new ListService();

    constructor(){
        this.name = "sdsd";
        console.log(this.name); 
    }
    getList = async (req: Request, res: Response ) => {                
        try{
            let data = await this.listService.getList();
            res.json({data: data})
        }
        catch(error) {
            res.status(404).send(error);
            
          }
    }

    addList = async (req: Request, res: Response ) => { 
        try{
         if(req.body){
            let result = await this.listService.addList(req.body.todo);
            res.json({data:result}); 
         }
        }
        catch(error) {
            res.status(404).send(error);
            
          }
    }

    getById = async (req: Request, res: Response) => {
        try{
            let result = await this.listService.getById(req.params.id);
            res.json({data:result}); 
            }
            catch(error) {
                res.status(404).send(error);
                
              }
    }
    
   search = async (req: Request, res: Response) => {
        try{
            let result = await this.listService.search(req.params.term);
            res.json({data:result}); 
        }
        catch(error) {
            res.status(404).send(error);
            
          }
    }

    delete = async (req: Request, res: Response) => {
        try{
            let result = await this.listService.delete(parseInt(req.params.id));
            res.json({data:result}); 
            }
            catch(error) {
                res.status(404).send(error);
                
              }
    }

}