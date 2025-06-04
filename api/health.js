function handler(req, res){
    if(req.method){
        res.status(200).json({message: `"status": "OK"`});
    } else{
        res.status(405).json({message: "Not working"});
    }
}

export default handler;