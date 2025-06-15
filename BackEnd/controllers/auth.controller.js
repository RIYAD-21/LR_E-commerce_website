import { login, register , refreshAccessToken } from "../services/auth.service.js";

const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
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
    }
}

const registerController = async (req, res) => {
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

export {
    loginController,
    registerController
};