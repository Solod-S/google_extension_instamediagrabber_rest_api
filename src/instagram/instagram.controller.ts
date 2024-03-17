import {
  Controller,
  Post,
  Body,
  Res,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiResponse,
  ApiBody,
  ApiOperation,
  ApiSecurity,
} from '@nestjs/swagger';
import { videoUrlResponseDto } from './dto/videoUrlResponse.dto';
import { InstagramService } from './instagram.service';
import {
  INSTA_CREATED,
  INSTA_NOT_FOUND,
  INSTA_INTERNAL_SERVER_ERROR,
} from './entities/instagram.entity';
import { Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Instagram')
@Controller('instagram')
@ApiSecurity('X-API-KEY', ['X-API-KEY']) // <----- Авторизация через Swagger
export class InstagramController {
  constructor(private readonly instagramService: InstagramService) {}

  @Post('/getvideo')
  @UseGuards(AuthGuard('api-key')) // <---- Вернет 401 (unauthorized)
  @ApiOperation({ summary: 'Get video download URL' })
  @ApiBody({
    schema: { type: 'object', properties: { url: { type: 'string' } } },
    examples: {
      example1: {
        value: { url: 'https://www.instagram.com/p/C4UTTQYys58/?hl=uk' },
        description: 'Example of Instagram video post URL',
      },
    },
  })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Successful response with video URL',
    type: INSTA_CREATED,
    isArray: false,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Video URL not found',
    type: INSTA_NOT_FOUND,
    isArray: false,
    // content: {
    //   'application/json': {
    //     schema: {
    //       type: 'object',
    //       properties: {
    //         success: { type: 'boolean', example: false },
    //         message: {
    //           type: 'string',
    //           example: 'The specified post does not contain a media',
    //         },
    //         url: { type: 'string', example: '' },
    //         thumbnail: { type: 'string', example: '' },
    //       },
    //     },
    //   },
    // },
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
    type: INSTA_INTERNAL_SERVER_ERROR,
  })
  async getVideoDownloadUrl(
    @Res() res: Response,
    @Body() requestBody: { url: string },
  ): Promise<videoUrlResponseDto> {
    try {
      const result = await this.instagramService.getVideoDownloadUrl(
        requestBody.url,
      );
      if (result.url.length > 0) {
        res.status(201).json(result);
      } else {
        res.status(404).json(result);
      }
      return result;
    } catch (error) {
      res.status(500).json(
        new videoUrlResponseDto({
          success: false,
          message: error.message,
          url: '',
          thumbnail: '',
        }),
      );
    }
  }
}
