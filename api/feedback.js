function handler(req, res){
    const data = req.body;
    if(!data.name || !data.email || data.message){
        res.status(400).json({message: "Data missing"});
    }
    if(req.method === "POST"){
        res.status(200).json({message: `"status": "success", "message": "Feedback received"`})
    } else if(req.method === "GET"){
        res.status(200).json({message: data})
    } else{
        res.status(405).json({message: `Unable to find ${req.method} request`});
    }
}