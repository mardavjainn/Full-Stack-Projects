// import ratelimit from "../config/upstash.js";
// const rateLimiter = async (req, res, next) => {
//     try {
//         const { success } = await ratelimit.limit("my-limit-key");
//         if (!success) {
//             return res.status(429).json({ message: "Too Many Requests, Please try again later" });
//         }
//         next();
//     } catch (error) {
//         console.log("Rate Limit Error", error);
//         next(error);
//     }
// };
// export default rateLimiter;
import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const { success } = await ratelimit.limit("my-limit-key");
        if (!success) {
            return res.status(429).json({ message: "Too Many Requests, Please try again later" });
        }
        next();
    } catch (error) {
        // Log the error so you know Redis is down
        console.log("Rate Limit Error (Redis unreachable):", error.message);
        
        // IMPORTANT: Call next() WITHOUT 'error' so the API keeps working
        next(); 
    }
};

export default rateLimiter;