import Bytez from "bytez.js";

const key = process.env.BYTEZ_API;
const sdk = new Bytez(key);

export default sdk;
