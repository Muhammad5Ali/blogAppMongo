"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SEARCH_1 = __importDefault(require("./SEARCH"));
exports.default = {
    NOT_KEYED_COMMAND: SEARCH_1.default.NOT_KEYED_COMMAND,
    IS_READ_ONLY: SEARCH_1.default.IS_READ_ONLY,
    parseCommand(...args) {
        SEARCH_1.default.parseCommand(...args);
        args[0].push('NOCONTENT');
    },
    transformReply: {
        2: (reply) => {
            return {
                total: reply[0],
                documents: reply.slice(1)
            };
        },
        3: undefined
    },
    unstableResp3: true
};
;
//# sourceMappingURL=SEARCH_NOCONTENT.js.map