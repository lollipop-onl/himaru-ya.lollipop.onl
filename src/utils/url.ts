import { Maybe } from '~/types';

/**
 * URLのパスパラメータを置換する
 * @param originalUrl URL
 * @param pathParameters パスパラメータ
 */
export const url = (
  originalUrl: string,
  pathParameters: Record<string, Maybe<string | number>>
): string => {
  return originalUrl
    .split('/')
    .map((chunk) => {
      return chunk.replace(/^(:)(.+)/, (match, p1, p2) => {
        const parameter = pathParameters[p2];

        if (!parameter) {
          return '';
        }

        return parameter.toString() || '';
      });
    })
    .join('/');
};
