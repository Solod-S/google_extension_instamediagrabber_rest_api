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
Object.defineProperty(exports, "__esModule", { value: true });
exports.INSTA_INTERNAL_SERVER_ERROR = exports.INSTA_NOT_FOUND = exports.INSTA_CREATED = void 0;
const swagger_1 = require("@nestjs/swagger");
class INSTA_CREATED {
    constructor(success, message = '', url = '', thumbnail = '') {
        this.success = success;
        this.message = message;
        this.url = url;
        this.thumbnail = thumbnail;
    }
}
exports.INSTA_CREATED = INSTA_CREATED;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success status',
        nullable: false,
        default: true,
    }),
    __metadata("design:type", Boolean)
], INSTA_CREATED.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Response message',
        nullable: false,
        default: 'Successful request',
    }),
    __metadata("design:type", String)
], INSTA_CREATED.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Intagram video url',
        nullable: false,
        default: 'https://d.rapidcdn.app/d?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1N...',
    }),
    __metadata("design:type", String)
], INSTA_CREATED.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Intagram thumbnail url',
        nullable: false,
        default: 'https://snapinsta.app/photo.php?photo=https%...',
    }),
    __metadata("design:type", String)
], INSTA_CREATED.prototype, "thumbnail", void 0);
class INSTA_NOT_FOUND {
    constructor(success, message = '', url = '', thumbnail = '') {
        this.success = success;
        this.message = message;
        this.url = url;
        this.thumbnail = thumbnail;
    }
}
exports.INSTA_NOT_FOUND = INSTA_NOT_FOUND;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success status',
        nullable: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], INSTA_NOT_FOUND.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Response message',
        nullable: false,
        default: 'The specified post does not contain a media',
    }),
    __metadata("design:type", String)
], INSTA_NOT_FOUND.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Intagram video url',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], INSTA_NOT_FOUND.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Intagram thumbnail url',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], INSTA_NOT_FOUND.prototype, "thumbnail", void 0);
class INSTA_INTERNAL_SERVER_ERROR {
    constructor(success, message = '', url = '', thumbnail = '') {
        this.success = success;
        this.message = message;
        this.url = url;
        this.thumbnail = thumbnail;
    }
}
exports.INSTA_INTERNAL_SERVER_ERROR = INSTA_INTERNAL_SERVER_ERROR;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Success status',
        nullable: false,
        default: false,
    }),
    __metadata("design:type", Boolean)
], INSTA_INTERNAL_SERVER_ERROR.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Response message',
        nullable: false,
        default: 'Internal server error',
    }),
    __metadata("design:type", String)
], INSTA_INTERNAL_SERVER_ERROR.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Intagram video url',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], INSTA_INTERNAL_SERVER_ERROR.prototype, "url", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Intagram thumbnail url',
        nullable: false,
        default: '',
    }),
    __metadata("design:type", String)
], INSTA_INTERNAL_SERVER_ERROR.prototype, "thumbnail", void 0);
//# sourceMappingURL=instagram.entity.js.map