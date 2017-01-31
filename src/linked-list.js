const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        this.Node_temp = new Node(data);
        if(this.length)
        {
            this.Node_temp.prev = this._tail;
            this._tail.next = this.Node_temp;
            this._tail = this.Node_temp;
        }
        else
        {
            this._head = this.Node_temp;
            this._tail = this.Node_temp;
        }
        this.length++;
        delete this.Node_temp;
    }

    head() {return(this._head.data);}

    tail() {return(this._tail.data);}

    at(index) {
        var chooser = this._head;
        for(var i = 0; i < index; i++) {
            chooser = chooser.next;
        }
        return(chooser.data);
    }

    insertAt(index, data) {
        var chooser = this._head;
        for(var i = 0; i < index; i++) {
            chooser = chooser.next;
        }
        chooser.data = data;
    }

    isEmpty() {
        if(this.length) return false;
        else            return true;
    }

    clear() {
        this._head.data = null;
        this._head.next = null;
        this._tail.data = null;
        this._tail.prev = null;
        this.length = 0;
    }

    deleteAt(index) {
        var chooser = this._head;
        for(var i = 0; i < index; i++) {
            chooser = chooser.next;
        }
        var before = chooser.prev;
        var after = chooser.next;
        before.next = after;
        after.prev = before;
        this.length--;
    }

    reverse() {
        var head_temp = this._head, tail_temp = this._tail;
        for(var i = 0; i < Math.ceil(this.length/2); i++)
        {
            var temporary = head_temp.data;
            head_temp.data = tail_temp.data;
            tail_temp.data = temporary;

            head_temp = head_temp.next;
            tail_temp = tail_temp.prev;
        }
    }

    indexOf(data) {
        var chooser = this._head;
        for(var i = 0; i < this.length; i++)
        {
            if(chooser.data === data)
                return i;
            chooser = chooser.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
