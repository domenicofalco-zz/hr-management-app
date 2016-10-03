function uploadJson(json) {
  return {
    type: 'UPLOAD_JSON',
    payload: {
      jsonEmployees: json
    }
  }
}

function uploadJsonError(msg) {
  return {
    type: 'UPLOAD_JSON_ERROR',
    payload: {
      errorMsg: msg
    }
  }
}

const actionUploadJson = (json) => uploadJson(json);
const actionUploadJsonError = (msg) => uploadJsonError(msg);

export { actionUploadJson, actionUploadJsonError };
