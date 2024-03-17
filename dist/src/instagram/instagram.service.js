"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramService = void 0;
const common_1 = require("@nestjs/common");
const videoUrlResponse_dto_1 = require("./dto/videoUrlResponse.dto");
const nayan_media_downloader_1 = require("nayan-media-downloader");
let InstagramService = class InstagramService {
    async getVideoDownloadUrl(url) {
        try {
            let data = null;
            const response = await (0, nayan_media_downloader_1.ndown)(url);
            if (response.status &&
                response.data[0].thumbnail &&
                response.data[0].url) {
                data = new videoUrlResponse_dto_1.videoUrlResponseDto({
                    success: true,
                    message: 'Successful request',
                    url: response.data[0].url,
                    thumbnail: response.data[0].thumbnail,
                });
            }
            else {
                data = new videoUrlResponse_dto_1.videoUrlResponseDto({
                    success: false,
                    message: 'The specified post does not contain a media',
                    url: '',
                    thumbnail: '',
                });
            }
            return data;
        }
        catch (error) {
            throw error;
        }
    }
};
exports.InstagramService = InstagramService;
exports.InstagramService = InstagramService = __decorate([
    (0, common_1.Injectable)()
], InstagramService);
//# sourceMappingURL=instagram.service.js.map