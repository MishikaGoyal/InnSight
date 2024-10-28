interface hotel {
    hotelId: string;
    name: string;
    location: string;
    contactEmail: string;
    contactPhone: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface roomType {
    roomTypeId: string;
    hotelId: string;
    name: string;
    description?: string;
    basePrice: number;
    currentPrice: number;
    amenities: string[];
    totalRooms: number;
    createdAt?: Date;
}

interface room {
    roomId: string;
    roomTypeId: string;
    roomNumber: string;
    createdAt?: Date;
}

interface guest {
    guestId: string;
    hotelId: string;
    name: string;
    age?: number;
    location?: string;
    email: string;
    phone?: string;
}

interface booking {
    bookingId: string;
    hotelId: string;
    roomId: string;
    guestId: string;
    date: Date;
    price: number;
    roomTypeId: string;
    createdAt?: Date;
    updatedAt?: Date;
}

interface campaignPlatform {
    platformId: string;
    name: string;
}

interface campaign {
    campaignId: string;
    hotelId: string;
    platformId: string;
    targetSegmentId?: string;
    startDate: Date;
    endDate: Date;
    budget: number;
    clickRate?: number;
    conversionRate?: number;
    contentText: string;
    contentImage: string;
}

interface occupancy {
    occupancyId: string;
    hotelId: string;
    roomTypeId: string;
    date: Date;
    totalAvailable: number;
    totalBooked: number;
}

interface revenueOptimization {
    optimizationId: string;
    hotelId: string;
    roomTypeId: string;
    date: Date;
    basePrice: number;
    bookingPrice: number;
}

interface feedback {
    feedbackId: string;
    hotelId: string;
    roomTypeId: string;
    guestId: string;
    rating: number;
    comments?: string;
    photos?: string[];
    createdAt?: Date;
}

interface dynamicPricingHistory {
    pricingId: string;
    hotelId: string;
    roomTypeId: string;
    date: Date;
    recommendedPrice: number;
    reason?: string;
    createdAt?: Date;
}

export { hotel, roomType, room, guest, booking, campaignPlatform, campaign, occupancy, revenueOptimization, feedback, dynamicPricingHistory };