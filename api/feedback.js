let feedbackStore = []

function handler(req, res){
    if(req.method === "POST"){
        const {name, email, message} = req.body;
        if(!name || !email || !message){
            return res.status(400).json({message: "All fields are required"});
        }
        feedbackStore.push({name, email, message})
        return res.status(200).json({status: "success", message: "Feedback received"})
    } else if(req.method === "GET"){
        return res.status(200).json(feedbackStore)
    } else{
        return res.status(405).json({message: `Unable to find ${req.method} request`});
    }
}

export default handler;