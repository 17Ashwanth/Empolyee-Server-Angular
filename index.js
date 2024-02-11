const jsonserver = require('json-server')

const empserver = jsonserver.create()

const router = jsonserver.router('db.json')

const middleware = jsonserver.defaults()

empserver.use(middleware)
empserver.use(router)

const port = 5300 || process.env.PORT

empserver.listen(port,()=>{
    console.log(`Employee server succesfully running on ${port}`);
})