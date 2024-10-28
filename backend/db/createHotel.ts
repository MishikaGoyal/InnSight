import { PrismaClient } from "@prisma/client";
import { hotel } from "../interfaces/db";

const prisma = new PrismaClient();

async function createHotel(hotel: hotel){
    try{
        const Hotel = await prisma.hotel.create({
            data: hotel
        });
        
    }
    catch(e){
        console.error(e);
    }
}

export default createHotel;