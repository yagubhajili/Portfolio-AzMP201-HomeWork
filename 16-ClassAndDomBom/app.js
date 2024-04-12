class Human {
    constructor(name, surname, age, gender, nationality) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }
    getFullName() {
        return this.name + " " + this.surname
    }
    getBirthYear() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.age;

    }
}

class User extends Human {
    constructor(name, surname, age, gender, nationality, username, email, isAdmin, password, bio) {
        super(name, surname, age, gender, nationality)
        this.username = username;
        this.email = email;
        this.isAdmin = isAdmin;

        this.password = password;
        if (password.length < 5) {
            console.error("password must be at least 5 chars")
        }
        this.bio = bio;
        if (bio.length >= 30) {
            console.error("bio must be at max 30 chars")

        }
        this.isLogged = false;

    }
    changePassword(currentPassword, newPassword) {
        if (currentPassword === this.password) {
            if (currentPassword === newPassword) {
                console.error("new password and current password are the same")
            } else if (newPassword.length >= 5) {
                this.password = newPassword
                return newPassword
            } else {
                console.error("new password must be at least 5 char")
            }

        } else {
            console.error("your current password doesnt match")
        }
    }
    changeEmail(users, newEmail) {
        const emailExists = users.some(user => user !== this && user.email === newEmail);

        if (!emailExists) {
            this.email = newEmail;
        } else {
            alert('Email already exists');
        }
    }
}

let user1 = new User("yaqub", "hacili", 19, "male", "aze", "firstuser", "example@gmail0", true, "yaqub123", "salam men yaqub necesiz")
let user2 = new User('seyhun', 'hacili', '22', 'male', 'Aze', 'seyhun.123', 'syehun@gmail.cm', false, 'seyhun123', 'seafearer in the ship')
let user3 = new User('iman', 'eliyev', 20, 'male', 'talish', 'imansiz', 'iman@gmail.com', false, 'i1m2i3', 'men imansiz oyun oynuyuram')

let users = [user1, user2, user3]