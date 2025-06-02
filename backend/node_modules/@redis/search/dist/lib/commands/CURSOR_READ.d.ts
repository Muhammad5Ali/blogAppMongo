import { CommandParser } from '@redis/client/dist/lib/client/parser';
import { RedisArgument, NumberReply, UnwrapReply } from '@redis/client/dist/lib/RESP/types';
export interface FtCursorReadOptions {
    COUNT?: number;
}
declare const _default: {
    readonly NOT_KEYED_COMMAND: true;
    readonly IS_READ_ONLY: true;
    readonly parseCommand: (this: void, parser: CommandParser, index: RedisArgument, cursor: UnwrapReply<NumberReply>, options?: FtCursorReadOptions) => void;
    readonly transformReply: {
        readonly 2: (reply: [result: [total: UnwrapReply<NumberReply<number>>, ...results: import("@redis/client/dist/lib/RESP/types").ArrayReply<import("@redis/client/dist/lib/RESP/types").BlobStringReply<string>>[]], cursor: NumberReply<number>]) => import("./AGGREGATE_WITHCURSOR").AggregateWithCursorReply;
        readonly 3: () => import("@redis/client/dist/lib/RESP/types").ReplyUnion;
    };
    readonly unstableResp3: true;
};
export default _default;
//# sourceMappingURL=CURSOR_READ.d.ts.map