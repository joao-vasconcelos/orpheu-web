/* * */
/* * */
/* * * * * */
/* LOGGER */
/* * */

/* LOGGER OPTIONS */
const logging = true;
/* * */

function log(message, error) {
  if (logging) {
    console.log(message);
    console.error(error);
  }
}

export default {
  log
};
