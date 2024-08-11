import { PrismaClient } from "@prisma/client"

//declare global valuable
declare global {
    //type is PrismaClient or undefined
    var prisma: PrismaClient | undefined
}
// client create instance
const client = globalThis.prisma || new PrismaClient()
//single-ton setting => to prevent multiple database connections
if(process.env.NODE_ENV  !== 'production') globalThis.prisma = client

export default client;