import React, { useState } from 'react'
import { View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'

const Search = () => {
  const [search, setSearch] = useState("")

  const onChangeText = (query) => {
    setSearch(query)
  }
  return (
    <ViewCustom>
      <Searchbar placeholder='Search'
        onChangeText={onChangeText}
        value={search}
        icon="cards-heart-outline"
      />
    </ViewCustom>
  )
}
const ViewCustom = styled(View)`
    height : 100%
`
export default Search