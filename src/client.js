import * as contentful from "contentful";

export const client = contentful.createClient({
  space: "9mvsopbnzi8q",
  accessToken: "DOl_gSZxI7qxhZCQvcFgmopcQg1VlSz5I-EpTLMXQzI",

  // space: process.env.REACT_APP_SPACE_ID,
  // accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
