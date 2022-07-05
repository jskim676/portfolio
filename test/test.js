const fs = require("fs");

const obj = {
  name : "티모",
  skill : "버섯"
}

let junsick = JSON.stringify(obj, null, 2);

fs.writeFile('timo.JSON', junsick, (err)=> {
  if(err) {
  } else {
    err;
  }
})