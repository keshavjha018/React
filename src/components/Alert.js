import React from 'react'

export default function Alert(props) {
  return (
      // runs only if props.alert is not null
        props.alert && <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show my-4 container`} role="alert">
        <strong>{props.alert.msg}</strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}
