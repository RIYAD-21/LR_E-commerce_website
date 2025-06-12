import { login, register } from "../services/auth.service.js";

const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await login({ email, password });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

const registerController = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await register({ username, email, password });
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export {
    loginController,
    registerController
};