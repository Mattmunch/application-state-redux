import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import { takeNap, drinkCoffee, study, eatSnack } from '../actions/moodActions';
import { getMood, getFace } from '../selectors/moodSelectors';

const Moods = () => {

  const dispatch = useDispatch();
  const { coffees, snacks, naps, studies } = useSelector(getMood);
  const face = useSelector(getFace);

  return (
    <>
      <Controls>
        <button onClick={() => dispatch(drinkCoffee())}>Coffee - {coffees}</button>
        <button onClick={() => dispatch(eatSnack())}>Snacks - {snacks}</button>
        <button onClick={() => dispatch(takeNap())}>Naps - {naps}</button>
        <button onClick={() => dispatch(study())}>Studies - {studies}</button>
      </Controls>
      <Face emoji={face} />
    </>
  );
};
export default Moods;
