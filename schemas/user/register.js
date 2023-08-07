import joi from "joi";

const userRegister = joi.object({
    email: joi.string()
        .required()
        .email({
            minDomainSegments: 2,
        })
        .messages({
            "string.email": "This mail is not valid, please insert a valid mail",
            "string.empty": "A mail is required"
        }),
    password: joi.string()
        .required()
        .min(6)
        .max(20)
        .messages({
            "string.min": "Your password must have a minimum of 8 characters",
            "string.max": "Your password must have a maximum of 20 characters",
            "string.empty": "Please, insert a password"
        }),
    photo: joi.string()
        .required()
        .uri()
        .messages({
          'any.required': 'Photo is required',
          'string.empty': 'Photo is required',
          'string.uri': 'Invalid photo URL',
        }),
    location: joi.string()
        .required()
        .messages({
          'any.required': 'Location is required',
          'string.empty': 'Location is required',
        }),
        
});

export default userRegister;