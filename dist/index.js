"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const console_1 = require("console");
const provider_1 = __importDefault(require("./router/provider"));
const app = (0, express_1.default)();
const port = 5432;
const router = express_1.default.Router();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api', (0, provider_1.default)(router));
app.listen(port, () => (0, console_1.log)(`SERVER STARTED, PORTAL ADDRESS http://localhost:${port}`));
