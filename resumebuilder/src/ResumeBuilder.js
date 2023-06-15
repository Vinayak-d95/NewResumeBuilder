import React, { useState } from 'react';
import './ResumeBuilder.css';

const ResumeBuilder = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([{ institute: '', year: '', degree: '' }]);
  const [experience, setExperience] = useState([{ company: '', year: '', designation: '' }]);
  const [skills, setSkills] = useState([]);
  const [skillInput, setSkillInput] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEducationChange = (index, event) => {
    const { name, value } = event.target;
    const updatedEducation = [...education];
    updatedEducation[index][name] = value;
    setEducation(updatedEducation);
  };

  const handleExperienceChange = (index, event) => {
    const { name, value } = event.target;
    const updatedExperience = [...experience];
    updatedExperience[index][name] = value;
    setExperience(updatedExperience);
  };

  const handleSkillInputChange = (event) => {
    setSkillInput(event.target.value);
  };

  const handleSkillAdd = () => {
    if (skillInput.trim() !== '' && !skills.includes(skillInput)) {
      setSkills([...skills, skillInput]);
      setSkillInput('');
    }
  };

  const handleSkillDelete = (skill) => {
    const updatedSkills = skills.filter((s) => s !== skill);
    setSkills(updatedSkills);
  };

  const handleEducationAdd = () => {
    setEducation([...education, { institute: '', year: '', degree: '' }]);
  };

  const handleEducationDelete = (index) => {
    const updatedEducation = [...education];
    updatedEducation.splice(index, 1);
    setEducation(updatedEducation);
  };

  const handleExperienceAdd = () => {
    setExperience([...experience, { company: '', year: '', designation: '' }]);
  };

  const handleExperienceDelete = (index) => {
    const updatedExperience = [...experience];
    updatedExperience.splice(index, 1);
    setExperience(updatedExperience);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the form data (e.g., save it to a database, generate a PDF, etc.)
  };

  return (
    <div className="container">
      <h1>Resume Builder</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" value={name} onChange={handleNameChange} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" value={email} onChange={handleEmailChange} />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input type="text" className="form-control" id="address" value={address} onChange={handleAddressChange} />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" className="form-control" id="phone" value={phone} onChange={handlePhoneChange} />
        </div>

        <div className="form-group">
          <label>Education:</label>
          {education.map((edu, index) => (
            <div key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="Institute"
                name="institute"
                value={edu.institute}
                onChange={(event) => handleEducationChange(index, event)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Year"
                name="year"
                value={edu.year}
                onChange={(event) => handleEducationChange(index, event)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Degree"
                name="degree"
                value={edu.degree}
                onChange={(event) => handleEducationChange(index, event)}
              />
              {index === education.length - 1 && (
                <button className="btn btn-link add-more" type="button" onClick={handleEducationAdd}>
                  Add More
                </button>
              )}
              {index !== education.length - 1 && (
                <button
                  className="btn btn-link add-more"
                  type="button"
                  onClick={() => handleEducationDelete(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="form-group">
          <label>Experience:</label>
          {experience.map((exp, index) => (
            <div key={index}>
              <input
                type="text"
                className="form-control"
                placeholder="Company"
                name="company"
                value={exp.company}
                onChange={(event) => handleExperienceChange(index, event)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Year"
                name="year"
                value={exp.year}
                onChange={(event) => handleExperienceChange(index, event)}
              />
              <input
                type="text"
                className="form-control"
                placeholder="Designation"
                name="designation"
                value={exp.designation}
                onChange={(event) => handleExperienceChange(index, event)}
              />
              {index === experience.length - 1 && (
                <button className="btn btn-link add-more" type="button" onClick={handleExperienceAdd}>
                  Add More
                </button>
              )}
              {index !== experience.length - 1 && (
                <button
                  className="btn btn-link add-more"
                  type="button"
                  onClick={() => handleExperienceDelete(index)}
                >
                  Remove
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="form-group">
          <label>Skills:</label>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add a skill"
              value={skillInput}
              onChange={handleSkillInputChange}
            />
            <button className="btn btn-secondary" type="button" onClick={handleSkillAdd}>
              Add
            </button>
          </div>
          {skills.map((skill, index) => (
            <span key={index} className="badge badge-primary skill-badge">
              {skill}
              <button
                type="button"
                className="close"
                aria-label="Remove"
                onClick={() => handleSkillDelete(skill)}
              >
                &times;
              </button>
            </span>
          ))}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ResumeBuilder;



