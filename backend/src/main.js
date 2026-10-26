const efunction = require("express")
const cors = require("cors")

const restEndpointsObj = require("./routes/userRoute.js");
const { connectServer} = require("./model/userModel.js");

const expressobject = efunction();

expressobject.use(cors());

expressobject.use(cors({
   origin: [
    'http://localhost:3000',
    'http://localhost:5174',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5174'
  ],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
 
//expressobject.options('*', cors()); // important for preflight

expressobject.use(efunction.json());

expressobject.post('/api/users/sign-up', (req, res) => {
  res.json({ ok: true });
});

/* 
expressobject.use(
  (req, resp,next) =>{
    console.log("expressobject.use is callled....................");
    next();
  }
);

expressobject.use(
  (req, resp,next) =>{
    console.log("expressobject.use -2  is callled****************");
    resp.send("response is sent - 2*****************");
  }
);
 */
expressobject.use("/api/users", restEndpointsObj);


expressobject.listen(7374, (req, resp) => {
    console.log("express server started")
    connectServer();

})
