import React from 'react'
import styled from 'styled-components'

const UserPart = () => {
  return (
    <ContainerUserPart>
      <div>UserPart</div>
    </ContainerUserPart>
  )
}

const ContainerUserPart = styled.div`
	background-color: #ffffff;
  border-radius: 16px;
  padding-top: 0.5%;
  display: flex;
  width: 90%;
  height: 40%;
  border: solid 1px #DADADA;
`


export default UserPart