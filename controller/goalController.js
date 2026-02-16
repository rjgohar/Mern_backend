// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoal = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};
// @desc Set goals
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
  res.status(200).json({ message: "add goals" });
};
// @desc Update goals
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: "update goals" });
};
// @desc Delete goals
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: "delete goals" });
};
module.exports = {
  getGoal,
  setGoal,
  updateGoal,
  deleteGoal,
};
