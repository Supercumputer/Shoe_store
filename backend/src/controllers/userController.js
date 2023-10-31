

const getAcount = (req, res, next) => {
    try {
        return res.status(200).json({
          token: req.token,
          acount: {
            email: req.user.email,
          }
        })
       
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}

module.exports = {getAcount}



