////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import dotenv from "dotenv";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

dotenv.config();

const config = {
	port: process.env.PORT,
	secret_key: process.env.SECRET_KEY
};

export default config;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////