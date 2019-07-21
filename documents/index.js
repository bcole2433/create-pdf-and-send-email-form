module.exports = ({
  email,
  personCompleting,
  accountName,
  address,
  customerEmail,
  walkthroughDate,
  startDate,
  franchiseeEmail,
}) => {
  const today = new Date();

  return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>${accountName} Start Form PDF</title>
       </head>
       <body>
          <div>
             <table>
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Date: ${`${today.getMonth() +
                                 1}-${today.getDate()}-${today.getFullYear()}`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr>
                   <td>
                      <ul style="list-style-type:none;">
                        <li><b>Person Completing: </b> ${personCompleting} </li>
                        <li><b>Email: </b> ${email} </li>
                        <br />
                        <li><b>Account Name: </b> ${accountName}</li>
                        <li>Address: </b> ${address}</li>
                        <li><b>Customer Email: </b> ${customerEmail}</li>
                        <li><b>Franchisee Email: </b> ${franchiseeEmail}</li>
                        <br />
                        <li><b>Walkthrough Date: </b> ${walkthroughDate}</li>
                        <li><b>Start Date: </b> ${startDate}</li>
                      <br />
                   </td>
                </tr>
             </table>
          </div>
       </body>
    </html>
    `;
};
