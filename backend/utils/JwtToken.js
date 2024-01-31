// this method will take user Data, status code, and res => Then create Token and save it in a cookie and send

const sendJWtToken = (user, statusCode, res) => {
    try {
        if (!user || !user.getJWTToken) {
            throw new Error("Invalid user data");
        }

        const token = user.getJWTToken(); // every user has access to all userModel methods

        // Options for the cookie
        const options = {
            httpOnly: true,
        };

        // Wrapping all data into the cookie, e.g., token and options data
        res.status(statusCode).cookie("token", token, options).json({
            success: true,
            user,
            token,
        });
    } catch (error) {
        console.error("Error in sendJWtToken:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};

module.exports = sendJWtToken;

