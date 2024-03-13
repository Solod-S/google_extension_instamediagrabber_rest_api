import { Injectable } from '@nestjs/common';
import { videoUrlResponseDto } from './dto/videoUrlResponse.dto';
import { ndown } from 'nayan-media-downloader';

@Injectable()
export class InstagramService {
  async getVideoDownloadUrl(url: string) {
    try {
      let data = null;
      const response = await ndown(url);
      if (
        response.status &&
        response.data[0].thumbnail &&
        response.data[0].url
      ) {
        data = new videoUrlResponseDto({
          success: true,
          message: 'Successful request',
          url: response.data[0].url,
          thumbnail: response.data[0].thumbnail,
        });
      } else {
        data = new videoUrlResponseDto({
          success: false,
          message: 'The specified post does not contain a media',
          url: '',
          thumbnail: '',
        });
      }
      return data;
    } catch (error) {
      throw error;
    }
  }
}
