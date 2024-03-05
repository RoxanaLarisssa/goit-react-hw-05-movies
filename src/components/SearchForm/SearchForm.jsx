import { useState } from 'react';
import { Div, Form } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <Div>
      <Form onSubmit={handleSubmit}>
        <label className="form-label">
          <input
            onChange={handleChange}
            aria-label="select"
            type="text"
            required
            autoFocus
            autoComplete="off"
            placeholder="Enter your search term"
            value={value}
            className="form-control"
          />
        </label>
        <button className="btn btn-primary mb-3" type="submit">
          Search
        </button>
      </Form>
    </Div>
  );
};
