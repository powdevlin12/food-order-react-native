import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { Searchbar } from 'react-native-paper'
import styled from 'styled-components'
import { useLocationContext } from '../../../services/location/location.context'

const Search = () => {
  const {keyword : kw, search} = useLocationContext()
  const [keyword, setKeyword] = useState("")

  return (
    <ViewCustom>
      <Searchbar placeholder={kw}
        onChangeText={(text) => setKeyword(text)}
        value={keyword}
        onSubmitEditing={() => search(keyword)}
        icon="cards-heart-outline"
      />
    </ViewCustom>
  )
}
const ViewCustom = styled(View)`
    height : 100%
`
export default Search