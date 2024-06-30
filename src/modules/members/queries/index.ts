import { GetCurrentMemberHandler } from './get-current-member';
import { GetListContactHandler } from './get-list-contact';
import { GetMemberHandler } from './get-member';
import { GetStatsHandler } from './get-stats';

export * from './get-current-member';
export * from './get-list-contact';
export * from './get-member';
export * from './get-stats';

export const QueryHandlers = [
  GetMemberHandler,
  GetCurrentMemberHandler,
  GetListContactHandler,
  GetStatsHandler,
];
