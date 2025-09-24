import { RateLimiterPrisma, RateLimiterRes } from "rate-limiter-flexible";
import { prisma } from "./db";
import { auth } from "@clerk/nextjs/server";

const FREE_POINTS = 10;
const DURATION = 7 * 24 * 60 * 60;
const GENERATION_COST = 1;

type UsageSnapshot = ReturnType<RateLimiterRes["toJSON"]>;

const INITIAL_USAGE: UsageSnapshot = {
  remainingPoints: FREE_POINTS,
  consumedPoints: 0,
  msBeforeNext: 0,
  isFirstInDuration: true,
};

export async function getUsageTracker() {
  const usageTracker = new RateLimiterPrisma({
    storeClient: prisma,
    tableName: "Usage",
    points: FREE_POINTS,
    duration: DURATION,
  });

  return usageTracker;
};

export async function consumeCredits() {
  const { userId } = await auth();

  if(!userId) {
    throw new Error("User not authenticated");
  }

  const usageTracker = await getUsageTracker();
  const result = await usageTracker.consume(userId, GENERATION_COST);
  return result;
};

export async function getUsageStatus() {
  const { userId } = await auth();
  if(!userId) {
    throw new Error("User not authenticated");
  }

  const usageTracker = await getUsageTracker();
  const result = await usageTracker.get(userId);

  if (!result) {
    return { ...INITIAL_USAGE };
  }

  return result.toJSON();
}
