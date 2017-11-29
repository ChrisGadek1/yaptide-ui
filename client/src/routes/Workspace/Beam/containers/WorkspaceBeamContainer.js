/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import WorkspaceLayout from 'pages/WorkspaceLayout';
import type { Beam } from 'model/simulation/beam';
import { Map } from 'immutable';
import WorkspaceBeamLayout from '../components/WorkspaceBeamLayout';
import selector from '../../selector';
import { actionCreator } from '../../reducer';

type Props = {
  isWorkspaceLoading: bool,
  fetchSimulationSetup: () => void,
  beam: Beam,
  updateBeam: (beam: Beam) => void,
  particleOptions: Array<{value: string, name: string}>,
}

class WorkspaceBeamContainer extends React.Component<Props> {
  props: Props

  updateBeamField = (field: string, value: any) => {
    this.props.updateBeam({
      ...this.props.beam,
      [field]: value,
    });
  }

  render() {
    return (
      <WorkspaceLayout
        isWorkspaceLoading={this.props.isWorkspaceLoading}
        activeWorkspaceTab="beam"
      >
        {
          this.props.isWorkspaceLoading
            ? null
            : <WorkspaceBeamLayout
              beam={this.props.beam}
              updateBeamField={this.updateBeamField}
              particleOptions={this.props.particleOptions}
            />
        }
      </WorkspaceLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isWorkspaceLoading: selector.isWorkspaceLoading(state),
    beam: state.workspace.get('beam', Map()).toJS(),
    particleOptions: selector.allScoredParticleTypesPrinatable(state).toJS(),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSimulationSetup: () => dispatch(actionCreator.fetchSimulationSetup()),
    updateBeam: beam => dispatch(actionCreator.updateBeam(beam)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkspaceBeamContainer);
