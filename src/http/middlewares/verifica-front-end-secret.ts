import { Request, Response, NextFunction } from 'express';

const FRONTEND_SECRET = 'express-token-secret-only-access-thru-front-end';

export function verifyFrontendSecret(req: Request, res: Response, next: NextFunction) {
  const headerSecret = req.headers['x-frontend-secret'];

  if (headerSecret === FRONTEND_SECRET) {
    return next();
  }

  return res.status(403).json({ error: 'Acesso negado: origem não autorizada.' });
}
