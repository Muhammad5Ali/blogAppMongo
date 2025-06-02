import { CommandParser } from '@redis/client/dist/lib/client/parser';
import { RedisArgument, ReplyUnion } from '@redis/client/dist/lib/RESP/types';
import { RedisVariadicArgument } from '@redis/client/dist/lib/commands/generic-transformers';
import { RediSearchProperty, RediSearchLanguage } from './CREATE';
export type FtSearchParams = Record<string, RedisArgument | number>;
export declare function parseParamsArgument(parser: CommandParser, params?: FtSearchParams): void;
export interface FtSearchOptions {
    VERBATIM?: boolean;
    NOSTOPWORDS?: boolean;
    INKEYS?: RedisVariadicArgument;
    INFIELDS?: RedisVariadicArgument;
    RETURN?: RedisVariadicArgument;
    SUMMARIZE?: boolean | {
        FIELDS?: RediSearchProperty | Array<RediSearchProperty>;
        FRAGS?: number;
        LEN?: number;
        SEPARATOR?: RedisArgument;
    };
    HIGHLIGHT?: boolean | {
        FIELDS?: RediSearchProperty | Array<RediSearchProperty>;
        TAGS?: {
            open: RedisArgument;
            close: RedisArgument;
        };
    };
    SLOP?: number;
    TIMEOUT?: number;
    INORDER?: boolean;
    LANGUAGE?: RediSearchLanguage;
    EXPANDER?: RedisArgument;
    SCORER?: RedisArgument;
    SORTBY?: RedisArgument | {
        BY: RediSearchProperty;
        DIRECTION?: 'ASC' | 'DESC';
    };
    LIMIT?: {
        from: number | RedisArgument;
        size: number | RedisArgument;
    };
    PARAMS?: FtSearchParams;
    DIALECT?: number;
}
export declare function parseSearchOptions(parser: CommandParser, options?: FtSearchOptions): void;
declare const _default: {
    readonly NOT_KEYED_COMMAND: true;
    readonly IS_READ_ONLY: true;
    readonly parseCommand: (this: void, parser: CommandParser, index: RedisArgument, query: RedisArgument, options?: FtSearchOptions) => void;
    readonly transformReply: {
        readonly 2: (reply: SearchRawReply) => SearchReply;
        readonly 3: () => ReplyUnion;
    };
    readonly unstableResp3: true;
};
export default _default;
export type SearchRawReply = Array<any>;
interface SearchDocumentValue {
    [key: string]: string | number | null | Array<SearchDocumentValue> | SearchDocumentValue;
}
export interface SearchReply {
    total: number;
    documents: Array<{
        id: string;
        value: SearchDocumentValue;
    }>;
}
//# sourceMappingURL=SEARCH.d.ts.map