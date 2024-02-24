"use strict";

(function (core) {

    class Contact {
        constructor(fullName = "", contactNumber = "", message = "") {
            this.fullName = fullName;
            this.contactNumber = contactNumber;
            this.message = message;
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

        get message() {
            return this._message;
        }

        set message(value) {
            this._message = value;
        }

        toString() {
            return `fullName ${this._fullName}\n
            contactNumber ${this._contactNumber}\n message ${this._message}`;
        }


        /**
         serialize for writing to localStorage
         **/
        serialize() {
            if (this.fullName !== "" && this.contactNumber !== "" && this.message !== "") {
                return `${this._fullName}.${this._contactNumber}.${this._message}`;
            }
            console.error("One or more of the contact properties are missing or invalid");
            return null;
        }

        /**
         Deserialized means to read data from localStorage
         **/
        deserialize(data) {
            // Bruce Wayne, 555-5555, Bruce@Batman.com
            let propertyArray = data.split(".");
            this.fullName = propertyArray[0];
            this.contactNumber = propertyArray[1];
            this.message = propertyArray[2];
        }
    }
    core.Contact = Contact;

})(core || (core ={}));