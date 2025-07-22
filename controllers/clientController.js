const Client = require('../models/client.js');

// GET /api/clients
exports.getClients = async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
};

// POST /api/clients
exports.createClient = async (req, res) => {
  const newClient = new Client(req.body);
  const saved = await newClient.save();
  res.status(201).json(saved);
};

// PUT /api/clients/:id
exports.updateClient = async (req, res) => {
  const updated = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updated) return res.status(404).json({ error: 'No encontrado' });
  res.json(updated);
};

// DELETE /api/clients/:id
exports.deleteClient = async (req, res) => {
  const deleted = await Client.findByIdAndDelete(req.params.id);
  if (!deleted) return res.status(404).json({ error: 'No encontrado' });
  res.json({ message: 'Cliente eliminado' });
};
