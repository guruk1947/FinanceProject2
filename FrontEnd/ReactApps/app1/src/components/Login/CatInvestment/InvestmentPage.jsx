import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Dropdown, DropdownButton, Card } from 'react-bootstrap';

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
      await axios.post('http://localhost:8080/api', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Investment added successfully!');
      // Clear the form or handle the response accordingly
    } catch (error) {
      console.error('Error adding investment:', error);
      alert('Failed to add investment.');
    }
  };

  return (
    <Container style={styles.container}>
      <Card style={styles.card}>
        <Card.Body>
          <DropdownButton
            id="dropdown-basic-button"
            title={selectedCategory || 'Select Category'}
            onSelect={handleCategorySelect}
            variant="primary"
            style={styles.dropdown}
          >
            {CATEGORIES.map((category) => (
              <Dropdown.Item key={category} eventKey={category}>
                {category}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          {selectedCategory && (
            <Form onSubmit={handleSubmit} style={styles.form}>
              <Form.Group controlId="formCategory">
                
                
              </Form.Group>
              <Form.Group controlId="formIssuer">
                <Form.Label>Issuer(Company/Bank Name)</Form.Label>
                <Form.Control
                  type="text"
                  name="issuer"
                  value={formData.issuer}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formQuantity">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formUnitCost">
                <Form.Label>Unit Cost</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  name="unitCost"
                  value={formData.unitCost}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formInvestmentDate">
                <Form.Label>Investment Date</Form.Label>
                <Form.Control
                  type="date"
                  name="investmentDate"
                  value={formData.investmentDate}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMaturityDate">
                <Form.Label>Maturity Date</Form.Label>
                <Form.Control
                  type="date"
                  name="maturityDate"
                  value={formData.maturityDate}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formMaturityUnitPrice">
                <Form.Label>Maturity Unit Price</Form.Label>
                <Form.Control
                  type="number"
                  step="0.01"
                  name="maturityUnitPrice"
                  value={formData.maturityUnitPrice}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#e9ecef'
  },
  card: {
    width: '100%',
    maxWidth: '600px',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  dropdown: {
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  }
};

export default InvestmentPage;
