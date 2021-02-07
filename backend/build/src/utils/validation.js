"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validation = void 0;
exports.validation = (input) => {
    let errors = [];
    for (const key in input) {
        if (input[key] !== false && !input[key]) {
            errors.push({
                key,
                value: input[key],
            });
        }
    }
    return {
        isValid: errors.length === 0,
        errors,
    };
};
//# sourceMappingURL=validation.js.map