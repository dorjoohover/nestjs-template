import { Global, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "schema";
import appConfig from "src/config/app.config";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Global()
@Module({
    imports: [JwtModule.register({
        secretOrPrivateKey: appConfig().appSecret, signOptions: {expiresIn: 60 * 60 * 24}
    }), MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
    controllers: [UserController],
    providers: [UserService],
    exports: [UserService]
})

export class UserModule {}