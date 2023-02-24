import { Module } from "@nestjs/common/decorators";
import { AppController } from "./app.controller";

@Module({
    controllers: [AppController]
})
export class AppModule {}