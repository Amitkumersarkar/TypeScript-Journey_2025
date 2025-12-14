type User = {
    readonly _id: string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number
}
// function createUser(u:User){}
let myUser: User = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: false
}
type cardNumber = {
    cardNumber: string
}

type cardDate = {
    cardDate: string
}

type CardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "amit@gmail.com"
// myUser._id ="Amit"