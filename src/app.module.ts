import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import appConfig from './config/app.config';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [appConfig],
  }),

  MongooseModule.forRoot(appConfig().dbUrl, {
    // useNewUrlParser: true,
    // // useUnifiedTopology: true,
    
    dbName: appConfig().dbName,
  }),],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
