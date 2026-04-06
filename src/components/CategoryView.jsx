import React from 'react'
import AreaView from './AreaView'

const CategoryView = ({ meals, loading }) => {
  return (
    <div>
      <AreaView meals={meals} loading={loading} />
    </div>
  )
}

export default CategoryView