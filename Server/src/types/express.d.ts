import type { IJwtPayload } from "../utlis/jwt.utils";

declare module "express-serve-static-core" {
  interface Request {
    user: IJwtPayload;
  }
}
