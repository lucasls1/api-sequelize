const User = require('../model/User');

module.exports={
    async store(req, res) {
        const { name, email } = req.body;
    
        const user = await User.create({ name, email });
            console.log(user)
        return res.json(user);
      }
};