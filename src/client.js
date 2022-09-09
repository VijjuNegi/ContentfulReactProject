import * as contentful from "contentful";

export const client = contentful.createClient({
  space: "9mvsopbnzi8q",
  accessToken: "yVSyiq3LSZL0bpuuGNKzxkKx8mj4VhnckZXf6YXPlOs",

  // space: process.env.REACT_APP_SPACE_ID,
  // accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
