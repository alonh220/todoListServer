export class Todo{
    id: Number;
    todo: String;

    constructor(id, todo){
        this.id = id;
        this.todo = todo;
    }

    toString(){
        return this.id + " " + this.todo;
    }
}