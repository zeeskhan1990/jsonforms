"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uischema_registry_1 = require("./core/uischema.registry");
const renderer_service_1 = require("./core/renderer.service");
const styling_registry_1 = require("./core/styling.registry");
const schema_service_impl_1 = require("./core/schema.service.impl");
/**
 * Global JSONForms object that holds services and registries.
 */
class JsonForms {
}
JsonForms.rendererService = new renderer_service_1.RendererService();
JsonForms.jsonFormsServices = [];
JsonForms.uischemaRegistry = new uischema_registry_1.UISchemaRegistryImpl();
JsonForms.stylingRegistry = new styling_registry_1.StylingRegistryImpl();
exports.JsonForms = JsonForms;
/**
 * Annotation for registering a class as JSONForms service.
 * @param config
 * @constructor
 */
// Disable rule because it is used as an decorator
// tslint:disable:variable-name
exports.JsonFormsServiceElement = config => (cls) => {
    JsonForms.jsonFormsServices.push(cls);
};
// tslint:enable:variable-name
exports.instantiateSchemaService = (schema) => {
    JsonForms.schemaService = new schema_service_impl_1.SchemaServiceImpl(schema);
};
//# sourceMappingURL=core.js.map