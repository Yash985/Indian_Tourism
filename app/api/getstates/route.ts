import prisma from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
    let allStates = [];
    try {
        allStates = await prisma.state.findMany({})
        // allStates = await prisma.state.findMany({
        //     select: {
        //         name: true,
        //         state_img_url: true,
        //         places: {
        //             select: {
        //                 title: true,
        //                 badge:true
        //              }
        //          },
        //      }
        //  })
        //eslint-disable-next-line
    } catch (err:any) {
        console.log("Error fetching states", err?.message); 
       return NextResponse.json({ success: false, message: "Error while fetching states" }, { status: 400 });
    }
    return NextResponse.json({ success: true, message: "successfully fetched states",data:allStates},{status:200});

}