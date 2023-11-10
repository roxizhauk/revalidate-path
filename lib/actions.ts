"use server";

import { revalidatePath } from "next/cache";

export const updateRoute = async (path: string) => {
  try {
    revalidatePath(path, "page");
  } catch (e) {
    return false;
  }
  return true;
};
