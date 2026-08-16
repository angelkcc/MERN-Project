import app from "./app";
import http from "http";
import connectDatabase from "./config/db.config";

const PORT= 8080;

//*connect database
const DB_URI= "mongodb://localhost:27017/mernproject";
connectDatabase(DB_URI);

//*http server
const server= http.createServer(app);

//*listen server
server.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});
