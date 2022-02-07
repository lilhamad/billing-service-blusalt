import transactionService from "../services/transactionService";

class transactionController {
  
  static async fundAccount(req, res) {
    try {
      const request = await transactionService.fundAccount(req.body);
      if (request.status) {
        console.log("Request sent");
      } else {
        console.log("Error sending request -", request.message);
      }
    } catch (error) {
      console.log("Error sending request " + error);
    }
  }
}


export default transactionController;
