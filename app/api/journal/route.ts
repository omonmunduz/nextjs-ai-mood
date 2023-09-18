import { analyze } from "@/utils/ai"
import { getUserByClerkID } from "@/utils/auth"
import { prisma } from "@/utils/db"
import { revalidatePath } from "next/cache"
import { NextRequest, NextResponse } from "next/server"

export const POST = async () => {
    const user = await getUserByClerkID()
    const entry = await prisma.journalEntry.create({
        data: {
            userId: user.id,
            content: 'Write about your day !',
        },
    })

    /*const analysis = await analyze(entry.content)
    await prisma.analysis.create({
        data: {
            entryId: entry.id,
            ...analysis, // can spread because prisma schema and zod schema have same values
        },
    })*/

    revalidatePath('/journal')

    return NextResponse.json({data: entry})
}