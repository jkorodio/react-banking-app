import React from "react";

const FormApply = () => {
  return (
    <div clasName="form-content-right">
      <form className="form">
        <h1>
          Open your bank account with us today! Open an account by filling out
          the information below.
        </h1>
        <div className="form-inputs">
          <label className="form-label">First Name</label>
          <input
            type="text"
            name="firstName"
            className="form-input"
            placeholder="Kieth"
            required
          />
          <label className="form-label">Middle Name</label>
          <input
            type="text"
            name="middleName"
            className="form-input"
            placeholder="Yanson"
            required
          />
          <label className="form-label">Last Name</label>
          <input
            type="text"
            name="lastName"
            classname="form-input"
            placeholder="Orodio"
            required
          />
          <label className="form-label">Suffix</label>
          <input
            type="text"
            name="suffix"
            className="form-input"
            placeholder="Jr"
          />
          <label className="form-label">Email Address</label>
          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="hello@bankofetivac.com"
            required
          />
          <label className="form-label">Landline No.</label>
          <input
            type="tel"
            name="landline"
            className="form-input"
            placeholder="Optional"
          />
          <label className="form-label">Phone No.</label>
          <input
            type="tel"
            name="phone"
            className="form-input"
            placeholder="09123456789"
            maxlength="11"
          />
          <label className="form-label">Gender</label>
          <button>Male</button>
          <button>Female</button>
          <label className="form-label">Civil Status</label>
          <select id="civilstatus" className="form-input">
            <option label="Please select...">Please select...</option>
            <option label="Singe">Single</option>
            <option label="Married">Married</option>
            <option label="Separated">Separated</option>
            <option label="Widowed">Widowed</option>
          </select>
          <label className="form-label">Date of birth</label>
          <input type="date" name="birthdate" className="form-input" />
          <label className="form-label">Nationality</label>
          <select id="nationality" className="form-input">
            <option label="Please select.."></option>
            <option label="Filipino"></option>
            <option label="Non-Filipino"></option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FormApply;
