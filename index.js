//1 Import Json Server
const JsonServer= require('json-server')

//2 Create server using json server
const rbuiderServer=JsonServer.create()

//3 Creation of middleware
const middleware=JsonServer.defaults()

//4 Router setup
const router=JsonServer.router('db.json')

//5 Implementing use
rbuiderServer.use(middleware)
rbuiderServer.use(router)

//6 Port creation
rbuiderServer.listen(prompt,()=>{console.log("Resume Builder Server Running On The Port"+port);})

