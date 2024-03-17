import { ConfigService } from '@nestjs/config';
import Strategy from 'passport-headerapikey';
declare const ApiKeyStrategy_base: new (...args: any[]) => Strategy;
export declare class ApiKeyStrategy extends ApiKeyStrategy_base {
    private readonly _configService;
    constructor(_configService: ConfigService);
    validate: (incomingApiKey: string, done: (error: Error, data: any) => Record<string, unknown>) => void;
}
export {};
