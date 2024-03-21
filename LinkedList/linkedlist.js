//Create a Node class

class Node{
    constructor(data, next=null){
        this.data=data;
        this.next=next;
    }
}

class LinkedList{
    constructor(){
        this.head=null;
        this.size=0;
    }

    //Instert at First

    insertFirst(data){
        this.head= new Node(data, this.head);
        this.size++;
    }

    //Insert at nth position
    insertAtPosition(data, index){
        let current;
        let previous;
        let node;
        let count=0;

        //If list is empty or if you want to insert in the 1st position

        if(!this.head || index==0){
            this.insertFirst(data);
            return;
        }

        if(index>this.size){
            return;
        }

        current= this.head;

        while(count !==index){
            previous= current;
            current=current.next;
            count++;
        }

        node= new Node(data);
        previous.next=node;
        node.next=current;
        this.size++;

    }

    //Insert at last
    insertLast(data){
        let current;

        if(!this.head){
            this.insertFirst(data);
            return;
        }

        current= this.head;

        while(current.next){
            current= current.next;
        }

        current.next= new Node(data);

        this.size++;

    }

    //Get at Index

    getAtIndex(index){
        let count=0;
        let current=this.head;

        while(count!==index){
            current=current.next;
            count++;
        }

        console.log("The index data ",current.data);

        return current.data;

    }

    //Remove at Index

    removeAtIndex(index){
        let count=0;
        let current=this.head;
        let previous;

        if(index>this.size){
            return
        }

        while(count!==index){
            previous=current;
            current=current.next;
            count++;
        }
        console.log("deleted data is ", current.data)
        current=current.next;

        previous.next=current;

        this.size--;

    }

    //Clear List 

    clearList(){
        this.head=null;
        this.size=0;

    }

    // Print the list

    printList(){
        let current=this.head;
        while(current){
            console.log(current.data);
            current=current.next;
        }


    }
}

let ll= new LinkedList();

ll.insertFirst(100);
ll.insertFirst(200);
ll.insertFirst(300)
ll.insertLast(1000);
ll.insertAtPosition(500,2);
ll.insertFirst(400);
ll.insertFirst(600);
ll.getAtIndex(2);
ll.removeAtIndex(2);
ll.printList();