import React, { useState } from 'react';
import Axios_request from '../../Axios_request';

const CATEGORIES = [
  'Stocks/ETF/Mutual funds',
  'Term deposit',
  'Gold',
  'Bond',
  'Others'
];

const InvestmentPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [customCategory, setCustomCategory] = useState('');
  const [formData, setFormData] = useState({
    category: '',
    issuer: '',
    quantity: '',
    unitCost: '',
    investmentDate: '',
    maturityDate: '',
    maturityUnitPrice: '',
    description: ''
  });

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCustomCategory('');
    setFormData({ ...formData, category });
  };

  const handleCustomCategoryChange = (e) => {
    setCustomCategory(e.target.value);
    setFormData({ ...formData, category: e.target.value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios_request("post",
        "/investments",
        formData
      );
      alert('Investment added successfully!');
      setFormData({
        category: '',
        issuer: '',
        quantity: '',
        unitCost: '',
        investmentDate: '',
        maturityDate: '',
        maturityUnitPrice: '',
        description: ''
      });
    } catch (error) {
      //console.error('Error adding investment:', error);
      alert('Failed to add investment.');
    }
  };
  

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card" style={{ maxWidth: '600px', width: '100%' }}>
        <div className="card-body">
          <div className="dropdown mb-3">
            <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
              {selectedCategory || 'Select Category'}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {CATEGORIES.map((category) => (
                <li key={category}>
                  <a className="dropdown-item" href="#" onClick={() => handleCategorySelect(category)}>
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {selectedCategory && (
            <form onSubmit={handleSubmit} className="d-flex flex-column">
              <div className="mb-3">
                <label htmlFor="issuer" className="form-label">Issuer (Company/Bank Name)</label>
                <input
                  type="text"
                  className="form-control"
                  id="issuer"
                  name="issuer"
                  value={formData.issuer}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="quantity" className="form-label">Quantity</label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="unitCost" className="form-label">Unit Cost</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="unitCost"
                  name="unitCost"
                  value={formData.unitCost}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="investmentDate" className="form-label">Investment Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="investmentDate"
                  name="investmentDate"
                  value={formData.investmentDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="maturityDate" className="form-label">Maturity(FD)/Current(Stocks,etc) Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="maturityDate"
                  name="maturityDate"
                  value={formData.maturityDate}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="maturityUnitPrice" className="form-label">Maturity Unit Price</label>
                <input
                  type="number"
                  step="0.01"
                  className="form-control"
                  id="maturityUnitPrice"
                  name="maturityUnitPrice"
                  value={formData.maturityUnitPrice}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default InvestmentPage;
