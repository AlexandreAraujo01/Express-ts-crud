import { Request, Response, NextFunction } from 'express';
import { ZodType } from 'zod';

function zodMiddlewareValidator<T>(schema: ZodType<T>, property: 'body' | 'params') {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = req[property];
    const result = schema.safeParse(data);

    if (!result.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: result.error,
      });
    }

    req[property] = result.data;

    next();
  };
}

export default zodMiddlewareValidator;
