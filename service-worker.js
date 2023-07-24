var requestFilter = {urls: ["<all_urls>"]};
var extraInfoSpec = ['extraHeaders','requestBody']; 

chrome.webRequest.onBeforeRequest.addListener(handler, requestFilter, extraInfoSpec);
async function modifyRequestBody(details) {
  return new Promise((resolve) => {
    // Modify the requestBody asynchronously (e.g., await API call)
    setTimeout(() => {
      if (details.requestBody && details.requestBody.formData) {
        // Modify the payload by adding a custom parameter
        console.log("Body",details.requestBody)
        console.log("Username",details.requestBody.formData.login)
        details.requestBody.formData.login = ['sdfsafsdf']
      }
      resolve();
    }, 1000); // Simulate an asynchronous operation with a 1-second delay
  });
}