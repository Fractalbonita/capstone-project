import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class DeleteDialog extends React.Component {
  id = '__delete_dialog__'
  container = null
  componentDidMount() {
    this.container = document.getElementById(this.id)
    if (!this.container) {
      this.container = document.createElement('div')
      this.container.id = this.id
      document.body.appendChild(this.container)
    }
    ReactDOM.render(<DeleteDialogX {...this.props} />, this.container)
    document.body.style.overflow = 'hidden'
  }
  componentWillUnmount() {
    document.body.style.overflow = ''
    ReactDOM.render(<></>, this.container)
  }
  render() {
    return <></>
  }
}

DeleteDialog.propTypes = {
  title: PropTypes.string,
  onCancel: PropTypes.func,
  onDelete: PropTypes.func,
}

export default DeleteDialog

function DeleteDialogX({ title, onCancel, onDelete }) {
  return (
    <Backdrop>
      <DialogContainer>
        <h2>Delete?</h2>
        <p>Are you sure you want to delete "{title}" permanently?</p>
        <ButtonsContainer>
          <Button
            className="cancel"
            type="button"
            name="cancel"
            onClick={onCancel}
          >
            Cancel
          </Button>
          <Button
            className="delete"
            type="button"
            name="delete"
            onClick={onDelete}
          >
            Delete
          </Button>
        </ButtonsContainer>
      </DialogContainer>
    </Backdrop>
  )
}

const Backdrop = styled.div`
  bottom: 0;
  height: 100vh;
  left: 0px;
  position: fixed;
  right: 0;
  top: 0px;
  z-index: 1000;

  &::before {
    background-color: var(--surface);
    bottom: 0;

    content: ' ';
    display: block;
    left: 0;
    opacity: 0.8;
    position: absolute;
    right: 0;
    top: 0;
  }
`

const DialogContainer = styled.div`
  background-color: var(--surface);
  border-radius: 20px;
  box-shadow: -3px -3px 7px #fff, 3px 3px 7px var(--inner-shadow-dark-opaque);
  left: 50vw;
  position: absolute;
  top: 50vh;
  transform: translate(-50%, -50%);
  width: 280px;

  h2 {
    margin: 24px;
  }

  p {
    margin: 0 24px 10px;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

const Button = styled.button`
  background-color: var(--surface);
  border: none;
  color: var(--primary);
  cursor: pointer;
  font-family: var(--button-font);
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.1rem;
  margin: 8px;
  padding: 10px 15px;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &.delete:hover,
  &.cancel:hover {
    background-color: var(--primary);
    border-radius: 20px;
    color: var(--surface);
  }

  &:active {
    box-shadow: inset -1px -1px 2px #fff,
      inset 1px 1px 2px var(--inner-shadow-dark-opaque);
    color: var(--text-color);
  }
`
