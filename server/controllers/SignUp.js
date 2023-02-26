import dbConnection from "../utils/Database";

async function handleSignUp (req,res){

    const user = req.body.user;

   const result = await dbConnection`
   INSERT INTO users 
   (first_name, last_name, email, password, role)
   VALUES(${user.first_name},${user.last_name},${user.email},${user.password},${user.role})
   returning user_id
      `;

    return res.json(result[0]);
}

export { handleSignUp };