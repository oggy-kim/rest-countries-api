import * as React from "react";

interface IProps {
  name: string;
}

// TODO : 해당 name에 대한 정보를 불러와 보여주기
function CountryDetail({ name }: IProps) {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
}

export default CountryDetail;
