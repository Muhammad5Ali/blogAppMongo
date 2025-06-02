"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const default_1 = require("../dialect/default");
exports.default = {
    NOT_KEYED_COMMAND: true,
    IS_READ_ONLY: true,
    parseCommand(parser, index, query, options) {
        parser.push('FT.SPELLCHECK', index, query);
        if (options?.DISTANCE) {
            parser.push('DISTANCE', options.DISTANCE.toString());
        }
        if (options?.TERMS) {
            if (Array.isArray(options.TERMS)) {
                for (const term of options.TERMS) {
                    parseTerms(parser, term);
                }
            }
            else {
                parseTerms(parser, options.TERMS);
            }
        }
        if (options?.DIALECT) {
            parser.push('DIALECT', options.DIALECT.toString());
        }
        else {
            parser.push('DIALECT', default_1.DEFAULT_DIALECT);
        }
    },
    transformReply: {
        2: (rawReply) => {
            return rawReply.map(([, term, suggestions]) => ({
                term,
                suggestions: suggestions.map(([score, suggestion]) => ({
                    score: Number(score),
                    suggestion
                }))
            }));
        },
        3: undefined,
    },
    unstableResp3: true
};
function parseTerms(parser, { mode, dictionary }) {
    parser.push('TERMS', mode, dictionary);
}
//# sourceMappingURL=SPELLCHECK.js.map