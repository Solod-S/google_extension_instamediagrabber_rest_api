import { videoUrlResponseDto } from './dto/videoUrlResponse.dto';
import { InstagramService } from './instagram.service';
import { Response } from 'express';
export declare class InstagramController {
    private readonly instagramService;
    constructor(instagramService: InstagramService);
    getVideoDownloadUrl(res: Response, requestBody: {
        url: string;
    }): Promise<videoUrlResponseDto>;
}
