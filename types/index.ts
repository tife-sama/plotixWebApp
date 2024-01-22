// Create User
export type CreateUserParams = {
    clerkId: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    photo: string;
    role: 'user' | 'coach';
    aboutMe?: string;
    needHelpWith?: string[];
    location?: string;
    interestedIn: string[];
    coachDetails?: {
        rate: number;
        headline: string;
        introductionVideo?: string;
        focusAreas: string[];
        faq?: {
            question: string;
            answer: string;
        }[];
        portfolioItems?: {
            name: string;
            link: string;
            img: string;
        }[];
        WorkExperiences?: {
            company: string;
            role: string;
            startDate: Date;
            endDate?: Date;
        }[];
        plans?: {
            title: string;
            sessions: string;
            img: string;
            cost: string;
            details: string;
            createdAt: Date;
        }[];
        specilisations?: string[];
    };
};

// Update User
export type UpdateUserParams = {
    userId: string;
    updates: {
        firstName?: string;
        lastName?: string;
        username?: string;
        photo?: string;
        aboutMe?: string;
        location?: string;
    };
};

// Get User by ID
export type GetUserByIdParams = {
    userId: string;
};

// Get Users
export type GetUsersParams = {
    query: string;
    limit: number;
    page: number;
};

// Delete User
export type DeleteUserParams = {
    userId: string;
    requestingUserId: string; // ID of the user making the request
};

// User DTO (Data Transfer Object)
export type UserDTO = {
    _id: string;
    clerkId: string;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    photo: string;
    role: 'user' | 'coach';
    aboutMe?: string;
    needHelpWith?: string[];
    location?: string;
    interestedIn: string[];
    coachDetails?: {
        rate: number;
        headline: string;
        introductionVideo?: string;
        focusAreas: string[];
        faq?: {
            question: string;
            answer: string;
        }[];
        portfolioItems?: {
            name: string;
            link: string;
            img: string;
        }[];
        WorkExperiences?: {
            company: string;
            role: string;
            startDate: Date;
            endDate?: Date;
        }[];
        plans?: {
            title: string;
            sessions: string;
            img: string;
            cost: string;
            details: string;
            createdAt: Date;
        }[];
        specilisations?: string[];
    };
};
