
import z from "zod";

// mongoose.Types.ObjectId.isValid('1233')

//* get all

//* get by id

//* create
export const createCategoryValidator = z.object({
  body: z.object({
    name: z.string().min(3, "at least 3 characters required").trim(),
    description: z.string().min(10, "at least 10 characters required").trim(),
  }),
  //   params: z.object().default({}),
  //   query: z.object().default({}),
});

//*update

//* delete