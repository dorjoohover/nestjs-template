import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { User, UserDocument } from "schema";
@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}
    async validateUser(payload: string) {
        return await this.model.findOne()
    }
}