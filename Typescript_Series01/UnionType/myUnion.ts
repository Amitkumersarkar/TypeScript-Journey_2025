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

// function getDbId(id: number | string) {
//     // making some API here
//     console.log(`DB id is : ${id}`);
// }

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    // making some API here
    // console.log(`DB id is : ${id}`);
    // id.toLowerCase()
    if (typeof id == "string") {
        id.toLocaleLowerCase()

    }
    // id + 2

}

// array
const data: number[] = [1, 2, 3, 4]
const data2: string[] = ["", "2", "3", "4"]
const data3: (string | number | boolean)[] = ["1", "2", "3", "4", true]

// let pi: 3.14 = 3.14
// pi = 3.145

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "crew"