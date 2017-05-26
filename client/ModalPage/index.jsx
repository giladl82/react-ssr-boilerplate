import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

require('./style.scss')

const propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
}

const defaultProps = {}

const ModalPage = ({ match, history }) => {
  const afterOpenModalHandler = (e) => {
  }
  const closeModalHandler = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <Modal
      isOpen
      onAfterOpen={afterOpenModalHandler}
      onRequestClose={closeModalHandler}
      contentLabel='Modal Page'
      className={'modalpage-base'}
      overlayClassName={'.modalpage__overlay-base'}>
      <h2>Modal Page</h2>
    </Modal >
  )
}

ModalPage.propTypes = propTypes

ModalPage.defaultProps = defaultProps

export default ModalPage
