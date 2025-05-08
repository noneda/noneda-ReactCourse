import { createClient } from "contentful";
import ENV from "../Env";
const client = createClient(ENV);

export default client;
