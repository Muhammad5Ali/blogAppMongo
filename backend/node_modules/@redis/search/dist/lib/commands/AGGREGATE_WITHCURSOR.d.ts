import { CommandParser } from '@redis/client/dist/lib/client/parser';
import { RedisArgument, ReplyUnion, NumberReply } from '@redis/client/dist/lib/RESP/types';
import { AggregateRawReply, AggregateReply, FtAggregateOptions } from './AGGREGATE';
export interface FtAggregateWithCursorOptions extends FtAggregateOptions {
    COUNT?: number;
    MAXIDLE?: number;
}
type AggregateWithCursorRawReply = [
    result: AggregateRawReply,
    cursor: NumberReply
];
export interface AggregateWithCursorReply extends AggregateReply {
    cursor: NumberReply;
}
declare const _default: {
    readonly IS_READ_ONLY: false;
    readonly parseCommand: (this: void, parser: CommandParser, index: RedisArgument, query: RedisArgument, options?: FtAggregateWithCursorOptions) => void;
    readonly transformReply: {
        readonly 2: (reply: AggregateWithCursorRawReply) => AggregateWithCursorReply;
        readonly 3: () => ReplyUnion;
    };
    readonly unstableResp3: true;
};
export default _default;
//# sourceMappingURL=AGGREGATE_WITHCURSOR.d.ts.map