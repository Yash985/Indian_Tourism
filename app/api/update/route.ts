import prisma from "@/db/db";
import { stateSchema } from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  const body = await req.json();
  const valid = stateSchema.safeParse(body);

  if (!valid.success) {
    return NextResponse.json({ message: "Invalid Data" });
  }
  const { name, state_img, placesToVisit, hiddenGems } = body;
  try {
    await prisma.state.update({
      where: {
        name: name,
      },
      data: {
        state_img_url: state_img,
        places: {
          deleteMany: {},
          create: placesToVisit,
        },
        hiddenGems: {
          deleteMany: {},
          create: hiddenGems,
        },
      },
    });
    //eslint-disable-next-line
  } catch (err: any) {
    console.log("Error creating new state", err?.message);
    return NextResponse.json({
      success: false,
      message: "Error while updating state",
    });
  }

  return NextResponse.json({
    success: true,
    message: "successfully updated state",
  });
}
