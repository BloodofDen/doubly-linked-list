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
        ++this.length;
        delete this.Node_temp;
    }

    head() {
        if (!this._head) return null;
        return(this._head.data);
    }

    tail() {
        if (!this._tail) return null;
        return(this._tail.data);
    }

    at(index) {
        var chooser = this._head;
        for(var i = 0; i < index; i++) {
            chooser = chooser.next;
        }
        return(chooser.data);
    }

    insertAt(index, data) {
        if(!this._head && !index)
        {
            this.append(data);
            return;
        }
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
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    deleteAt(index) {
        if(index<0 || index>this.length-1) throw new Error("Error! Incorrect index!");
        if(index === 0 && this.length === 1)
        {
            this._head = null;
            this._tail = null;
            this.length = 0;
            return;
        }
        if(index === 0)
        {
            this._head = this._head.next;
            this._head.prev = null;
            this.length--;
            return;
        }
        var chooser = this._head;
        for (var i = 0; i < index; i++) {
            chooser = chooser.next;
        }
        var before = chooser.prev;
        var after = chooser.next;
        before.next = after;
        after.prev = before;
        --this.length;
    }

    reverse() {
        if(this._head != this._tail)
        {
            var head_temp = this._head, tail_temp = this._tail;
            for(var i = 0; i < Math.trunc(this.length/2); i++)
            {
                var temporary = head_temp.data;
                head_temp.data = tail_temp.data;
                tail_temp.data = temporary;

                head_temp = head_temp.next;
                tail_temp = tail_temp.prev;
            }
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
