import app from "./app.js";

import {db  } from "./config/db.js";
import userRoutes from "./routes/user.routes.js";




app.set('port', 4000);
db()

//roues
app.use('/', userRoutes)

app.listen(app.get('port'), ()=>{
    console.log("server on port", app.get('port'))
})