let score: number | string = 33

score = 44
score = "55"

type User = {
    name: string;
    id: number
}

type Admin = {
    UserName: string;
    id: number
}

let Amit: User | Admin = { name: "Amit", id: 283 }
Amit = { UserName: "softDev", id: 283 }

