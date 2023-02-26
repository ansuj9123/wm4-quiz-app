import { Pool } from "pg";

import config from "./utils/config";
import logger from "./utils/logger";

const pool = new Pool({

};

export const disconnectDb = () => pool.end();

/**
 * Access this with `import db from "path/to/db";` then use it with
 * `await db.query("<SQL>", [...<variables>])`.
 */
export default 

