<<<<<<< HEAD
import { login, register , refreshAccessToken } from "../services/auth.service.js";
=======
import { login, register } from "../services/auth.service.js";
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9

const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
<<<<<<< HEAD
        const tokens = await login( email, password );
        if (!tokens) { 
            res.status(401).json({ error: 'Invalid email or password' });  return res.status(401).json({ success: false, message: "Invalid credentials" });
        }
          
        res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken: tokens.accessToken });
    } catch (error) {
        res.status(500).json({ success: false, message: "login Failed" + error.message });
=======
        const user = await login({ email, password });
        if (!user) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
    }
}

const registerController = async (req, res) => {
<<<<<<< HEAD
    const { username, email, password, fullname } = req.body;
    try {
         await register(username, email, password, fullname );
        res.status(201).json({ success: true});
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

export const refresh = (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) { 
    res.status(401).json({ error: 'Unauthorized' });
    return;
}

  try {
    const newAccessToken = refreshAccessToken(refreshToken);
    res.json({ accessToken: newAccessToken });
  } catch {
    res.status(401).json({ error: 'Invalid refresh token' });
  }
};

export const logout = (req, res) => {
  res.clearCookie('refreshToken');
  res.json({ message: 'Logged out' });
};

=======
    const { username, email, password } = req.body;
    try {
        const newUser = await register({ username, email, password });
        res.status(201).json({ success: true, data: newUser });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

>>>>>>> 79df1df67c2a94e284a832510697c36c25662ef9
export {
    loginController,
    registerController
};