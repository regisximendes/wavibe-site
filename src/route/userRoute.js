module.exports = (application)  => {

    application.get('*',(req,res,next) => {
       res.render('index')
    });
}


