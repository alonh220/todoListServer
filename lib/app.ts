import * as express from "express";
import * as bodyParser from "body-parser";
import {Routes} from "./routes/Routes";
import * as cors from "cors";
class App {

    public app: express.Application;
    public route: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();     
        this.route.routes(this.app);    
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.options("*", cors());
    }

}

export default new App().app;