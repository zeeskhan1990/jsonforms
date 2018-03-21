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
import { RankedTester } from '../testers';
import { JsonSchema, UISchemaElement } from '../';
import { generateDefaultUISchema, generateJsonSchema } from '../generators';
import {rendererStore, fieldStore, coreStore, configStore} from '../reducers/index.store';

export const init = (
  data: any,
  schema: JsonSchema = generateJsonSchema(data),
  uischema: UISchemaElement = generateDefaultUISchema(schema)
) =>  coreStore.initialize(data, schema, uischema)

export const update =
  (path: string, updater: (any) => any) =>  coreStore.updateData(path, updater)

export const registerRenderer = (
  tester: RankedTester,
  renderer: any
) =>  rendererStore.addRenderer(tester, renderer)

export const registerField = (
  tester: RankedTester,
  field: any
) => fieldStore.addField(tester, field)

export const unregisterField = (
  tester: RankedTester
) => fieldStore.removeField(tester)

export const unregisterRenderer = (
  tester: RankedTester
) => rendererStore.removeRenderer(tester)

export const setConfig = config => configStore.setConfiguration(config)