// @ts-ignore
import * as util from 'util';
// @ts-ignore
if (!util.isNullOrUndefined) {
  // @ts-ignore
  util.isNullOrUndefined = (value: any): value is null | undefined => value === null || value === undefined;
}
// @ts-ignore
if (!util.isObject) {
  // @ts-ignore
  util.isObject = (value: any): value is object => value !== null && typeof value === 'object';
}
// @ts-ignore
if (!util.isString) {
  // @ts-ignore
  util.isString = (value: any): value is string => typeof value === 'string';
}
// @ts-ignore
if (!util.isFunction) {
  // @ts-ignore
  util.isFunction = (value: any): value is Function => typeof value === 'function';
}
// @ts-ignore
if (!util.isUndefined) {
  // @ts-ignore
  util.isUndefined = (value: any): value is undefined => value === undefined;
}
// @ts-ignore
if (!util.isNumber) {
  // @ts-ignore
  util.isNumber = (value: any): value is number => typeof value === 'number';
}
// @ts-ignore
if (!util.isBoolean) {
  // @ts-ignore
  util.isBoolean = (value: any): value is boolean => typeof value === 'boolean';
}

import { Reflector, NestFactory } from '@nestjs/core';
import * as compression from 'compression';
import { AppModule } from 'modules/app';
import * as helmet from 'helmet';
import { HttpExceptionFilter, QueryFailedFilter } from 'filters';
import * as RateLimit from 'express-rate-limit';
import * as morgan from 'morgan';
import { setupSwagger } from 'utils';
import {
  initializeTransactionalContext,
  patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import {
  ExpressAdapter,
  NestExpressApplication,
} from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';

async function bootstrap(): Promise<void> {
  initializeTransactionalContext();
  patchTypeORMRepositoryWithBaseRepository();

  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
    new ExpressAdapter(),
    { cors: true },
  );

  app.enable('trust proxy');
  app.use(helmet());
  app.use(RateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));
  app.use(compression());
  app.use(morgan('combined'));
  app.setGlobalPrefix('bank');

  const reflector = app.get(Reflector);

  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
  app.useGlobalFilters(
    new HttpExceptionFilter(reflector),
    new QueryFailedFilter(reflector),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      dismissDefaultMessages: true,
      validationError: { target: false },
    }),
  );

  setupSwagger(app);

  const configService = app.get(ConfigService);
  await app.listen(configService.get('PORT'));
}

void bootstrap();
