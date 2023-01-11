const express=require("express");
const { connection, userModal } = require("./db");
const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());

app.post("/signup", async (req, res) => {
  const { name, email, password} = req.body;
  const result = await userModal.find({ email });
  if (result.length > 0) {
    res.send({ msg: "User already exists" });
  } else {
    const newuser = new userModal({
      name: name,
      email: email,
      password: password,
    });
    await newuser.save();
    res.send({ msg: "signup sucess" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await userModal.find({ email });
  const pass = result.map((el) => {
    return el.password;
  });

  if (result) {
    if (password == pass) {
      res.send({ msg: "Login Sucess" });
    }else{
      res.send({ msg: "Wrong Crendtials" });
    }
  } else {
    res.send({ msg: "Wrong Crendtials" });
  }
});


app.listen(8000, async () => {
  try {
    await connection;
    console.log("Connection sucess");
  } catch (err) {
    console.log("Error in connection");
    console.log(err);
  }
});
