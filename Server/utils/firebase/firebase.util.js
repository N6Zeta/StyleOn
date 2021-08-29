const { OAuth2Client } = require("google-auth-library");
const { GOOGLE_CLIENT_ID } = require("../../keys/googleClientId");
const { TOKEN_NOT_VALID, TOKEN_NOT_SUPPLIED } = require("../../constants/constant");

/*
    @checkToken middleware  - Used to check the validity for Id token
    If Token is valid the execution moves to next() 
    If token is not valid or not passed notify the client with proper status code.
*/

let idToken =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6IjZlZjRiZDkwODU5MWY2OTdhOGE5Yjg5M2IwM2U2YTc3ZWIwNGU1MWYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiODA5MTc5ODY5NzkwLTY0OWkzMXMzbTBqcGgyNmc0NmFwbWFkZDNhNWo0NjFqLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiODA5MTc5ODY5NzkwLTY0OWkzMXMzbTBqcGgyNmc0NmFwbWFkZDNhNWo0NjFqLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE1MTM0MDE1NjEzODk4OTgyMTUyIiwiZW1haWwiOiJ2YXJ1bnByYWJoYWthcmFuMjJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiI2WkZtcEhRUG1hM2E4YnRWejMzZDRnIiwiaWF0IjoxNjI5OTE3OTAyLCJleHAiOjE2Mjk5MjE1MDJ9.jdaa1nTwIhTuHknx7ctEtiT-G2sv6SowRFzd4wM5YmxvAZHiXEk7gyIPh4QMjY1FB8HnalORrgfcIb81obpxr-1ol2OYb09_vVNVNeAt1vUU29kkN4w6NiLgZJjbsLf0y8N0XTsNz7lOV4ebKae2ETwKNvbeLPHDruv_Q0EOQOBnW9WzV1Pm5-AOD5fMEzazvmIAhNgMq6MfCIuz_jSSu0iB1kN8rU9zmt8g4dKcA9fDwyd1RgUXLUkm38DsKzeBf9adv4QSYbChbq_IcwxXOWB3eKK_vcB76L1RASCSAHgRYBqqKnIpGKeL4lPw4DscFincAZFg-_QHpq2RAp07MQ";

const checkToken = async (idtoken, next) => {
    const client = new OAuth2Client(GOOGLE_CLIENT_ID);

    if (idToken === undefined || idToken === null) {
        return res.status(401).send({
            success: false,
            message: TOKEN_NOT_SUPPLIED,
        });
    } else {
        try {
            const ticket = await client.verifyIdToken({
                idToken: idToken,
                audience: GOOGLE_CLIENT_ID,
            });
            const payload = ticket.getPayload();
            let currentdate = Math.floor(Date.now() / 1000);
            if (payload.aud === GOOGLE_CLIENT_ID) next();
        } catch (err) {
            console.log(error);
            return res.status(403).json({
                success: false,
                message: TOKEN_NOT_VALID,
            });
        }
    }
};

module.exports = { checkToken };
