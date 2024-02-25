import 'dotenv/config';
require('dotenv').config();

export const API_URL = 'https://forkify-api.herokuapp.com/api/v2/recipes';
export const TIMEOUT_SEC = 10;
export const RES_PER_PAGE = 7;
export const KEY = process.env.KEY;
export const MODAL_CLOSE_SEC = 2.5;
