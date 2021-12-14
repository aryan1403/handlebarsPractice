import express from "express";
import { engine } from "express-handlebars";

const app = express();
const port = process.env.PORT || 8080;

let m = {
  name: "meow",
  cat: "meow",
  people: [
    {
      id: 1,
      img: "https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg", 
      firstname: "Aaryan",
      lastname: "Kumar",
      role: "Developer/Trainer",
      details: {
        meow: "Meow Meow Meow",
      },
    },
    {
      id: 2,
      img: "https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg", 
      firstname: "Abhay",
      lastname: "Kalwar",
      role: "Developer",
      details: {
        meow: "Meow Meow Meow",
      },
    },
    {
      id: 3,
      img: "https://png.pngtree.com/png-vector/20190114/ourlarge/pngtree-vector-avatar-icon-png-image_313572.jpg", 
      firstname: "Srikar",
      lastname: "Kalle",
      role: "Developer",
      details: {
        meow: "Meow Meow Meow",
      },
    },
  ],
};
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("home", { data: m });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/details/:id", (req, res) => {
    m.people.forEach(e => {
        if(e.id == req.params.id) {
            res.render("details", {data: e});
        }
    });
});
app.listen(port, () => console.log(`App Started! ${port}`));
