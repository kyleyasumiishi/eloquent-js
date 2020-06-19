/*
Create a set data structure called "Group".
*/

class Group {
    constructor() {
        this.group = [];
    }
    has(value) {
        return this.group.indexOf(value) > -1;
    }
    add(value) {
        if (!this.has(value)) {
            this.group.push(value);
        }
    }
    delete(value) {
        if (this.has(value)) {
            this.group.splice(this.group.indexOf(value), 1);
        }
    }
    static from(value) {
        let newGroup = new Group();
        for (let i = 0; i < value.length; i++) {
            if (!newGroup.has(value[i])) {
                newGroup.add(value[i]);
            }
        }
        return newGroup;
    }
}

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
    }
    next() {
        if (this.index === this.group.length) {
            return {done: true};
        }

        let value = {value: this.group[this.index]};
        this.index++;
        return {value, done: false};
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this.group);
}

// Tests
let group = Group.from([10, 20]);
console.log(group.has(10)); // true
console.log(group.has(30)); // false
group.add(10);
group.delete(10);
console.log(group.has(10)); // false

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}