import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addEducation } from '../../actions/profile'
import { Link, useNavigate } from 'react-router-dom'

const AddEducation = ({ addEducation }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  })

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData

  const [isCurrent, toggleIsCurent] = useState(false)

  const changeFormData = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    addEducation(formData, navigate)
  }

  return (
    <section className='container'>
      <h1 className='large text-primary'>Add An Education</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add any school, bootcamp, etc
        that you have attended
      </p>
      <small>* = required field</small>
      <form className='form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* School or Bootcamp'
            name='school'
            value={school}
            onChange={changeFormData}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Degree or Certificate'
            name='degree'
            value={degree}
            onChange={changeFormData}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Field Of Study'
            name='fieldofstudy'
            value={fieldofstudy}
            onChange={changeFormData}
          />
        </div>
        <div className='form-group'>
          <h4>From Date</h4>
          <input
            type='date'
            name='from'
            value={from}
            onChange={changeFormData}
          />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              value={current}
              checked={current}
              onChange={() => {
                setFormData({ ...formData, current: !current })
                toggleIsCurent(!isCurrent)
              }}
            />{' '}
            Current School or Bootcamp
          </p>
        </div>
        <div className='form-group'>
          <h4>To Date</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={changeFormData}
            disabled={isCurrent ? 'disabled' : ''}
          />
        </div>

        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Program Description'
            value={description}
            onChange={changeFormData}
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' to='/dashboard'>
          Go Back
        </Link>
      </form>
    </section>
  )
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(AddEducation)
