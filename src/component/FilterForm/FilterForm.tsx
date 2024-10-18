import React, { useState } from "react";
import "./FilterForm.scss";

interface FilterFormProps {
  onFilter: (filterCriteria: FormValues) => void;
  onClose?: () => void;
}

interface FormValues {
  organization: string;
  username: string;
  email: string;
  date: string;
  phoneNumber: string;
  status: string;
}

const initialFormValues: FormValues = {
  organization: "",
  username: "",
  email: "",
  date: "",
  phoneNumber: "",
  status: "",
};

const FilterForm: React.FC<FilterFormProps> = ({ onFilter, onClose }) => {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = (): void => {
    setFormValues(initialFormValues);
    onFilter(initialFormValues);
  };

  const handleFilter = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    onFilter(formValues);
    onClose?.();
  };

  return (
    <div className="filter-form-container">
      <form className="filter-form" onSubmit={handleFilter}>
        <div className="form-group">
          <label htmlFor="organization">Organization</label>
          <select
            id="organization"
            name="organization"
            value={formValues.organization}
            onChange={handleInputChange}
            className="form-input"
          >
            <option value="">Select</option>
            <option value="Lendsqr">Lendsqr</option>
            <option value="Lendstar">Lendstar</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text"
            value={formValues.username}
            onChange={handleInputChange}
            placeholder="User"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            name="date"
            type="date"
            value={formValues.date}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            value={formValues.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <select
            id="status"
            name="status"
            value={formValues.status}
            onChange={handleInputChange}
            className="form-input"
          >
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
        </div>

        <div className="form-buttons">
          <button type="button" className="reset-button" onClick={handleReset}>
            Reset
          </button>
          <button type="submit" className="filter-button">
            Filter
          </button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
