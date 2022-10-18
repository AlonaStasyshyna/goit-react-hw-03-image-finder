import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form className="form" onSubmit={onSubmit}>
        <button className="button" type="submit">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          name="q"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
