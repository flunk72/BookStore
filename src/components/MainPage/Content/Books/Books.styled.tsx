import styled from "styled-components";

export const BooksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  width: 100%;
`;
export const SearchBlock = styled.div`
  display: flex;
  width: 100%;
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;
  background: #ffffff;
  border-radius: 15px;
  border: 2px solid #113d6a;
  color: #113d6a;
  font-size: 14px;
  padding: 0 10px;
`;

export const ButtonSeacrh = styled.button`
  width: 100px;
  height: 30px;
  background: #113d6a;
  border-radius: 15px;
  border: 2px solid #113d6a;
  color: #ffffff;
  font-size: 14px;
  text-align: center;
  margin-left: 15px;

  &:hover {
    cursor: pointer;
    background: #ffffff;
    color: #113d6a;
  }
`;

export const Select = styled.select`
  width: 200px;
  height: 30px;
  background: #ffffff;
  border-radius: 15px;
  border: 2px solid #113d6a;
  color: #113d6a;
  font-size: 14px;
  margin-left: 25px;
  padding: 0 10px;
`;

export const BooksCard = styled.div<{ picture?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 265px;
  height: 380px;
  margin: 20px;
  border-radius: 15px;
`;

export const PictureBlock = styled.div`
  height: 70%;

  &:hover {
    cursor: pointer;
  }
`;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
`;

export const Name = styled.span`
  color: #113d6a;
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`;

export const Price = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin-top: 5px;
  color: #113d6a;
`;

export const Author = styled(Name)``;

export const ButtonBlock = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
`;

export const Button = styled.button`
  width: 110px;
  height: 30px;
  background: #ffffff;
  border-radius: 15px;
  border: 2px solid #113d6a;
  color: #113d6a;
  font-size: 14px;

  &:hover {
    cursor: pointer;
    background: #113d6a;
    color: #ffffff;
  }
`;
