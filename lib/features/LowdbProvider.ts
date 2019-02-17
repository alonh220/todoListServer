
import * as lowdb from "lowdb";
import * as FileAsync from "lowdb/adapters/FileAsync"

 class LowdbProvider{
    public db: lowdb.LowdbAsync;

    constructor(){
        this.initDatabase();
        }
        
    private async initDatabase() {
    const adapter = new FileAsync("db.json");
    this.db = await lowdb(adapter);
    this.db.defaults({ todoList: {}, count: 0 })
        .write()
    }

    public getId(): Number{
        return this.db.get("count") + 1;
    }

    public updateCount(){
        this.db.update('count', n => n + 1)
        .write()
    }

    public async push(key, row){
       row.id = this.getId();
       let result = await this.db.get(key).push(row).write();
       await this.updateCount();
       return result.filter((user) => user.id ==  row.id);
    }
}

export default new LowdbProvider();