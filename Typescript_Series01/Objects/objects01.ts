const User = {
    name: "amit",
    email: "amit@gmail.com",
    isActive: true
}

function createUser({ name, isPaid }: { name: string; isPaid: boolean }) { }

createUser({
    name: "amit",
    isPaid: true
});
