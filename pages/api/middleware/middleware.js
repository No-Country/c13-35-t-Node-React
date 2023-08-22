import jwt from "jsonwebtoken";

const SECRET_KEY = "yourSuperSecretKey";

const withAuth = (handler) => (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Por favor ingresa para continuar" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;

    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ error: "Token inválido o expirado" });
  }
};

export default withAuth;
