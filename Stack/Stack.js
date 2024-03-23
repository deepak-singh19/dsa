class Stack{
    constructor(){
        this.item=[];
        this.size=0;
    }

    push(data){
        this.item[this.size]= data;
        this.size++;
        console.log(this.item)
        return this.item;

    }

    pop(){
        let deletedItem=this.item[this.size-1];
        console.log("this item is deleted ",deletedItem);
        this.size--;
        return this.item;
    }

    peek(){
        console.log(this.item[this.size-1]);
        return this.item[this.size-1];
    }

    clear(){
        this.item=[];
        this.size=0;
        return this.item
    }


} 

let stack= new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.push(40);
stack.peek();