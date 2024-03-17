"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const packageJson = require("../package.json");
require("@nestjs/config");
const config_1 = require("@nestjs/config");
const logger_middleware_1 = require("./middleware/system/logger.middleware");
const corsMiddleware_middleware_1 = require("./middleware/system/corsMiddleware.middleware");
config_1.ConfigModule.forRoot();
const PORT = process.env.PORT || 1212;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(new logger_middleware_1.LoggerMiddleware().use);
    app.use(new corsMiddleware_middleware_1.CorsMiddleware().use);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('InstaMediaGraber API')
        .setDescription('The API is designed to retrieve links for downloading Instagram photos and videos.')
        .setVersion(packageJson.version)
        .addApiKey({
        type: 'apiKey',
        name: 'X-API-KEY',
        in: 'header',
        description: 'Enter your API key',
    }, 'X-API-KEY')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(PORT);
}
bootstrap().then(() => common_1.Logger.log(`APP IS STARTED AT http://localhost:${PORT}/`));
//# sourceMappingURL=main.js.map