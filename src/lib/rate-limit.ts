import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

let rateLimiter: Ratelimit | null = null;

function getRateLimiter(): Ratelimit | null {
  if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
    return null;
  }
  if (!rateLimiter) {
    rateLimiter = new Ratelimit({
      redis: new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      }),
      limiter: Ratelimit.slidingWindow(5, "15 m"),
      prefix: "lead-submit",
    });
  }
  return rateLimiter;
}

export async function checkRateLimit(ip: string): Promise<{ allowed: boolean }> {
  const limiter = getRateLimiter();
  if (!limiter) return { allowed: true };
  const { success } = await limiter.limit(ip);
  return { allowed: success };
}
