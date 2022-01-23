import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[a-zA-ZА-яїЇіІ]{1,20}$')).required().messages({'string.empty':'"model" не може бути пустим',
    'string.pattern.base': 'Тільки букви, мін 1 та макс 20'}),
    price:Joi.number().min(0).max(1000000).required().messages({
        'number.base':'Ціна можу бути від 1 до  1000000',
        'number.min':'Price must be bigger than 0'
    }),
    year:Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'number.base':'Рік має бути 1900 до теперішнього'
    })

})