import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NTUGOMarker, { NTUGO_ICON } from './NTUGOMarker';

/**
 * To render Bus and Bus Stop UI based on the `props.data` provided
 *
 * `bus` and `busStop` must be in `Array` type
 *
 * You can also customize the styling of the component by providing the props,
 *
 * Example: `color`, `opacity`, `size` which are used for customizing the `Icon` component inside the `Marker` component
 */
export default class BusMarkerCluster extends React.PureComponent {
  static propTypes = {
    bus: PropTypes.array,
    color: PropTypes.string.isRequired,
  };

  onClick = type => ({ position, title }) => {
    const { onClick } = this.props;
    onClick && onClick({ type, position, title });
  };

  renderBus = ({ position, color, ...additionalProps }) => {
    return <NTUGOMarker size={25} position={position} color={color} icon={NTUGO_ICON.BUS} {...additionalProps} />;
  };

  render() {
    const { bus = [], color } = this.props;
    const Bus = this.renderBus;
    return [
      bus.map(({ position, bearing, speed, ...additionalProps }, i) => (
        <Bus
          onClick={this.onClick('bus')}
          key={i}
          position={position}
          color={color}
          bearing={bearing - 45}
          {...additionalProps}
        />
      )),
    ];
  }
}
