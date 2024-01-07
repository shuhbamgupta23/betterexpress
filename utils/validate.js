import Joi from "joi";
const validateRequest = (schema) => {
  return (req, res, next) => {
    const result = schema.validate(req.body);
    if (result.error) {
      return res.status(400).json({
        error: result.error.details[0].message,
      });
    }
    if (!req.value) {
      req.value = {};
    }
    req.value["body"] = result.value;
    next();
  };
};

const schema = Joi.object({
  client: Joi.string().required(),
  warehouse: Joi.string().required(),
  todate: Joi.date().iso(),
  fromdate: Joi.date().iso(),
  orderid: Joi.string().allow(null),
});

export { validateRequest, schema };
