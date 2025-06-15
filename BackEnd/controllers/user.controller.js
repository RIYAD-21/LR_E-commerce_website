import { getUserProfile, updateUserProfile } from "../services/user.service.js";

const getUserProfileController = async (req, res) => {
<<<<<<< HEAD

    try {
        const userProfile = await getUserProfile(req.user.id);
=======
    const { user_id } = req.params;
    try {
        const userProfile = await getUserProfile({ user_id });
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
        res.status(200).json({ success: true, data: userProfile });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const updateUserProfileController = async (req, res) => {
    const { user_id } = req.params;
    const { username, email, fullname, address, city, state, country } = req.body;
    try {
        const updatedProfile = await updateUserProfile({ user_id, username, email, fullname, address, city, state, country });
        res.status(200).json({ success: true, data: updatedProfile });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export {
    getUserProfileController,
    updateUserProfileController
};