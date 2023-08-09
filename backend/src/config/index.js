import {config} from 'dotenv'

const {parsed} = config();
console.log('parsed', parsed)
export const {PORT} = parsed;


