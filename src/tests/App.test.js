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
import Missions from '../components/Missions';
import Mission from '../components/Mission';
import MissionTrue from '../components/MissionTrue';
import MissionFalse from '../components/MissionFalse';

jest.mock('../components/ReserveButton');
jest.mock('../components/LeaveButton');
jest.mock('react-redux');
jest.mock('../components/MissionFalse');
jest.mock('../components/MissionTrue');

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

  it('Rocket card renders correctly when joined is false', () => {
    const tree = renderer.create(
      <RocketCard id={1} rocketName="" description="" flickrImages="" joined={false} />,
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

  it('Rocket card renders correctly when joined is true', () => {
    const tree = renderer.create(
      <RocketCard id={1} rocketName="" description="" flickrImages="" joined />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('ReserveBadge renders correctly', () => {
    const tree = renderer.create(
      <ReserveBadge />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Missions renders correctly with empty store', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Mission renders correctly when joined is true', () => {
    const tree = renderer.create(
      <Mission missionId="1" missionName="" missionDescription="" missionStatus />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Mission renders correctly when joined is false', () => {
    const tree = renderer.create(
      <Mission missionId="1" missionName="" missionDescription="" missionStatus={false} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('MissionTrue renders correctly', () => {
    const tree = renderer.create(
      <MissionTrue id="1" />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('MissionFalse renders correctly', () => {
    const tree = renderer.create(
      <MissionFalse id="1" />,
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
