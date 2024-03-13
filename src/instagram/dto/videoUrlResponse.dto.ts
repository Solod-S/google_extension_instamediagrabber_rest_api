import {
  ApiProperty,
  // ApiPropertyOptional,
} from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class videoUrlResponseDto {
  @ApiProperty({ type: 'boolean' })
  success: boolean;
  @ApiProperty({ type: 'string' })
  message: string;
  @ApiProperty({ type: 'string' })
  url: string;
  @ApiProperty({ type: 'string' })
  thumbnail: string;

  constructor({ success, message, url, thumbnail }: videoUrlResponseDto) {
    this.success = success;
    this.message = message;
    this.url = url;
    this.thumbnail = thumbnail;
  }
}
