import slugify from 'slugify';

export const generateSlug = (title: string): string =>
  slugify(title, { lower: true }) +
  '-' +
  ((Math.random() * Math.pow(36, 6)) | 0).toString(36);
