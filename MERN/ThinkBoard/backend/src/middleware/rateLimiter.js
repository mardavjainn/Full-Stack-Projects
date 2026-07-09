import ratelimit from "../config/upstash.js";
const rateLimiter = async (req, res, next) => {
    const url = process.env.UPSTASH_REDIS_REST_URL;
    if (!url || url.includes("credible-grub-27258") || url.includes("placeholder")) {
        return next();
    }
    try {
        const { success } = await ratelimit.limit("my-limit-key");
        if (!success) {
            return res.status(429).json({ message: "Too Many Requests, Please try again later" });
        }
        next();
    } catch (error) {
        console.log("Rate Limit Error (failing open):", error.message || error);
        next();
    }
};
export default rateLimiter;