import { ApiProperty } from '@nestjs/swagger';

export class INSTA_CREATED {
  @ApiProperty({
    description: 'Success status',
    nullable: false,
    default: true,
  })
  success: boolean;
  @ApiProperty({
    description: 'Response message',
    nullable: false,
    default: 'Successful request',
  })
  message: string;
  @ApiProperty({
    description: 'Intagram video url',
    nullable: false,
    default:
      'https://d.rapidcdn.app/d?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1N...',
  })
  url: string;
  @ApiProperty({
    description: 'Intagram thumbnail url',
    nullable: false,
    default: 'https://snapinsta.app/photo.php?photo=https%...',
  })
  thumbnail: string;

  constructor(
    success: boolean,
    message: string = '',
    url: string = '',
    thumbnail: string = '',
  ) {
    this.success = success;
    this.message = message;
    this.url = url;
    this.thumbnail = thumbnail;
  }
}

export class INSTA_NOT_FOUND {
  @ApiProperty({
    description: 'Success status',
    nullable: false,
    default: false,
  })
  success: boolean;
  @ApiProperty({
    description: 'Response message',
    nullable: false,
    default: 'The specified post does not contain a media',
  })
  message: string;
  @ApiProperty({
    description: 'Intagram video url',
    nullable: false,
    default: '',
  })
  url: string;
  @ApiProperty({
    description: 'Intagram thumbnail url',
    nullable: false,
    default: '',
  })
  thumbnail: string;

  constructor(
    success: boolean,
    message: string = '',
    url: string = '',
    thumbnail: string = '',
  ) {
    this.success = success;
    this.message = message;
    this.url = url;
    this.thumbnail = thumbnail;
  }
}

export class INSTA_INTERNAL_SERVER_ERROR {
  @ApiProperty({
    description: 'Success status',
    nullable: false,
    default: false,
  })
  success: boolean;
  @ApiProperty({
    description: 'Response message',
    nullable: false,
    default: 'Internal server error',
  })
  message: string;
  @ApiProperty({
    description: 'Intagram video url',
    nullable: false,
    default: '',
  })
  url: string;
  @ApiProperty({
    description: 'Intagram thumbnail url',
    nullable: false,
    default: '',
  })
  thumbnail: string;

  constructor(
    success: boolean,
    message: string = '',
    url: string = '',
    thumbnail: string = '',
  ) {
    this.success = success;
    this.message = message;
    this.url = url;
    this.thumbnail = thumbnail;
  }
}
