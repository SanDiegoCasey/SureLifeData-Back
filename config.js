'use strict';
exports.DATABASE_URL =
  process.env.DATABASE_URL ||
  global.DATABASE_URL ||
  'mongodb://standarduser:thinkful1@ds255364.mlab.com:55364/surelifedata';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET || 'fffff';
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';
