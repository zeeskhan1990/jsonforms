/*
  The MIT License
  
  Copyright (c) 2018 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
import rendererStore from './renderers.store';
import fieldStore from './fields.store';
import configStore from './config.store';
import coreStore from './core.store';
import { ErrorObject } from 'ajv';

export {
  rendererStore,
  fieldStore,
  coreStore,
  configStore
};


export const getData = coreStore.extractData
export const getSchema = coreStore.extractSchema
export const getUiSchema = coreStore.extractUiSchema

export const getErrorAt: (any) => ErrorObject[] = instancePath => {
  return coreStore.errorAt(instancePath);
};
export const getSubErrorsAt: (any) => ErrorObject[] = instancePath => {
  return coreStore.errorAt(instancePath);
};

export const getConfig = configStore.config
