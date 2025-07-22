const StreamingAccount = require('../models/StreamingAccount');

// GET /api/accounts
exports.getAllAccounts = async (req, res) => {
  const accounts = await StreamingAccount.find();
  res.json(accounts);
};

// GET /api/accounts/:id
exports.getAccountById = async (req, res) => {
  const account = await StreamingAccount.findById(req.params.id);
  if (!account) return res.status(404).json({ error: 'No encontrado' });
  res.json(account);
};

// POST /api/accounts
exports.createAccount = async (req, res) => {
  const newAccount = new StreamingAccount(req.body);
  const saved = await newAccount.save();
  res.status(201).json(saved);
};

// PUT /api/accounts/:id
exports.updateAccount = async (req, res) => {
  const updated = await StreamingAccount.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: 'No encontrado' });
  res.json(updated);
};

// DELETE /api/accounts/:id
exports.deleteAccount = async (req, res) => {
  const deleted = await StreamingAccount.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'No encontrado' });
  res.json({ message: 'Cuenta eliminada' });
};
