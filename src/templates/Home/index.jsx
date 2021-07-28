import * as S from './styles'
import React, { useState } from 'react';
import Calendar from 'react-calendar';

function Home() {
  const [value, onChange] = useState(new Date());

  return (
    <S.Wrapper>
      <Calendar
        tileContent={({ date, view }) => view === 'month' ? <p>ja existe uma reserva</p> : null}
        onClickDay={(value, event) => console.log('Clicked day: ', value, event)}
        onChange={onChange}
        value={value}
      />
    </S.Wrapper>
  );
}

export default Home