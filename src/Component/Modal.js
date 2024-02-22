import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSave, initialContent, initialGrade }) => {

    console.log("트루맞지?",isOpen)
  const [content, setContent] = useState(initialContent)
  const [grade, setGrade] = useState(initialGrade)

  const handleChange = (e) => {
    setContent(e.target.value)
    setGrade(e.target.value)
  };

  const handleSave = () => {
    onSave(content)
    onSave(grade)
    onClose()
  };

  return (
    (isOpen && (
    <div className="modal">
        <div className="modal-content">
        <textarea value={content} onChange={handleChange} />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Close</button>
        </div>
    </div>
    ))
  );
};

export default Modal;