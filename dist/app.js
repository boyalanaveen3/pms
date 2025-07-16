"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const index_1 = __importDefault(require("./routes/index"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
const mongoURL = process.env.MONGODB_URL;
if (!mongoURL) {
    console.log("mongourl not have in env");
    process.exit(1);
}
// MongoDB connection
mongoose_1.default.connect(mongoURL)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB error:", err));
app.use("/api", index_1.default);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=app.js.map