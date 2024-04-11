"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
app.get("/", (request, response) => {
    response.status(200).send("Hello World");
});
app.get("/request-list", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios_1.default.get("https://zalexinc.azure-api.net/request-list?subscription-key=43b647491f1d436cb0130a329fcdca50"); // replace with your API endpoint
        response.status(200).send(result.data);
    }
    catch (error) {
        response
            .status(500)
            .send("Something went wrong while fetching request-list");
    }
}));
app.get("/request-list", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios_1.default.get("https://zalexinc.azure-api.net/request-list?subscription-key=43b647491f1d436cb0130a329fcdca50"); // replace with your API endpoint
        response.status(200).send(result.data);
    }
    catch (error) {
        response
            .status(500)
            .send("Something went wrong while fetching request-list");
    }
}));
app.post("/request-cert", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address_to, purpose, issued_on, employee_id } = request.body;
        if (!address_to || !purpose || !issued_on || !employee_id) {
            response.status(400).send("Missing required fields");
            return;
        }
        const postData = { address_to, purpose, issued_on, employee_id };
        const result = yield axios_1.default.post("https://zalexinc.azure-api.net/request-certificate?subscription-key=43b647491f1d436cb0130a329fcdca50", postData); // replace with your API endpoint
        response.status(200).send(result.data);
    }
    catch (error) {
        console.log(error);
        response
            .status(500)
            .send("Something went wrong while fetching request-cert");
    }
}));
app
    .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
})
    .on("error", (error) => {
    // gracefully handle error
    throw new Error(error.message);
});
