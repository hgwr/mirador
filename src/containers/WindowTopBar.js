import { compose } from 'redux';
import { connect } from 'react-redux';
import { withNamespaces } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import * as actions from '../state/actions';
import miradorWithPlugins from '../lib/miradorWithPlugins';
import { getWindowManifest, getManifestTitle } from '../state/selectors';
import WindowTopBar from '../components/WindowTopBar';

/** mapStateToProps */
const mapStateToProps = (state, { windowId }) => ({
  manifestTitle: getManifestTitle(getWindowManifest(state, windowId)),
});

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ManifestListItem
 * @private
 */
const mapDispatchToProps = (dispatch, { windowId }) => ({
  closeWindow: () => dispatch(actions.closeWindow(windowId)),
  toggleWindowSideBar: () => dispatch(actions.toggleWindowSideBar(windowId)),
});


const styles = {
  typographyBody: {
    flexGrow: 1,
    fontSize: '1em',
  },
  reallyDense: {
    minHeight: 32,
    paddingLeft: 4,
  },
};

const enhance = compose(
  withNamespaces(),
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
  miradorWithPlugins,
);

export default enhance(WindowTopBar);
