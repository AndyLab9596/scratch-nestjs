import { Controller, Get } from "@nestjs/common/decorators";

@Controller('/app')
export class AppController {
    @Get('/get-route')
    getRootRoute() {
        return "hi there!";
    }

    @Get('/bye')
    getByeThere() {
        return 'bye there!';
    }
}