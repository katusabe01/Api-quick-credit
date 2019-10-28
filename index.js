import express from 'express';

const app = express()

app.use(express.json())
const users = [
    {
    id: 1,
    email: "khalimah@.com",
    firstName: "katusabe",
    lastName: "halimah",
    pasword: "hally",
    address: "kampala",
    status: "verified",
    isAdmin: true
    },
    {
        id: 2,
        email: "kkauthar@.com",
        firstName: "amuha",
        lastName: "kauthar",
        pasword: "mom",
        address: "kampala",
        status: "unverified",
        isAdmin: false
        },
        {
            id: 3,
            email: "aammaar@.com",
            firstName: "muuhangi",
            lastName: "ammaar",
            pasword: "sill",
            address: "kampala",
            status: "unverified",
            isAdmin: false
            },
            {
                id: 4,
                email: "rswaibu@.com",
                firstName: "rumbiiha",
                lastName: "swaibu",
                pasword: "kat",
                address: "kampala",
                status: "unverified",
                isAdmin: false
                }
];
app.post('/api/v1/auth/signup', (req, res) => {
    const user  = {
        id:users.length + 1,
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        pasword: req.body.pasword,
        status: req.body.status,
        isadmin: req.body.isAdmin
    };
    const ifExist = user.find(user=>user.email===req.body.email);
    if(ifExist) return res.status(409).send({status:409,message: "user already exist"});
    users.push(user);
  return res.status(200).send({status:200,message: "account created",user });
})

app.listen(3000)
console.log('app running on port ', 3000);