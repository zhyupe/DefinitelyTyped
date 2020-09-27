import Parameter = require('parameter');

// Constructor
new Parameter();
new Parameter({});
new Parameter({
    translate(message, ...args) {
        return 'string';
    },
    validateRoot: true,
    convert: true,
    widelyUndefined: true,
});
new Parameter({
    validateRoot: false,
    convert: false,
    widelyUndefined: false,
});

// Instance
const parameter = new Parameter();

// #addRule
parameter.addRule('typeA', /test/);
parameter.addRule('typeB', (rule, value) => {
    let string: string = rule.type;

    if (value) {
        return 'string';
        return [
            {
                code: 'string',
                message: 'string',
            },
            {
                code: 'string',
                message: 'string',
                field: 'string',
            },
        ];
        return [];
    }
});
parameter.addRule<{ test: string }, 'typeC'>('typeC', (rule, value) => {
    let typeC: 'typeC' = rule.type;
    let string: string = rule.test;
});
parameter.addRule('typeD', /test/, true);
parameter.addRule('typeD', /test/, true, 'int');
parameter.addRule('typeD', /test/, true, 'number');
parameter.addRule('typeD', /test/, true, 'string');
parameter.addRule('typeD', /test/, true, 'bool');
parameter.addRule('typeD', /test/, true, 'boolean');
parameter.addRule('typeD', /test/, true, value => value);

// #validate
parameter.validate({}, null);
parameter.validate(
    {
        abbr_int: 'int',
        abbr_int_optional: 'int?',
        abbr_integer: 'integer',
        abbr_integer_optional: 'integer?',
        abbr_number: 'number',
        abbr_number_optional: 'number?',
        abbr_date: 'date',
        abbr_date_optional: 'date?',
        abbr_dateTime: 'dateTime',
        abbr_dateTime_optional: 'dateTime?',
        abbr_datetime: 'datetime',
        abbr_datetime_optional: 'datetime?',
        abbr_id: 'id',
        abbr_id_optional: 'id?',
        abbr_boolean: 'boolean',
        abbr_boolean_optional: 'boolean?',
        abbr_bool: 'bool',
        abbr_bool_optional: 'bool?',
        abbr_string: 'string',
        abbr_string_optional: 'string?',
        abbr_email: 'email',
        abbr_email_optional: 'email?',
        abbr_password: 'password',
        abbr_password_optional: 'password?',
        abbr_object: 'object',
        abbr_object_optional: 'object?',
        abbr_array: 'array',
        abbr_array_optional: 'array?',
        abbr_enum: ['', 0, null, undefined],
        abbr_regex: /test/,
        rule_any_string: {
            type: 'any_string',
        },
        rule_base_1: {
            type: 'any_string',
            required: false,
            convertType: 'int',
            default: 0,
            widelyUndefined: false,
        },
        rule_base_2: {
            type: 'any_string',
            required: true,
            convertType: 'bool',
            default: '',
            widelyUndefined: true,
        },
        rule_base_3: {
            type: 'any_string',
            convertType: 'boolean',
        },
        rule_base_4: {
            type: 'any_string',
            convertType: 'number',
        },
        rule_base_5: {
            type: 'any_string',
            convertType: 'string',
        },
        rule_int: {
            type: 'int',
        },
        rule_int_optional: {
            type: 'int?',
        },
        rule_integer: {
            type: 'integer',
        },
        rule_integer_optional: {
            type: 'integer?',
        },
        rule_number: {
            type: 'number',
        },
        rule_number_optional: {
            type: 'number?',
        },
        rule_number_param: {
            type: 'number',
            max: 10,
            min: 10,
        } as Parameter.ParameterRuleNumber,
        rule_string: {
            type: 'string',
        },
        rule_string_optional: {
            type: 'string?',
        },
        rule_string_param: {
            type: 'string',
            max: 10,
            min: 10,
            allowEmpty: true,
            empty: true,
            format: /test/,
            trim: true,
        } as Parameter.ParameterRuleString,
        rule_id: {
            type: 'id',
        },
        rule_id_optional: {
            type: 'id?',
        },
        rule_id_param: {
            type: 'id',
            allowEmpty: true,
        } as Parameter.ParameterRuleID,
        rule_date: {
            type: 'date',
        },
        rule_date_optional: {
            type: 'date?',
        },
        rule_date_param: {
            type: 'date',
            message: 'string',
            allowEmpty: true,
        } as Parameter.ParameterRuleDateTime,
        rule_dateTime: {
            type: 'dateTime',
        },
        rule_dateTime_optional: {
            type: 'dateTime?',
        },
        rule_datetime: {
            type: 'datetime',
        },
        rule_datetime_optional: {
            type: 'datetime?',
        },
        rule_boolean: {
            type: 'boolean',
        },
        rule_boolean_optional: {
            type: 'boolean?',
        },
        rule_bool: {
            type: 'bool',
        },
        rule_bool_optional: {
            type: 'bool?',
        },
        rule_array: {
            type: 'array',
        },
        rule_array_optional: {
            type: 'array?',
        },
        rule_array_param: {
            type: 'array',
            itemType: 'string',
            rule: { test: 'string' },
            min: 10,
            max: 10,
        } as Parameter.ParameterRuleArray,
        rule_object: {
            type: 'object',
        },
        rule_object_optional: {
            type: 'object?',
        },
        rule_object_param: {
            type: 'object',
            rule: { test: 'string' },
        } as Parameter.ParameterRuleObject,
        rule_enum: {
            type: 'enum',
        },
        rule_enum_optional: {
            type: 'enum?',
        },
        rule_enum_param: {
            type: 'enum',
            values: [0, '', null],
        } as Parameter.ParameterRuleEnum,
        rule_email: {
            type: 'email',
        },
        rule_email_optional: {
            type: 'email?',
        },
        rule_email_param: {
            type: 'email',
            message: 'string',
            allowEmpty: true,
        } as Parameter.ParameterRuleEmail,
        rule_password: {
            type: 'password',
        },
        rule_password_optional: {
            type: 'password?',
        },
        rule_password_param: {
            type: 'password',
            compare: 'string',
            max: 10,
            min: 10,
            allowEmpty: true,
            empty: true,
            trim: true,
        } as Parameter.ParameterRulePassword,
        rule_url: {
            type: 'url',
        },
        rule_url_optional: {
            type: 'url?',
        },
        rule_url_param: {
            type: 'url',
        } as Parameter.ParameterRuleUrl,
    },
    {},
);

// Error
let errorA: Parameter.ValidateError = {
    code: 'string',
    message: 'string',
};

let errorB: Parameter.ValidateError = {
    code: 'string',
    field: 'string',
    message: 'string',
};
