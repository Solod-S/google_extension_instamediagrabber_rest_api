"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const videoUrlResponse_dto_1 = require("./dto/videoUrlResponse.dto");
const instagram_service_1 = require("./instagram.service");
const instagram_entity_1 = require("./entities/instagram.entity");
const passport_1 = require("@nestjs/passport");
let InstagramController = class InstagramController {
    constructor(instagramService) {
        this.instagramService = instagramService;
    }
    async getVideoDownloadUrl(res, requestBody) {
        try {
            const result = await this.instagramService.getVideoDownloadUrl(requestBody.url);
            if (result.url.length > 0) {
                res.status(201).json(result);
            }
            else {
                res.status(404).json(result);
            }
            return result;
        }
        catch (error) {
            res.status(500).json(new videoUrlResponse_dto_1.videoUrlResponseDto({
                success: false,
                message: error.message,
                url: '',
                thumbnail: '',
            }));
        }
    }
};
exports.InstagramController = InstagramController;
__decorate([
    (0, common_1.Post)('/getvideo'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('api-key')),
    (0, swagger_1.ApiOperation)({ summary: 'Get video download URL' }),
    (0, swagger_1.ApiBody)({
        schema: { type: 'object', properties: { url: { type: 'string' } } },
        examples: {
            example1: {
                value: { url: 'https://www.instagram.com/p/C4UTTQYys58/?hl=uk' },
                description: 'Example of Instagram video post URL',
            },
        },
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.CREATED,
        description: 'Successful response with video URL',
        type: instagram_entity_1.INSTA_CREATED,
        isArray: false,
    }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.NOT_FOUND,
        description: 'Video URL not found',
        type: instagram_entity_1.INSTA_NOT_FOUND,
        isArray: false,
    }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error',
        type: instagram_entity_1.INSTA_INTERNAL_SERVER_ERROR,
    }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], InstagramController.prototype, "getVideoDownloadUrl", null);
exports.InstagramController = InstagramController = __decorate([
    (0, swagger_1.ApiTags)('Instagram'),
    (0, common_1.Controller)('instagram'),
    (0, swagger_1.ApiSecurity)('X-API-KEY', ['X-API-KEY']),
    __metadata("design:paramtypes", [instagram_service_1.InstagramService])
], InstagramController);
//# sourceMappingURL=instagram.controller.js.map