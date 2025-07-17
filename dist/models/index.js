"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.catagory = exports.LoginModel = exports.UserModel = void 0;
require("./Register");
const Register_1 = __importDefault(require("./Register"));
exports.UserModel = Register_1.default;
const Login_1 = __importDefault(require("./Login"));
exports.LoginModel = Login_1.default;
const catagory_1 = __importDefault(require("./catagory"));
exports.catagory = catagory_1.default;
const Product_1 = __importDefault(require("./Product"));
exports.Product = Product_1.default;
//# sourceMappingURL=index.js.map