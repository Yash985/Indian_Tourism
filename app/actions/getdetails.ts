"use server"
import prisma from "@/db/db";

export async function getdetails(state: string) { 
    const states = prisma.state.findUnique({
        where: {
            name: state
        },
        select: {
            places: {
                select: {
                    title: true,
                    desc: true,
                    badge: true,
                    img_url: true
                }
            },
            hiddenGems: {
                select: {
                    title: true,
                    brief_desc: true,
                    desc: true,
                    img_url: true
                }
            }
        }
    } )
    return states;
}