import bcryptjs from "bcryptjs";

export const hash = (password: string): string => bcryptjs.hashSync(password);
export const compare = (password: string, hash: string): boolean =>
  bcryptjs.compareSync(password, hash);