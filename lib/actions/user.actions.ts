"use server"

import { CreateUserParams, UpdateUserParams } from "@/types"
import { handleError } from "../utils"
import { connectToDatabase } from "@/lib/database"
import User from "../database/models/user.model"

export const createUser = async (user: CreateUserParams) => {
    try {
        await connectToDatabase();

        const newUser = await User.create(user);

        return JSON.parse(JSON.stringify(newUser));
    } catch (error){
        handleError(error)
    }

    
}
export async function getUserById(userId: string) {
    try {
      await connectToDatabase();
  
      const user = await User.findById(userId)
  
      if (!user) throw new Error('User not found')
      return JSON.parse(JSON.stringify(user))
    } catch (error) {
      handleError(error)
    }
  }
  
  export async function updateUser(clerkId: string, user: UpdateUserParams) {
    try {
      await connectToDatabase()
  
      const updatedUser = await User.findOneAndUpdate({ clerkId }, user, { new: true })
  
      if (!updatedUser) throw new Error('User update failed')
      return JSON.parse(JSON.stringify(updatedUser))
    } catch (error) {
      handleError(error)
    }
  }

  export async function deleteUser(clerkId: string) {
    try {
      await connectToDatabase();
  
      // Find user to delete
      const userToDelete = await User.findOneAndDelete({ clerkId });
  
      if (!userToDelete) {
        throw new Error('User not found');
      }
  
      return userToDelete.toObject(); // Convert to plain JavaScript object if needed
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error; // Propagate the error
    }
  }

  