const router = require("express").Router();
const db = require("../../config/connection");
const { Expenses } = require("../../models");

// /api/users
router.get("/", (req, res) => {
  // console.log('button hit');

  try {
    res.render("expenseForm", {});
    // const query = db.query('SELECT * FROM Expenses');
    //where, userName = '${userName}' AND userEmail = '${userEmail}';

    console.log("/api/user-routes was hit");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const transaction = await Expenses.create({
      expense_name: req.expense_name,
      date: req.date,
      category: req.category,
      pay_to: req.pay_to,
      payment_amount: req.body.payment_amount,
      user_id: req.session.user_id,
    });
    res.json(transaction);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
