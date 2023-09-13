import { auth } from "@clerk/nextjs";
import { prisma } from "./db";
                                    // opts = {}
export const getUserByClerkID = async () => {
    const {userId} = await auth();

    const user = await prisma.user.findUniqueOrThrow({
        where: {
            clerkId: userId,
        },
        //select: opts.select || {},
        //includes: opts.includes || {},
    })

    return user;
}