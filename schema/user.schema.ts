import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";


export type UserDocument = Document & User

@Schema({timestamps: true})
export class User  {


}

export const UserSchema = SchemaFactory.createForClass(User)