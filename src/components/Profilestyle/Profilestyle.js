import styled from "styled-components";

 export const Container = styled.div`
 background-color: #f3eae8;
max-width: 300px;
height:550px;

margin: 0 auto;
margin-top: 50px;
text-align: center;
`;
export const Avatar = styled.img`
padding-top: 20px;
width: 300px;
height: 300px; 
border-radius: 50%; 
margin: 0 auto; 
transition: all 0.3s ease; 
`;
export const Description = styled.p`
font-size: 24px; 
  color: #333333; 
  margin: 10px 0; 
  font-weight: bold; 
`;


export const Tag = styled.p`
  color: #555555;
`;

export const Location = styled.p`
  color: #555555;
`;

export const StatsList = styled.ul`
background-color:#e2e2e2;
height: 90px;

margin-top: 70px;
justify-content: center;
// margin-right: 10px;
display: flex;
gap: 40px;
`;

export const StatItem = styled.li`
margin: 5px 0;
padding-top: 15px;
color: #333333;
display: flex;
flex-direction: column; 
align-items: center; 
`;

export const StatLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;

`;
