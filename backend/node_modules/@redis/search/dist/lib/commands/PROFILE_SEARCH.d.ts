import { CommandParser } from '@redis/client/dist/lib/client/parser';
import { ArrayReply, RedisArgument, ReplyUnion, TuplesReply } from '@redis/client/dist/lib/RESP/types';
import { AggregateReply } from './AGGREGATE';
import { FtSearchOptions, SearchRawReply, SearchReply } from './SEARCH';
export type ProfileRawReplyResp2<T> = TuplesReply<[
    T,
    ArrayReply<ReplyUnion>
]>;
export interface ProfileReplyResp2 {
    results: SearchReply | AggregateReply;
    profile: ReplyUnion;
}
export interface ProfileOptions {
    LIMITED?: true;
}
declare const _default: {
    readonly NOT_KEYED_COMMAND: true;
    readonly IS_READ_ONLY: true;
    readonly parseCommand: (this: void, parser: CommandParser, index: RedisArgument, query: RedisArgument, options?: ProfileOptions & FtSearchOptions) => void;
    readonly transformReply: {
        readonly 2: (reply: [SearchRawReply, ArrayReply<ReplyUnion>]) => ProfileReplyResp2;
        readonly 3: (reply: ReplyUnion) => ReplyUnion;
    };
    readonly unstableResp3: true;
};
export default _default;
//# sourceMappingURL=PROFILE_SEARCH.d.ts.map