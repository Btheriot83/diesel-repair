// src/config/keywords.merge-phoenix.ts
// Usage: import { KEYWORDS } from "./keywords";
// import { KEYWORDS_PHOENIX } from "./keywords.phoenix.gen";
// export const KEYWORDS_MERGED = { ...KEYWORDS, phoenix: KEYWORDS_PHOENIX };
import { KEYWORDS } from "./keywords";
import { KEYWORDS_PHOENIX } from "./keywords.phoenix.gen";
export const KEYWORDS_MERGED = { ...KEYWORDS, phoenix: KEYWORDS_PHOENIX };
