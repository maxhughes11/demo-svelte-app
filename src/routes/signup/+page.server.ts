import prisma from "$lib/prisma";
import type { User_role } from "@prisma/client";
import type { Actions } from "./$types";


export const load = {
    default: async ({request}) => {
        const data = await request.formData();

        let email = data.get("email") as string;
        let name = data.get("name") as string;
        let contact = data.get("contact") as string;
        let password = data.get("password") as string;
        let role = data.get("role") as User_role;

        await prisma.user.create({
            data: {
                email: email,
                name: name,
                contactNumber: contact,
                password: password,
                role: role,
                permissionLevel: "New user",
            },
    })

    }
} satisfies Actions