const User = require("../model/userModel") // new



const getAllUser = async (req, res) => {

    const users = await User.find()
    res.send(users)
}


const postUser = async (req, res) => {

    const newUser = new User(req.body);
    newUser.save();
    ressend("succes");
}


const getUserById = async (req, res) => {

    const getElem = await User.find({ _id: req.params.id })
    res.send(getElem);

}

const deleteUserById = async (req, res) => {

    await User.findOneAndDelete({ _id: req.params.id });
    res.send("silindi");
}

const patchUserById = async (req, res) => {
    const newUser = await User.findOneAndUpdate({ _id: req.params.id }, req.body);
    res.status(200).send(newUser);
}


const putUserById = async (req, res) => {

    const getElem = await User.find({ _id: req.params.id });
    const newUser = await User.findOneAndReplace(
        { _id: req.params.id },
        req.body
    );
    res.status(200).send(newUser);
};
module.exports = { getAllUser, postUser, getUserById, deleteUserById, patchUserById, putUserById,
};
