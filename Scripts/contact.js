"use strict";

class Contact{

    constructor(fullName = "", contactNumber = "" , emailAddresss="") {
        this._fullName = fullName;
        this._contactNumber = contactNumber;
        this._emailAddresss = emailAddresss;


    }
    get fullName() {
        return this._fullName;
    }

    set fullName(value) {
        this._fullName = value;
    }

    get contactNumber() {
        return this._contactNumber;
    }

    set contactNumber(value) {
        this._contactNumber = value;
    }

    get emailAddresss() {
        return this._emailAddresss;
    }

    set emailAddresss(value) {
        this._emailAddresss = value;
    }

    toString(){
        return `fullName ${this.fullName}\n
        contactNumber ${this.contactNumber}\n EmailAddress${this.emailAddresss}`
    }

    serialize(){
       if (this.fullName!== "" && this.contactNumber!== "" && this.emailAddresss !== "") {
           return `${this.fullName}, ${this.contactNumber}, ${this.emailAddresss}`
       }
        console.error("Invalid");
        return null;
    }
    deserialize(){

        let propertyArray = data.split(",");
        this._fullName = propertyArray[0];
        this._contactNumber=propertyArray[1];
        this._emailAddresss=propertyArray[2];
    }

}