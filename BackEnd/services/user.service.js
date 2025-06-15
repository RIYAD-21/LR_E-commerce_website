import {PGSQL} from '../config/db.js';

export const getUserProfile = async (req, res) => {
    const { user_id } = req.params;
    try {
        const result = await PGSQL `SELECT * FROM client WHERE id = ${user_id}`;
        if (result.length === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, data: result[0] });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

export const updateUserProfile = async (req, res) => {
    const { user_id } = req.params;
    const { username, email, fullname, address, city, state, country } = req.body;
    try {
        const result = await PGSQL `UPDATE client SET username = ${username}, email = ${email}, fullname = ${fullname}, 
                        address = ${address}, city = ${city}, state = ${state}, country = ${country} WHERE id = ${user_id}`;
        if (result.rowCount === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }
        res.status(200).json({ success: true, message: "User profile updated successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}