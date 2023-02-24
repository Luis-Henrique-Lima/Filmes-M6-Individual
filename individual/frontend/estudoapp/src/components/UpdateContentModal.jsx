import { Modal, Button, Form } from 'react-bootstrap'
function UpdateContentModal(props) {
  return(
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal show={props.isModalOpen}>
        <Form onSubmit={(event) => {
          props.updateContent(event)
        }}>
        <Modal.Header closeButton onClick={props.handleClose}>
          <Modal.Title>Atualizar Filme</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId="genero">
            <Form.Label>
              Genero
            </Form.Label>
            <Form.Control defaultValue={props.content.genero} type="text" />
          </Form.Group>

          <Form.Group controlId="diretor">
            <Form.Label>
              Diretor
            </Form.Label>
            <Form.Control defaultValue={props.content.diretor} type="text" />
          </Form.Group>

          <Form.Group controlId="ano">
            <Form.Label>
              Ano
            </Form.Label>
            <Form.Control defaultValue={props.content.ano} type="number" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>Close</Button>
          <Button variant="primary" type="submit">Salvar</Button>
        </Modal.Footer>
        </Form>
      </Modal >
    </div>
  )
}

export default UpdateContentModal
