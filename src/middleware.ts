// src/middleware.ts — add noindex on Vercel preview deployments
import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (context, next) => {
  const response = await next();

  // Vercel sets process.env.VERCEL_ENV = 'production' | 'preview' | 'development'
  const env = process?.env?.VERCEL_ENV || 'development';
  const isPreview = env == 'preview';

  if (isPreview) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
  }

  return response;
};
