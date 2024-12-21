import { UserModel } from "../features/user/user.model.js";

const basicAuthorizer = (req, res, next) => {
    // 1.Check if authorization header is empty 
    const  authHeader = req.headers['authorization'];
    if (!authHeader){
        return res.status(401).send('No Authorization Header Provided');
    } 
        //2. Extract crendential
        console.log(authHeader);
        const base64Crendential = authHeader.replace('Basic ','');
        console.log(base64Crendential);
        //3.decode credential
        const decodeedCreds = Buffer.from(base64Crendential, 'base64').toString('utf8')
        console.log(decodeedCreds);     //[username : password]
        const creds = decodeedCreds.split(`:`);
        const user = UserModel.getAll().find(u => u.email == creds[0] && u.password == creds[1]);
        if(user){
            next();
        }
        else{
            return res.status(401).send("Incorrect Credentials");
        }   
}
export default basicAuthorizer;