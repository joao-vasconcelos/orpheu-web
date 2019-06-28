/* * */
/* * */
/* * * * * */
/* VALIDATION */
/* * */

/* * */
/* IMPORTS */
import Joi from "joi-browser";
/* * */

/* VALIDATION OPTIONS */
const options = { abortEarly: false };
/* * */

/*
 * func: VALIDATE
 * Validates data based on defined schema.
 *
 * If no errors are found return null,
 * else return the first error.
 */
function validateData(data, schema) {
  const { error } = Joi.validate(data, schema, options);

  if (!error) return null;

  const validationErrors = {};
  for (let item of error.details) {
    validationErrors[item.path[0]] = item.message;
  }
  return validationErrors;
}

/*
 * func: VALIDATE PROPERTY
 * Validates input's data against provided schema.
 *
 * Return validation errors, if found.
 */
function validateInput({ name, value }, schema) {
  const obj = { [name]: value };
  const subSchema = { [name]: schema[name] };
  const { error } = Joi.validate(obj, subSchema);
  return error ? error.details[0].message : null;
}

export default {
  validateData,
  validateInput
};
