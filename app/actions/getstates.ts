"use server"
import prisma from "@/db/db";

export async function getStates() { 
    const states = prisma.state.findMany({
        select: {
            name: true,
            state_img_url: true
        }
    })
    return states;
}