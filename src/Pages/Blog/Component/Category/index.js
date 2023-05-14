import React from 'react'

const Category = ({category}) => {
    const {id, name} = category

    return (
      <div>
        {id}{name}
      </div>
    )
}

export default Category