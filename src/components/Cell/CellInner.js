import styled from 'styled-components'

const CellInner = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #777;
  background-color: #555;

  ${props => props.active && `
    background-color: #333;
  `}

`;

export default CellInner;