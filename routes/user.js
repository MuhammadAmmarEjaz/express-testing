
var express = require('express'),
router = express.Router();


    router.get('/',(req,res)=>{
        res.send({message:'this will give all users'})
    })

    router.get('/:id',(req,res)=>{
        res.send({message:'this give the specific user'})
    })

    router.post('/login', (req, res) => {
        try {
            let requestData = req.body;
                res.status(200).json({
                    message: 'login Successfully',
                    data: requestData
                })
        } catch (error) {
            res.status(error.code || 400).json({
                message: error.message,
                success: false
            })
        }
    });

    router.post('/signup', (req, res) => {
        try {
            let requestData = req.body;
                res.status(200).json({
                    message: 'Signup Successfully',
                    data: requestData
                })
        } catch (error) {
            res.status(error.code || 400).json({
                message: error.message,
                success: false
            })
        }
    });
    module.exports = router;