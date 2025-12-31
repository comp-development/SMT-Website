export const actions = {
  /*
  * Input: request.formData() : {firstName : "xxx", lastName: "xxx", email: "xxx", grade: "xxx"}
  * Action: Adds user to mailing list in useSend
  */
  subscribe: async ({ request }) => {
    const formData = await request.formData();
    const contactBookId = "cmiu0u2c2018npi3gh7mtmcb3";
    const authorization_token = import.meta.env.VITE_USESEND_AUTH;
    const payload = {
      "email": formData.get("email"),
      "firstName": formData.get("firstName"),
      "lastName": formData.get("lastName"),
      "properties": {"grade" : formData.get("grade")},
    };
    

    fetch(
       `https://app.usesend.com/api/v1/contactBooks/${contactBookId}/contacts`, {
         headers: {
           Authorization: `Bearer: ${authorization_token}`,
           "Content-Type": "application/json"
         },
         body: JSON.stringify(payload),
         method: 'post',
       },
     );
    return {success: true};
  }
}
