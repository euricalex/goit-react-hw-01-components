import styled from "styled-components";

export const StatisticSection = styled.section`
  background-color: #f4e1f6;
  max-width: 400px;
  height: 130px;
  margin: 0 auto;
  margin-top: 80px;
  margin-bottom: 20px;'

`;
export const StatisticHeader = styled.h2`
padding-top: 15px;
text-align: center;`


export const StatisticList = styled.ul`
  justify-content: center;
  display: flex;

//   gap: 30px;
 
`;
export const StatisticItem = styled.li`

color: #fff;
font-size: 16px;
font-weight: 600;
display: flex;
flex-direction: column;
align-items: center;
width: 80px;
height: 70px;
background-color: ${props => props.color};
// border-radius: 5px;
justify-content: center;
`;