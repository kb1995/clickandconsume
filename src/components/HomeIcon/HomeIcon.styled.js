import styled from 'styled-components'

export const Icon = styled.div`
  position: fixed;
  top: 10px;
  left: 50%;
  cursor: pointer;
  transition: opacity 0.6s ease-out;

  &.inactive {
    opacity: 0;
  }
  
  img{
    width: 50px;
  }

`
