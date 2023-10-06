"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const console_1 = require("console");
const provider_1 = __importDefault(require("./router/provider"));
const dbSet_1 = __importDefault(require("./utils/dbSet"));
const config_1 = __importDefault(require("config"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
const port = config_1.default.get("dev_port");
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, dbSet_1.default)(config_1.default.get("db_url"));
app.use('/api', (0, provider_1.default)());
app.listen(port, () => (0, console_1.log)(`SERVER STARTED, PORTAL ADDRESS http://localhost:${port}`));
