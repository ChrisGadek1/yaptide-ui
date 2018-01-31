/* @flow */

import React from 'react';
import { connect } from 'react-redux';
import type { Score, DetectorResultsInfo } from 'model/result';
import type { Detector } from 'model/simulation/detector';
import { LoadingCircle } from 'pages/Empty';
import ResultDetailsLayout from '../components/ResultDetailsLayout';
import selector from '../selector';
import { actionCreator } from '../reducer';

type Props = {
  scored: Score,
  metadata: DetectorResultsInfo,
  setup: Detector,
  isFetchPending: bool,
  fetchResults: () => void,
}

class ResultDetailsContainer extends React.Component<Props> {
  props: Props

  componentWillMount() {
    this.props.fetchResults();
  }

  render() {
    if (this.props.isFetchPending || !this.props.scored || !this.props.metadata) {
      return (
        <LoadingCircle />
      );
    }
    return (
      <ResultDetailsLayout
        setup={this.props.setup}
        scored={this.props.scored}
        dimensions={this.props.metadata.dimensions}
      />
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    scored: selector.resultScoreSelector(state, props.params.detectorId),
    metadata: selector.resultOverviewSelector(state, props.params.detectorId),
    setup: selector.resultSetupSelector(state, props.params.detectorId),
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchResults: () => (
      dispatch(actionCreator.fetchResuts(props.params.projectId, props.params.versionId))
    ),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultDetailsContainer);
