import { Document, Schema, Model, models, model } from "mongoose";

interface IUser extends Document {
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
    interestedIn: string[]; // Fix the type here
    coachDetails?: {
        coachId: string;
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
        purchasedSessions?: {
            orderId: string;
            totalAmount: string;
            eventTitle: string;
            SessionDate: Date;
        }
        availability:{
            dayOfWeek: Number;
            startTime: String;
            endTime:   String;
        }
    };
}

const UserSchema = new Schema({
    clerkId: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    username: {type: String, required: true, unique: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    photo: {type: String, required: true},
    role: { type: String, enum: ['user', 'coach'], default: 'user' },
    aboutMe: { type: String },
    needHelpWith: [{ type: String }],
    location: { type: String }, // Keep location as a string
    interestedIn: [{ type: String}],
    coachDetails: {
        coachId: {type: String, required: true, unique: true},
        rate: { type: Number, required: true },
        headline: { type: String, required: true },
        introductionVideo: { type: String, required: false },
        focusAreas: [{ type: String, required: true }],
        faq: [{
            question: { type: String },
            answer: { type: String },
        }],
        portfolioItems: [{
            name: { type: String },
            link: { type: String },
            img: { type: String },
        }],
        WorkExperiences: [{
            company: { type: String },
            role: { type: String },
            StartDate: { type: Date },
            endDate: { type: Date, default: 'Present' },
        }],
        plans: [{
            title: { type: String },
            sessions: { type: String },
            img: { type: String },
            cost: { type: String },
            details: { type: String },
            createdAt: {type: Date, default: Date.now}
        }],
        specilisations: [{type: String}],
        purchasedSessions: [
            {
              orderId: { type: Schema.Types.ObjectId, ref: 'Order' },
              totalAmount: { type: String },
              eventTitle: { type: String },
              SessionDate: {type: Date},
            }
        ],
        availability:{
            dayOfWeek: {type: Number}, // e.g 0 for sunday, 1 for Monday
            startTime: {type: String}, //e.g 09.00 am
            endTime:   {type: String}, // e.g 05:00pm
        }
    
    }
});

const User: Model<IUser> = models.User || model<IUser>('User', UserSchema);

export default User;
