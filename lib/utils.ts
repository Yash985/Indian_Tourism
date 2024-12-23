import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import * as zod from "zod"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const stateSchema = zod.object({
  name: zod.string(),
  state_img: zod.string(),
  placesToVisit: zod.array(zod.object({
    title: zod.string(),
    desc: zod.string(),
    img_url: zod.string(),
    badge: zod.string(),
  })),
  hiddenGems: zod.array(zod.object({
    title: zod.string(),
    brief_desc: zod.string(),
    desc: zod.string().optional(),
    img_url: zod.string(),
  })).optional(),
})

export type stateSchemaType = zod.infer<typeof stateSchema>