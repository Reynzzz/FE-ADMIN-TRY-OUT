import React, { useState } from 'react';
import { Button, Modal, Form, Radio } from 'semantic-ui-react';

const AddSoal = () => {
  const [open, setOpen] = useState(false); // Modal open/close state
  const [question, setQuestion] = useState(''); // Question input
  const [options, setOptions] = useState(['', '', '', '']); // Multiple-choice options
  const [correctAnswer, setCorrectAnswer] = useState(null); // Correct answer index

  const handleOptionChange = (value, index) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddQuestion = () => {
    if (question && options.every(opt => opt.trim()) && correctAnswer !== null) {
      console.log({ question, options, correctAnswer }); // Replace with API call or state update logic
      setOpen(false); // Close the modal
      setQuestion(''); // Reset inputs
      setOptions(['', '', '', '']);
      setCorrectAnswer(null);
    } else {
      alert('Mohon isi semua field dan pilih jawaban benar.');
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      {/* Button to open the modal */}
      <Button color="blue" onClick={() => setOpen(true)}>
        Tambah Soal
      </Button>

      {/* Modal for adding a question */}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        dimmer="blurring"
        size="small"
      >
        <Modal.Header className="text-lg font-semibold text-blue-900">
          Tambah Soal Pilihan Ganda
        </Modal.Header>
        <Modal.Content>
          <Form>
            {/* Question Input */}
            <div className="mb-4">
              <label className="block text-blue-900 font-semibold mb-2">
                Pertanyaan:
              </label>
              <textarea
                placeholder="Tulis pertanyaan di sini..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="w-full border rounded-md p-3 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Options Input */}
            <div className="mb-4">
              <label className="block text-blue-900 font-semibold mb-2">
                Pilihan Jawaban:
              </label>
              {options.map((option, index) => (
                <div key={index} className="flex items-center gap-4 mb-2">
                  <input
                    type="text"
                    value={option}
                    placeholder={`Jawaban ${index + 1}`}
                    onChange={(e) => handleOptionChange(e.target.value, index)}
                    className="w-full border rounded-md p-2 focus:ring-blue-400 focus:outline-none"
                  />
                  <Radio
                    label="Benar"
                    checked={correctAnswer === index}
                    onChange={() => setCorrectAnswer(index)}
                  />
                </div>
              ))}
            </div>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          {/* Cancel Button */}
          <Button
            color="red"
            onClick={() => setOpen(false)}
            className="mr-3"
          >
            Batal
          </Button>

          {/* Submit Button */}
          <Button color="blue" onClick={handleAddQuestion}>
            Tambah
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default AddSoal;
