import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import { connect } from 'react-redux'

const Experience = ({ experience }) => {
  return (
    <Fragment>
      <h2 className='my-2'>Experience Credenditails</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {experience.map((exp) => {
            return (
              <tr key={exp}>
                <td>{exp.company}</td>
                <td className='hide-sm'>{exp.title}</td>
                <td className='hide-sm'>
                  <Moment format='YYYY/MM/DD'>{exp.from}</Moment> -{' '}
                  {exp.to === null ? (
                    ' Present'
                  ) : (
                    <Moment format='YYYY/MM/DD'>{exp.to}</Moment>
                  )}
                </td>
                <td>
                  <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </Fragment>
  )
}

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
}

export default Experience