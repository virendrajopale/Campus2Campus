const {validateTocken}=require('../Services/AuthServices');

const AuthenticateUser=(req,res,next)=>{
    const token=req.header('auth-tocken');
    // console.log(token)
    // console.log("token")
    if(!token)
    {
        return res.status(401).send("Auth1 :Access denied");
    }


    try {
        const payload=validateTocken(token);
        if(!payload){
            return res.status(401).send("Auth2 :Access denied");
        }
        req.user=payload;
        // console.log(payload);
        next();
    } catch (error) {
        console.log(error);
        return res.status(501).json({msg:"Auth :Internal Server Error"});
    }
}

const restrictTo=(roles)=>{
    return function(req,res,next){
        // console.log(req)
        if(!roles.includes(req.user.role)){
            return res.status(401).send({msg:"Auth3 :Access Denied"});
        }
        next();
    }
}
module.exports={AuthenticateUser,restrictTo};