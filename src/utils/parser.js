/* * */
/* * */
/* * * * * */
/* PARSER */
/* * */

function parseDataForMultipart(data, keysForFiles, keysToDelete) {
  // Create new data structure for "multipart/form-data"
  const multipartFormData = new FormData();

  // 1) Delete selected keys
  if (keysToDelete)
    for (let i = 0; i < keysToDelete.length; i++) {
      const key = keysToDelete[i];
      delete data[key];
    }

  // 2) Append keys related to files
  if (keysForFiles)
    for (let i = 0; i < keysForFiles.length; i++) {
      const key = keysForFiles[i];
      multipartFormData.append(key, data[key]);
      delete data[key];
    }

  // 3) Append the remaining content
  multipartFormData.append("content", JSON.stringify(data));

  return multipartFormData;
}

export default {
  parseDataForMultipart
};
