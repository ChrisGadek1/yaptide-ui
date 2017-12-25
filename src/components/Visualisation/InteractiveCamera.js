/* @flow */

import React from 'react';
import { Vector3 } from 'three';
import { PerspectiveCamera } from 'react-three';

type Props = {
  name: string;
  aspect: number,
  position: Vector3,
  lookat: Vector3,
  children: React$Element<*>,
};

type State = {
  position: Vector3,
  lookat: Vector3,
};

class InteractiveCamera extends React.Component<Props, State> {
  props: Props;
  state: State = {
    position: this.props.position,
    lookat: this.props.lookat,
  };

  componentWillMount() {
    this.setState({
      position: this.props.position,
      lookat: this.props.lookat,
    });
  }

  render() {
    return (
      <PerspectiveCamera
        name={this.props.name}
        aspect={this.props.aspect}
        near={1}
        far={5000}
        fov={75}
        position={this.state.position}
        lookat={this.state.lookat}
      >
        {this.props.children}
      </PerspectiveCamera>
    );
  }
}

export default InteractiveCamera;
