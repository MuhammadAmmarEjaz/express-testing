
module.exports = (app) => {

    app.get('/users',(req,res)=>{
        res.send({message:'this will give all users'})
    })

    app.get('/users/:id',(req,res)=>{
        res.send({message:'this give the specific user'})
    })
}