import React from 'react';
import './AddOwn.css'; // We'll create this CSS file next

function AddOwn() {
  return (
    <section className="add-own-section">
      <div className="container add-own-card">
        <div className="d-flex align-items-center mb-3">
          <i className="bi bi-plus-circle-fill add-icon me-3"></i>
          <h2 className="add-title m-0">Add your own</h2>
        </div>
        <p className="add-description mb-4">
          Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should
          be on hobbycue? Go ahead and Add your Own page
        </p>
        <button className="btn btn-add-new">Add new</button>
      </div>
    </section>
  );
}

export default AddOwn;