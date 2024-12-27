import React, { useState } from 'react'
import {
  ModalContent,
  ModalActions,
  Button,
  Header,
  Icon,
  Modal,
  Form,
} from 'semantic-ui-react'

export default function AddTryOut() {
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    // Handle form submission (e.g., send data to the server)
    console.log(formData)
    setOpen(false)
  }

  return (
    <Modal
      closeIcon
      open={open}
      trigger={<Button className="">Tambah Try Out</Button>}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon="archive" content="Tambah Try Out" />
      <ModalContent>
        <Form>
          <Form.Input
            label="Nama Try Out"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Masukkan nama try out"
          />
          <Form.TextArea
            label="Deskripsi"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Masukkan deskripsi try out"
          />
          <Form.Input
            label="Tanggal"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </Form>
      </ModalContent>
      <ModalActions>
        <Button color="red" onClick={() => setOpen(false)}>
          <Icon name="remove" /> Batal
        </Button>
        <Button color="green" onClick={handleSubmit}>
          <Icon name="checkmark" /> Simpan
        </Button>
      </ModalActions>
    </Modal>
  )
}
