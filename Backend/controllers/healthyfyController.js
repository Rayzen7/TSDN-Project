import Healthyfy from "../models/healthyfyModel.js";

export const getHealthyfy = async (req, res) => {
  try {
    const data = await Healthyfy.findAll();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getHealthyfyById = async (req, res) => {
  try {
    const data = await Healthyfy.findByPk(req.params.id);
    if (!data) return res.status(404).json({ message: "Data not found" });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createHealthyfy = async (req, res) => {
  try {
    const { title, description, link, image } = req.body;
    const newData = await Healthyfy.create({ title, description, link, image });
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteHealthyfy = async (req, res) => {
    try {
      const id = req.params.id;
      const deleted = await Healthyfy.destroy({ where: { id } });
  
      if (!deleted) {
        return res.status(404).json({ message: "Data not found" });
      }
      res.json({ message: "Data deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };