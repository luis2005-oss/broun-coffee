const { verifyJWT } = require('../utils/jwtUtils');
const { getAuthToken } = require('../utils/cookieUtils');

const authMiddleware = async (req, res, next) => {
  try {
    // 1. Obtener token de la cookie
    const token = getAuthToken(req.cookies);
    
    if (!token) {
      return res.status(401).json({ message: 'No autorizado. Token no encontrado.' });
    }

    // 2. Verificar la firma del token
    const decoded = verifyJWT(token);
    
    if (!decoded) {
      return res.status(401).json({ message: 'Token inválido o expirado.' });
    }

    // 3. Guardar datos del usuario en la petición (req.user)
    // Así tus controladores (Orders, Contact) sabrán quién es el usuario.
    req.user = decoded; 
    
    next();
  } catch (error) {
    console.error('Error en authMiddleware:', error.message);
    return res.status(401).json({ message: 'Error de autenticación.' });
  }
};

module.exports = authMiddleware;
