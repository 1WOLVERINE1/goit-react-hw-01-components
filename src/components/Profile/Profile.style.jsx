import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  width: 300px;
  background-color: #ffffff;
  margin: 20px auto 20px;
  padding-top: 20px;
  border-radius: 4px;
  box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;
export const ProfileDescription = styled.div`
  text-align: center;
`;
export const Image = styled.img`
  width: 200px;
  margin: 0 auto 25px;
`;
export const Name = styled.p`
  color: #000000;
  font-size: 24px;
  text-weight: bold;
  margin-bottom: 10px;
`;
export const Tag = styled.p`
  margin-bottom: 10px;
  color: #c0c0c0;
`;
export const Location = styled.p`
  margin-bottom: 10px;
  color: #c0c0c0;
`;
export const ProfileStatsList = styled.ul`
  display: flex;
`;
export const ProfileStatsItem = styled.li`
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background-color: #f0f0f0;
  border: 1px solid #dedede;
  padding: 5px;
`;
export const StatsLabel = styled.span`
  color: #c0c0c0;
`;
export const StatsQuantity = styled.span`
  font-weight: bold;
`;
