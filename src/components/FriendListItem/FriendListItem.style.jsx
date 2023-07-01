import styled from '@emotion/styled';

const Color = props => {
  return props.isOnline ? 'green' : 'red';
};

export const Item = styled.li`
  width: 300px;
  height: 80px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: #ffffff;
  margin: 0 auto;
  padding: 10px;
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${Color};
`;
export const Avatar = styled.img`
  width: 50px;
`;
export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
`;
