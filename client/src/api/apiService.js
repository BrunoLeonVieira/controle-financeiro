import axios from "axios";

const API_URL = "http://localhost:3001/api/transaction";

async function getAllTransactions(referenceMonth) {
  const allTransactions = await axios.get(API_URL, {
    params: { period: referenceMonth },
  });

  allTransactions.data.sort((a, b) => {
    return a.day - b.day;
  });
  return allTransactions.data;
}

async function insertTransaction(transaction) {
  const response = await axios.post(API_URL, transaction);
  return response.data.id;
}

async function updateTrasaction(transaction) {
  const response = await axios.put(API_URL, transaction);
  return response.data;
}

async function deleteTransaction(id) {
  const response = await axios.delete(API_URL, { params: { id } });
  return response.data;
}

// async function getValidationFromGradeType(gradeType) {
//   const gradeValidation = GRADE_VALIDATION.find(
//     (item) => item.gradeType === gradeType
//   );

//   return {
//     minValue: gradeValidation.minValue,
//     maxValue: gradeValidation.maxValue,
//   };
// }
export {
  getAllTransactions,
  insertTransaction,
  updateTrasaction,
  deleteTransaction,
  // getValidationFromGradeType,
};
