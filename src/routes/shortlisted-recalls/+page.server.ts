import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
    const result = await prisma.recall.findMany({
        where: {shortlisted: true},
        include: {User: false}
    })

    return {feed: result};
    
}) satisfies PageServerLoad