import { NextRequest, NextResponse } from "next/server";
import { stateSchema } from "@/lib/utils";
import prisma from "@/db/db";
export async function POST(req: NextRequest) {
  const body = await req.json();
  const valid = stateSchema.safeParse(body);

  if (!valid.success) {
    return NextResponse.json({ message: "Invalid Data" });
  }
    const { name, state_img, placesToVisit, hiddenGems } = body;
    try {
        await prisma.state.create({
            data: {
              name,
              state_img_url: state_img,
              places: {
                create: placesToVisit,
              },
              hiddenGems: {
                create: hiddenGems,
              },
            },
        });
        //eslint-disable-next-line
    } catch (err: any) {
        console.log("Error creating new state",err?.message);
        return NextResponse.json({ success:false,message: "Error while creating new state"});
    }
  
  return NextResponse.json({ success:true,message: "successfully created new state" });
}
