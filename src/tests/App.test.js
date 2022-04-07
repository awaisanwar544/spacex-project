import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Rockets from '../components/Rockets';
import Profile from '../components/Profile';
import Header from '../components/Header';
import RocketCard from '../components/RocketCard';
import ReserveButton from '../components/ReserveButton';
import LeaveButton from '../components/LeaveButton';
import ReserveBadge from '../components/ReserveBadge';

jest.mock('../components/ReserveButton');
jest.mock('../components/LeaveButton');

describe('App Components Render Correctly', () => {
  it('Header renders correctly', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rockets renders correctly with empty store', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rocket card renders correctly when reserved is false', () => {
    const tree = renderer.create(
      <RocketCard id={1} rocketName="" description="" flickrImages="" reserved={false} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('ReserveButton renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <ReserveButton id={1} />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('LeaveButton renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <LeaveButton id={1} />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Rocket card renders correctly when reserved is true', () => {
    const tree = renderer.create(
      <RocketCard id={1} rocketName="" description="" flickrImages="" reserved />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('ReserveBadge renders correctly', () => {
    const tree = renderer.create(
      <ReserveBadge />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Profile renders correctly with empty store', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
